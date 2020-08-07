package main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import service.InfoService;
import service.StudentService;
import service.StudentService;

public class MainTest {
	public static void main(String[] args) {
	
		//ApplicationContext는 인터페이스이며 이를 구현하는 클래스들을 생성해야 한다.
		//Classpath(src)가 root가 되는 ApplicationContext.
		ApplicationContext context = new ClassPathXmlApplicationContext("main/setting.xml");
		InfoService service = (InfoService)context.getBean("infoServiceBean");
		System.out.println(service.getInfo());
		InfoService service2 = (InfoService)context.getBean("infoServiceBean2");
		System.out.println(service2.getInfo());
		
	}
}
