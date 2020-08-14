package aop;

import org.aspectj.lang.ProceedingJoinPoint;

public class BeforeLog {

	public Object beforeLogging(ProceedingJoinPoint joinPoint)throws Throwable {
		System.out.println("Before :: 로깅");
		Object result = joinPoint.proceed();
		return result;
			
	}
	
}
