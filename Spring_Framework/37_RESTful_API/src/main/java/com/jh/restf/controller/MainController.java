package com.jh.restf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
 

@Controller
public class MainController {
	public static final String VIEW_PATH = "/WEB-INF/views/";
	
	@RequestMapping({"/", "main.do"})
	public String main_page(Model model) {
		return VIEW_PATH + "mainpage.jsp";	//View 이름을 return시킨다.
	}
}
