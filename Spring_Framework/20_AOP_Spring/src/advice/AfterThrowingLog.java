package advice;

import org.springframework.aop.ThrowsAdvice;

public class AfterThrowingLog implements ThrowsAdvice {
	public void afterThrowing(IllegalArgumentException e) throws Throwable{
		System.out.println("AfterThrowing ::예외 발생!!" + e.getMessage());
	}
}
