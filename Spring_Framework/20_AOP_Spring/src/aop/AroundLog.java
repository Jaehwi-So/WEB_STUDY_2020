package aop;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;

//aopalliance 패키지의 클래스 implements
public class AroundLog implements MethodInterceptor{

	@Override
	public Object invoke(MethodInvocation invocation) throws Throwable {
		long start = System.currentTimeMillis();
		System.out.println("서비스의 처리 속도를 계산합니다.");
		//====Cross-cutting concern=== : 곁다리 로직. 필요에 따라 꽂아넣을 수 있는 로직
		
		//===Primary(Core) concern=== : 핵심 로직
		Object result = invocation.proceed();
		//원래 업무 객체, 호출하는 메서드의 파라미터를 받음. object형으로 반환받는다.
		//===Primary(Core) concern=== : 핵심 로직
		
		//===Cross-cutting concern=== : 곁다리 로직. 필요에 따라 꽂아넣을 수 있는 로직
		long end = System.currentTimeMillis();
		System.out.println("업무처리 시간 : " + (end - start) + "ms");
		return result;
	}

}
