package controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import config.InnerBeanTest;
import config.PropertyRead;

@Controller
public class ExamController {
	InnerBeanTest inner;
	PropertyRead pr;
	public void setInner(InnerBeanTest inner) {
		this.inner = inner;
	}
	public void setPr(PropertyRead pr) {
		this.pr = pr;
	}
	
	@RequestMapping("/")
	public String test(Locale locale, Model model) {
		model.addAttribute("inner", inner.getInner().getInner_str());
		model.addAttribute("str", pr.getRes());
		return "home";
	}
}
