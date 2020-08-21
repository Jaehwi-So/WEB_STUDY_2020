package com.jh.board;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import dao.BoardDAO;
import util.PageUtil;
import util.Paging;
import vo.BoardVO;

@Controller
public class BoardController {
	
	@Autowired
	HttpServletRequest request;

	BoardDAO board_dao;
	public void setBoard_dao(BoardDAO board_dao) {
		this.board_dao = board_dao;
	}
	
	@RequestMapping(value={"/", "list.do"})
	public String list( Model model, Integer page ) {
		
		int nowPage = 1;//기본페이지
		
		if( page != null ) {
			nowPage = page;
		}
		
		//한 페이지에 표시되는 게시물의 시작과 끝 번호를 계산
		int start = (nowPage -1 ) * PageUtil.Board.BLOCKLIST + 1;
		int end = start + PageUtil.Board.BLOCKLIST - 1;
		
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("start", start);
		map.put("end", end);
		
		//게시글 전체목록 가져오기
		List<BoardVO> list = null; 		
		list = board_dao.selectList( map );
		
		//전체게시물 수 구하기
		int row_total = board_dao.getRowTotal();
		
		//하단 페이지 메뉴 생성하기
		String pageMenu = Paging.getPaging(
					"list.do", nowPage, row_total, 
					PageUtil.Board.BLOCKLIST, 
					PageUtil.Board.BLOCKPAGE);
		
		model.addAttribute("list", list);
		model.addAttribute("pageMenu", pageMenu);
		
		//세션에 기록되어 있던 show정보를 지운다
		request.getSession().removeAttribute("show");
		
		return PageUtil.Board.VIEW_PATH + "board_list.jsp";
	}
	
	@RequestMapping("/view.do")
	public String view( Model model, int idx ) {
		//idx에 해당하는 게시글 한 건 얻어오기
		BoardVO vo = board_dao.selectOne(idx);
		
		//조회수 증가
		HttpSession session = request.getSession();
		String show = (String)session.getAttribute("show");
		
		if( show == null ) {
			board_dao.update_readhit(idx);
			session.setAttribute("show", "yes");
		}
		
		model.addAttribute("vo", vo);
		
		return PageUtil.Board.VIEW_PATH + "board_view.jsp";
	}
	
	//게시글 작성 화면으로 이동
	@RequestMapping("/insert_form.do")
	public String insert_form() {
		return PageUtil.Board.VIEW_PATH + "board_write.jsp";
	}
	
	//게시글 등록
	@RequestMapping("/insert.do")
	public String insert( Model model, BoardVO vo) {
		
		String ip = request.getRemoteAddr();//접속자의 ip
		
		vo.setIp(ip);
		
		board_dao.insert(vo);
		
		//response.sendRedirect("list.do");
		return "redirect:list.do";
		
	}
	
	//게시글 삭제
	@RequestMapping("/del.do")
	@ResponseBody
	public String delete(int idx, String pwd) {
		//삭제하고자 하는 vo정보를 얻어온다
		BoardVO baseVO = board_dao.selectOne(idx, pwd);
		
		String resultStr = "";
		String result = "no";
		
		if( baseVO == null ) {
			//idx나 pwd가 일치하지 않을 경우 null이기 때문에 no를 콜백메서드로 전송한다
			resultStr = String.format("[{'result':'%s'}]", result);
			return resultStr;
		}
		
		baseVO.setSubject("작성자에 의해 삭제된 게시글입니다");
		baseVO.setName("known");
		
		//변경된 내용을 DB에 적용하여 삭제된 것 처럼 업데이트
		int res = board_dao.del_update( baseVO );
		
		if( res == 1 ) {
			result = "yes";
		}
		
		resultStr = String.format("[{'result':'%s'}]", result);
		return resultStr;
		
	}
	
	//댓글작성 화면으로 전환
	@RequestMapping("/reply_form.do")
	public String reply_form() {
		return PageUtil.Board.VIEW_PATH + "board_reply.jsp";
	}
	
	//댓글 등록
	@RequestMapping("/reply.do")
	public String reply( BoardVO vo, int page ) {
		String ip = request.getRemoteAddr();
		
		//댓글을 달고자 하는 기준글 번호(idx)를 사용하여 게시물 정보를 얻기
		BoardVO baseVO = board_dao.selectOne(vo.getIdx());
		
		//기준글의 step보다 큰 값은 step + 1처리
		board_dao.update_step( baseVO );
		
		//댓글을 달기위한 VO를 포장
		vo.setIp(ip);
		
		//댓글이 들어갈 위치 선정
		vo.setRef( baseVO.getRef() );
		vo.setStep( baseVO.getStep() + 1);
		vo.setDepth(baseVO.getDepth() + 1 );
		
		//댓글 등록
		board_dao.reply(vo);
		
		//response.sendRedirect("list.do?page="+page);
		return "redirect:list.do?page="+page;
	}
	
}













