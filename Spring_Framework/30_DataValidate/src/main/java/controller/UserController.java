package controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import dto.UserDTO;
import validate.UserValidator;
import vo.UserVO;

@Controller
@RequestMapping(value = "/user/*")
public class UserController {
	public static final String VIEW_PATH = "/WEB-INF/views/";
	
	//Validator 클래스 구현을 통한 데이터 유효성 검사
	@RequestMapping({"join.do"})
	public String userJoin(@ModelAttribute UserVO vo, BindingResult result, Model model) {
		new UserValidator().validate(vo, result); 
		if(result.hasErrors()){ 
			return VIEW_PATH + "mainpage.jsp";
		}
		else {
			return VIEW_PATH + "resultpage.jsp";
		}
	}

	//Valid 어노테이션을 통한 객체의 데이터 유효성 검사
	@RequestMapping({"join2.do"})
    public String userJoin2(@Valid @ModelAttribute UserDTO vo, BindingResult result){ 
        if(result.hasErrors()){
        	return VIEW_PATH + "mainpage.jsp";
        }
        // 유효성 검사를 성공적으로 끝마쳤을 때 원하는 행동 구현 
        return VIEW_PATH + "resultpage.jsp";
    }	
}
