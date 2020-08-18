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
	
	//웹 MVC 에너테이션 활용을 위해 <annotation-driven> 엘리먼트를 통해 웹 MVC 에너테이션을 활성화 해야한다.
	//RequestMapping 애너테이션을 사용해서 들어오는 요청을 적절한 컨트롤러 메서드로 매핑한다. 
	//RequestMapping을 설정한 메서드의 시그니처는 유연하게 지정이 가능하다. 
	
	
	//두 개 이상의 매핑 처리
	@RequestMapping({"/", "main.do"})
	public String main_page(Model model) {
		String str = "RequestMapping({\"/\", \"main.do\"}) or RequestMapping(\"main1.do\")";
		model.addAttribute("str", str);	//Model 영역에 Attribute
		return VIEW_PATH + "main.jsp";	//View 이름을 return시킨다.
	}
	

	@RequestMapping("main1.do")
	public String two_page(Model model) {
		String str = "RequestMapping('main')";
		model.addAttribute("str", str);
		return "redirect:main.do";	//redirect:를 붙이면 뷰 이름이 아닌 리다이렉션 URL로 해석한다.
	}
	
	//HTTP 메서드에 따른 요청 매핑
	@RequestMapping(value = "method.do", method = RequestMethod.GET)
	public String method_page(Model model) {
		String str = "RequestMapping(value = \"method.do\", method = RequestMethod.GET)";
		model.addAttribute("str", str);
		return VIEW_PATH + "main.jsp";
	}
	
	//요청 파라미터에 따른 매핑
	@RequestMapping(params="var=1", value = "param.do")
	public String param_page(Model model) {
		String str = "RequestMapping(params=\"var=1\", value = \"param.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "main.jsp";
	}
	
	@RequestMapping(params="var=2", value = "param.do")
	public String param2_page(Model model) {
		String str = "RequestMapping(params=\"var=2\", value = \"param.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "main.jsp";
	}
	
	//여러 요청 파라미터 이름-값 쌍을 지정하기
	@RequestMapping(params= {"var1=1", "var2=1"}, value = "multi_param.do")
	public String multi_param_page(Model model) {
		String str = "RequestMapping(params=\"var=2\", value = \"param.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "main.jsp";
	}
	
	//특정 파라미터(var)가 존재할 때만 매핑
	@RequestMapping(params= "var", value = "exist_param.do")
	public String exist_param_page(Model model) {
		String str = "RequestMapping(params= \"var\", value = \"exist_param.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "main.jsp";
	}
	
	//특정 파라미터(var)가 존재하지 않을 때만 매핑
	@RequestMapping(params= "!var", value = "exist_param.do")
	public String not_exist_param_page(Model model) {
		String str = "RequestMapping(params= \"!var\", value = \"exist_param.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "main.jsp";
	}
	
	//요청의 MIME타입에 따라 매핑.
	@RequestMapping(consumes = "application/json", value = "consume.do")
	public String consume_page(Model model) {
		String str = "RequestMapping(consumes = \"application/json\", value = \"exist.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "main.jsp";
	}
	//응답으로 받을 수 있는 MIME타입에 따라 매핑. 
	@RequestMapping(produces = "application/json", value = "produce.do")
	public String produce_page(Model model) {
		String str = "RequestMapping(produces = \"application/json\", value = \"produce.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "main.jsp";
	}
	//요청 헤더값에 따라 매핑
	@RequestMapping(headers = "Content-Type=text/plain", value = "header.do")
	public String header_page(Model model) {
		String str = "RequestMapping(headers = \"Content-Type=text/plain\", value = \"header.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "main.jsp";
	}
}
