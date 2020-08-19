package controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;


import vo.ParamVO;

@Controller
@RequestMapping(value = "/attr/*")
public class AttributeController {
	public static final String VIEW_PATH = "/WEB-INF/views/";
	
	//model.addAttribute()를 통해 데이터 바인딩하기
	public String one_page(ParamVO person, Model model) {
		model.addAttribute("name", person.getName());
		model.addAttribute("age", person.getAge());
		return VIEW_PATH + "resultpage.jsp";
	}
	/*
	1. 인수에 @ModelAttribute 어노테이션이 있는 경우
	파라미터로 넘겨 준 타입의 오브젝트를 자동으로 생성한다. getter와 setter가 명명 규칙에 맞게 만들어져 있어야 한다.
	생성된 오브젝트에(person) HTTP로 넘어 온 값들을 자동으로 바인딩한다. 
	@ModelAttribute 어노테이션이 붙은 객체가 자동으로 Model 객체에 추가된다.
	*/
	@RequestMapping("send_form1.do")
	public String two_page(@ModelAttribute("personVO")ParamVO person, Model model) {
		return VIEW_PATH + "resultpage.jsp";
	}
	
	/*
	2. 메서드 시작에 @ModelAttribute 어노테이션이 있는 경우
	return되는 값을 model영역에 attrStr이라는 이름으로 바인딩한다.
	*/
	@ModelAttribute("attrStr")
	public String attributeStr(){
	    return "ModelAttribute";
	}

}
