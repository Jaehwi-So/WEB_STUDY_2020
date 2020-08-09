package aop;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

public class MainClass {
	public static void main(String[] args) {
		Service service = new ServiceImpl();
		//AOP : 관점 지향 프로그래밍. 주요 업무에서 관점이 다른 기능들을 추가할 때 코드를 분리해서 사용하는 기법.
		//예를 들어 사용자의 관점에서 서비스를 제공받는 로직 뿐 만 아니라 프로그래머 입장에서의 성능 측정 등을 위하여 코드를 추가할 수 있다.
		//이 경우 관점 지향 프로그래밍을 사용하여 필요시 코드를 로직에 직접 추가하는 것이 아니라 proxy를 이용하여 유동적으로 활용할 수 있도록 한다.
		//주로 로그 처리, 보안, 인증, 트랜잭션 처리 등에 사용한다.
		
		//원래 객체에 곁다리 업무 추가를 위한 위임 객체 proxy
		Service proxy = (Service)Proxy.newProxyInstance(
				ServiceImpl.class.getClassLoader(), //실제 클래스의 정보 전달
				new Class[] {Service.class}, //인터페이스 정보 전달(복수의 인터페이스 구현 시 배열에 저장)
				new InvocationHandler() {	//invocationHandler의 객체화
					
					@Override
					public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
						long start = System.currentTimeMillis();
						System.out.println("서비스의 처리 속도를 계산합니다.");
						//====Cross-cutting concern=== : 곁다리 로직. 필요에 따라 꽂아넣을 수 있는 로직
						
						//===Primary(Core) concern=== : 핵심 로직
						Object result = method.invoke(service, args);	
						//원래 업무 객체, 호출하는 메서드의 파라미터를 받음. object형으로 반환받는다.
						//===Primary(Core) concern=== : 핵심 로직
						
						//===Cross-cutting concern=== : 곁다리 로직. 필요에 따라 꽂아넣을 수 있는 로직
						long end = System.currentTimeMillis();
						System.out.println("업무처리 시간 : " + (end - start) + "ms");
						return result;
					}
				}
			);
		int min = proxy.get_min_number(10000);
		int prime = proxy.get_prime_number(10000);
		System.out.println(min + "/" + prime);
		
		

	}
}
