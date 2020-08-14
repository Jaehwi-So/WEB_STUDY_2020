package aop;

import java.security.Signature;

import org.aspectj.lang.ProceedingJoinPoint;

public class AroundLog {

	public Object aroundLogging(ProceedingJoinPoint joinPoint)throws Throwable {
		long start = System.currentTimeMillis();
		System.out.println("Around ::서비스의 처리 속도를 계산합니다.");
		//====Cross-cutting concern=== : 곁다리 로직. 필요에 따라 꽂아넣을 수 있는 로직
		
		try {
			//===Primary(Core) concern=== : 핵심 로직
			Object result = joinPoint.proceed();
			return result;
			//원래 업무 객체, 호출하는 메서드의 파라미터를 받음. object형으로 반환받는다.
			//===Primary(Core) concern=== : 핵심 로직
		} catch(Exception e){ 
			String str = joinPoint.getSignature().toShortString();
			System.out.println("에외 발생 : " + str);
			return null;
		} finally {
			//===Cross-cutting concern=== : 곁다리 로직. 필요에 따라 꽂아넣을 수 있는 로직
			long end = System.currentTimeMillis();
			System.out.println("Around :: 업무처리 시간 : " + (end - start) + "ms");
		}

	}
	
	/*
	 JoinPoint와 바인드 변수
	정확한 예외 처리 로직을 위해 사용한다. JoinPoint는 이를 위한 인터페이스
	예외가 발생한 비즈니스 메소드 이름이 무엇인지 그 메소드가 속한 클래스와 패키지 정보는 무엇인지 알아야 한다.
	Signature getSignature() : 클라이언트가 호출한 메소드의 시그니처(반환형, 이름, 매개변수) 정보 반환
	-String getName() : 메서드명 반환
	-String toLongString() : 메서드 리턴 타임, 이름, 매개변수, 패키지 경로를 포함해서 리턴
	-String toShorString() : 메서드 시그니처를 축약 문자열로 리턴 
	-Object getTarget() : 비지니스 메소드를 포함하는 비즈니스 객체 리턴
	-Object[] getArgs() :  메소드를 호출할 때 넘겨준 인자 목록 리턴
	 */
	
}
