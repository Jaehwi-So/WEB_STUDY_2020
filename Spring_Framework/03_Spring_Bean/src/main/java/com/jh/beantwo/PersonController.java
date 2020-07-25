package com.jh.beantwo;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import service.PersonService;

@Controller
public class PersonController {
	PersonService service;
	public void setService(PersonService service) {
		this.service = service;
	}
	
	@RequestMapping("/test.do")
	public String test(Model model){
		List<String> list = service.selectDB();
		System.out.println(list);
		model.addAttribute("list", list);
		return "test_view";
	}
}
