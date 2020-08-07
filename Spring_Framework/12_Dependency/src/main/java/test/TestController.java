package test;

import java.util.Locale;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

@Controller
public class TestController {
	@Autowired 
	ServletContext context;
	
	@RequestMapping("/")
	public String show(Locale locale, Model model) {
		WebApplicationContext wc = WebApplicationContextUtils.getWebApplicationContext(context);
		SingletonImpl single = (SingletonClass) wc.getBean("singleBean");
		System.out.println(single.get_info());
		SingletonImpl single2 = (SingletonClass) wc.getBean("singleBean");
		System.out.println(single2.get_info());
		return "home";
	}
}
