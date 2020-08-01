package controller;

import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import service.BoardService;
import service.BoardServiceImpl;

@Controller
public class BoardController {
	BoardService service;
	
	public BoardController() {
		System.out.println("--BoardController의 생성자--");
	}
	
	public void setService(BoardService service) {
		this.service = service;
	}
	
	@RequestMapping("/")
	public String list( Model model ) {
		List<String> list = service.selectList();
		model.addAttribute("list", list);
		return "board_list";//결과 포워딩
	}
	
	
}






















































