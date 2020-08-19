package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import vo.ParamVO;

@Controller
public class MainController {
	public static final String VIEW_PATH = "/WEB-INF/views/";


	//메서드에 전달 가능한 인수 타입으로는 HttpServletRequest,HttpSession,SessionStatus,Model, 그리고 파라미터를 받을 수 있다.
	@RequestMapping("/get_param.do")
	public String get_param1(Model model, String name, int age){	//요청 파라미터의 이름을 지정하지 않았다면 name, age가 파라미터 이름으로 간주된다.
		//Request객체가 있다고 하더라도 request.getParamer로 값을 전달받을 수 없음.
		//get_param.do?name=''&age=12..
		//파라미터 정보가 메서드로 자동으로 넘어온다. 또한 형변환도 함께 이루어진다.
		ParamVO vo = new ParamVO(name, age);
		model.addAttribute("vo", vo);
		return VIEW_PATH + "mainpage.jsp";
	}
	
	//RequestParam을 통해 파라미터를 받아온다. 
	@RequestMapping("/get_param2.do")
	public String get_param2(Model model, 
			@RequestParam(value="name", required=false)String name, //required 속성을 통해 요청 파라미터를 필수로 만들거나 선택적으로 만들 수 있다.
			@RequestParam(value="age", defaultValue="20")int age){	//defaultValue 속성을 통해 파라미터의 디폴트값을 설정할 수 있다.
		ParamVO vo = new ParamVO(name, age);
		model.addAttribute("vo", vo);
		return VIEW_PATH + "mainpage.jsp";
	}
	
	//파라미터로 넘어온 값을 객체의 형태로 받을 수 있다. 파라미터는 vo에 속성이 일치하는 변수에 자동으로 대입된다. 단 vo의 멤버변수와 파라미터명이 일치해야 한다.
	@RequestMapping("/get_param3.do")	
	public String get_param3(Model model, ParamVO vo) {	
		model.addAttribute("vo", vo);
		return VIEW_PATH + "mainpage.jsp";
	}
}
