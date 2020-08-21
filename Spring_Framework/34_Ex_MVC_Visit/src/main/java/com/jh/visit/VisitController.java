package com.jh.visit;

import java.io.File;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import dao.VisitDAO;
import vo.VisitVO;

@Controller
public class VisitController {
	
	public static final String VIEW_PATH = "/WEB-INF/views/visit/";
	
	VisitDAO visit_dao;
	public void setVisit_dao(VisitDAO visit_dao) {
		this.visit_dao = visit_dao;
	}
	
	@Autowired
	HttpServletRequest request;
	@Autowired
	ServletContext application;
	
	//방명록 보기
	@RequestMapping(value={"/", "/list.do"})
	public String list(Model model) {
		List<VisitVO> list = visit_dao.selectList();
		model.addAttribute("list", list);
		return VIEW_PATH + "visit_list.jsp";
		
	}
	
	//새글쓰기 폼으로 포워딩
	@RequestMapping("/insert_form.do")
	public String insert_form() {
		return VIEW_PATH + "visit_insert_form.jsp";
	}
	
	//새글 등록하기
	@RequestMapping("/insert.do")
	public String insert(VisitVO vo) {	//form의 요소들이 vo로 자동으로 넘어옴. request는 IP를 구할 때 필요
		String ip = request.getRemoteAddr();
		String content = vo.getContent().replaceAll("\n", "<br>");	//\n(엔터값)을 jsp의 <br>로 바꿈. 이렇게 생성하는 것이 수정시 유용하다.
		vo.setContent(content);
		vo.setIp(ip);
		
		//===파일 업로드===
		String webPath = "/resources/upload/";
		String savePath = application.getRealPath(webPath);
		System.out.println(savePath);
		MultipartFile photo = vo.getPhoto();
		String filename = "no_file";
		//업로드한 파일이 실제로 존재할 시
		if(!photo.isEmpty()) {
			filename = photo.getOriginalFilename();	//실제 파일명
			
			//저장할 파일 경로 지정
			File saveFile = new File(savePath, filename);	//파일이 생성되는게 아니라 파일명으로 폴더가 생성된다. 따라서 밑에 photo.transferTo()메서드를 사용한다.
			
			//물리적으로 존재하지 않는 폴더일 경우 생성
			if(!saveFile.exists()) {		
				saveFile.mkdirs();	//없는 폴더 생성
			}
			else {
				//동일파일명 업로드 방지를 위해 현재 업로드 시간을 붙여서 중복 방지
				long time = System.currentTimeMillis();
				filename = String.format("%d_%s", time, filename);
				saveFile = new File(savePath, filename);
			}
			
			//1. filename을 폴더가 아니라 실제 이미지 파일로 복사됨. 
			//2. 업로드된 파일은 MultipartResolver라는 클래스(photo)가 지정해둔 임시저장소에 있는데, 
			//	  임시 저장소의 파일은 일정시간이 지나면 사라지기 때문에 내가 지정해준 savaPath경로로 복사해준다.
			try {
				photo.transferTo(saveFile);	
			} catch (Exception e) {
				e.printStackTrace();
			} 			
		}
		vo.setFilename(filename);
		//===파일 업로드===
		int res = visit_dao.insert(vo);

		//response.sendRedirect("")
		return "redirect:list.do";	//리타이렉트
		
	}
	
	//글 삭제하기
	@RequestMapping("/delete.do")
	@ResponseBody	//# return값을 view(html, jsp)로 인식하지 말고 텍스트타입 그대로 Ajax로 콜백메서드로 반환하기 위한 Annotation이다.
	public String delete(int idx) {
		int res = visit_dao.delete(idx);
		String result = String.format("[{'result':'%s'}]", "no");
		if(res != 0) {
			result = String.format("[{'result':'%s'}]", "yes");
		}
		return result;	//@ResponseBody로 인해 view로 인식하는 것이 아닌 String으로 반환됨. 
	}
	
	//글 수정하기 위해서 DB에서 해당 idx의 내용을 가져옴
	@RequestMapping("/modify_form.do")
	public String modify_form(Model model, int idx) {
		VisitVO vo = visit_dao.selectOne(idx);	
		String content = vo.getContent().replaceAll("<br>", "\n");	//<hr>을 다시 \n로 바꿈
		vo.setContent(content);
		if(vo != null) {
			model.addAttribute("vo", vo);
		}
		return VIEW_PATH + "visit_modify_form.jsp";
	}
	
	//글 수정하기
	@RequestMapping("/modify.do")
	@ResponseBody
	public String modify(VisitVO vo) {
		String content = vo.getContent().replaceAll("\n", "<br>");
		vo.setContent(content);
		vo.setIp(request.getRemoteAddr());
		int res = visit_dao.modify(vo);
		String result = String.format("[{'result':'%s'}]", "no");
		if(res != 0) {
			result = String.format("[{'result':'%s'}]", "yes");
		}
		System.out.println(result);
		return result;	//@ResponseBody로 인해 view로 인식하는 것이 아닌 String으로 반환됨. 
	}
}










