package com.jh.fileupload;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import vo.PhotoVO;

@Controller
public class FileUploadController {
	public static final String VIEW_PATH = "/WEB-INF/views/";
	
	//@Autowired(자동주입) : 자동으로 객체생성 -> ServletContext, HttpServletRequest, HttpSession등 일부 객체를 자동생성 가능하다.
	@Autowired	
	ServletContext application;
	@Autowired
	HttpServletRequest request;
	@Autowired
	HttpServletRequest session;
	
	//파일업로드 입력 폼
	@RequestMapping(value={"/", "/insert_form.do"})
	public String insert_form() {
		
		return VIEW_PATH + "insert_form.jsp";
	}
	
	//파일 업로드
	@RequestMapping("/upload.do")
	public String upload(PhotoVO vo, Model model) {
		String webPath = "/resources/upload/";	//upload 폴더
		String savePath = application.getRealPath(webPath);	//절대경로로 변환. 클라이언트들이 이 경로에 사진을 업로드 할 수 있음.
		System.out.println(savePath);
		//업로드된 파일의 정보
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
		
		model.addAttribute("vo", vo);
		return VIEW_PATH + "input_result.jsp";	
	}
	
}
