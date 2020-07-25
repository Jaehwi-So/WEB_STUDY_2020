package controller;

import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import service.BoardService;
import service.BoardServiceImpl;

//@ : 어노테이션 : 프로그래밍 주석
//@Override처럼 컴파일러에게 오버라이딩 메서드임을 빠르게 캐치하고 정보를 제공하기 위한 용도가
//있는 반면, @Controller처럼 특수한 기능으로써 동작하게 하기위한 용도로도 사용된다.
@Controller
public class BoardController {
	BoardService service;
	
	public BoardController() {
		System.out.println("--BoardController의 생성자--");
	}
	
	public void setService(BoardService service) {
		this.service = service;
	}
	
	//사용자가 요청한 url을 접수
	@RequestMapping("/list.do")
	public String list( Model model ) {
		//Model인터페이스는 Servlet과 Controller를 연결하는 중간 매개체
		List list = service.selectList();
		model.addAttribute("list", list);
		return "board_list";//결과 포워딩
	}
	
	
}






















































