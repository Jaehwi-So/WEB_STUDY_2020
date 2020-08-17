package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import service.MemoService;
import vo.MemoVO;

@Controller
public class MemoController {
	
	@Autowired
	private MemoService memo_service;
	public static final String VIEW_PATH = "/WEB-INF/views/";
	
	public void setMemo_service(MemoService memo_service) {
		this.memo_service = memo_service;
	}
	
	@RequestMapping("/")
	public String move_list_page(Model model) {
		List<MemoVO> list = memo_service.get_memo_list();
		model.addAttribute("list", list);
		return "mainpage";
	}
}
