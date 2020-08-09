package advice;

import java.lang.reflect.Method;

import org.springframework.aop.AfterReturningAdvice;

public class AfterReturningLog implements AfterReturningAdvice {

	@Override
	public void afterReturning(Object returnValue, Method method, Object[] args, Object target) throws Throwable {
		System.out.println("AfterReturning :: 결과값 : " + returnValue);
	}
}
