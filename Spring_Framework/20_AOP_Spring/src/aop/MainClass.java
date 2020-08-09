package aop;

import java.lang.reflect.InvocationHandler;

import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/*
Spring에서의 AOP
Before Advice : 주요 업무의 앞쪽 Slice를 구현
After returning Advice : 주요 업무의 뒤쪽 Slice를 구현
After throwing Advice : 주요 업무의 뒤쪽 Slice의 예외처리를 구현
Around Advice : 앞,뒤쪽에 필요한 곁다리 업무를 구현
 */ 

public class MainClass {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("conf/setting.xml");
		
		Service proxy = (Service)context.getBean("serviceAdviceBean");

		int min = proxy.get_min_number(10000);
		int prime = proxy.get_prime_number(10000);
		int min2 = proxy.get_min_number(11000);
		System.out.println(min + "/" + prime);
		
	}
}
