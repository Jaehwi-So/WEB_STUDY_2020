package aop;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/*
포인트컷(Pointcuts) : 조인 포인트를 잘라낸다. 즉 특정 메서드에서만 프록시가 Advice를 적용한다.
조인포인트(JoinPoint) : 프록시가 조인하게 될 메서드의 대상
위빙(Weaving) : 프록시와 주 업무를 연결해주는 일련의 과정
 */ 

public class MainClass {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("conf/setting.xml");
		Service proxy = (Service)context.getBean("serviceBean");

		int min = proxy.get_min_number(1000);
		System.out.println("=====================");
		int min2 = proxy.get_min_number(10001);
		
	}
}
