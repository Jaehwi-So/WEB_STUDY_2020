package aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

//객체 자동 생성을 위한 @Component명시
//@Aspect : 애스팩트(어떤 포인트컷 메서드에 대해 어떤 어드바이스 메서드를 실행할 지 결정하는 기준)임을 어노테이션을 통해 명시
@Component
@Aspect
public class ServiceLogging {
	
	//@Pointcut을 통해 포인트컷으로 사용할 표현식을 명시하고 이를 호출하는 이름의 함수 설정
    @Pointcut("execution(* aop.*Impl.get*(..))")
    public void servicePointcut() {}

    @Pointcut("execution(* aop.*Impl.get_min*(..))")
    public void serviceGetMinPointcut() {}

    //어노테이션을 이용하여 Advice와 PointCut을 연결한다.
    @Before("servicePointcut()")
    public void printLogging() {
        System.out.println("Before :: 로그 기록");
    }
    
    @Around("servicePointcut()")
	public Object aroundLogging(ProceedingJoinPoint joinPoint)throws Throwable {
		long start = System.currentTimeMillis();
		System.out.println("Around ::서비스의 처리 속도를 계산합니다.");	
		try {
			Object result = joinPoint.proceed();
			return result;
		} catch(Exception e){ 
			String str = joinPoint.getSignature().toShortString();
			System.out.println("에외 발생 : " + str);
			return null;
		} finally {
			long end = System.currentTimeMillis();
			System.out.println("Around :: 업무처리 시간 : " + (end - start) + "ms");
		}

	}
    
    //AfterThrowing의 경우 예외발생 시 처리변수도 명시한다.
    @AfterThrowing(pointcut = "serviceGetMinPointcut()", throwing = "e")
    public void exceptionLogging(JoinPoint jp, Exception e) {
        String method = jp.getSignature().getName();
        System.out.println(method + "() 에서 예외 발생!");
    }
}