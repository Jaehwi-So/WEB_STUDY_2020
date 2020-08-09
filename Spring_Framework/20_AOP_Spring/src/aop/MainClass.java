package aop;

import java.lang.reflect.InvocationHandler;

import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/*
Spring에서의 AOP
 앞에만 필요한 곁다리 업무 Before
 뒤에만 필요한 곁다리 업무 After returning
 뒤쪽만 처리하는 곁다리 업무 After throwing
 앞,뒤쪽에 필요한 곁다리 업무 Around
 */ 

public class MainClass {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("conf/setting.xml");
		
		Service proxy = (Service)context.getBean("serviceProxyBean");

		int min = proxy.get_min_number(10000);
		int prime = proxy.get_prime_number(10000);
		System.out.println(min + "/" + prime);
		
	}
}
