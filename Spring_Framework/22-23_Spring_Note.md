# AspectJ와 Anntation을 이용한 AOP
- [1. AspectJ를 이용한 xml 설정](#1-관점-지향-프로그래밍)
  + [1-1. AspectJ 설정](#1-1-aspectj-설정)
  + [1-2. 포인트컷과 Advice의 연결](#1-2-포인트컷과-advice의-연결)
  + [1-3. 포인트컷 표현식](#1-3-포인트컷-표현식)
  + [1-4. JoinPoint와 바인드 변수](#1-4-joinpoint와-바인드-변수)
- [2. Annotation을 이용한 AOP](#2-annotation을-이용한-aop)
  + [2-1. xml 설정](#2-1-xml-설정)
  + [2-2. Annotation을 이용한 Aspect와 포인트컷 생성](#2-2-annotation을-이용한-Aspect와-포인트컷-생성)
	* [2-2-1. @Aspect](#2-2-1-aspect)
	* [2-2-2. @Pointcut](#2-2-2-pointcut)
  + [2-3. 포인트 컷과 Advice의 연결](#2-3-포인트-컷과-advice의-연결)

----------------------
## 1. AspectJ를 이용한 xml 설정
AspectJ를 이용하면 간편하게 Advice(Advisor)과 포인트컷을 생성하여 Aspect에 연결할 수 있다.

### 1-1. AspectJ 설정

우선 pom.xml에서 AspectJ와 관련된 dependency를 추가해 주어야 한다,
```
  <properties>
	<aspectj.version>1.8.13</aspectj.version>
  </properties>
  <dependencies>
	...
	<!-- AspectJ사용을 위한 dependency -->
	<dependency>
		<groupId>org.aspectj</groupId>
		<artifactId>aspectjrt</artifactId>
		<version>${aspectj.version}</version>
	</dependency>
	<dependency>
		<groupId>aopalliance</groupId>
		<artifactId>aopalliance</artifactId>
		<version>1.0</version>
	</dependency>
	<dependency>
		<groupId>org.aspectj</groupId>
		<artifactId>aspectjweaver</artifactId>
		<version>${aspectj.version}</version>
	</dependency>
	...
  </dependencies>
```
그리고 설정파일 xml에서 aspectj를 사용하기 위해 다음을 명시해준다.
```
	xmlns:aop="http://www.springframework.org/schema/aop"
	xsi:schemaLocation="...
		http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop-3.2.xsd"
```

이를 통해 xml파일에서의 AspectJ를 이용한 AOP 설정 준비가 완료되었다.

### 1-2. 포인트컷과 Advice의 연결

다음은 xml파일에서 Aspect를 정의하는 부분이다.
```
	<bean id="aroundLog" class="aop.AroundLog"></bean> 
	
	<aop:config>
		<aop:pointcut expression="execution(* aop.*Impl.get*(..))" id="services" />
		<aop:aspect id="AdvAroundLog" ref="aroundLog">
			<aop:around method="aroundLogging" pointcut-ref="services"/>
		</aop:aspect>
	</aop:config>
```

1. 우선 Advice에 해당하는 클래스 빈을 생성한다.
2. &lt;aop:config>에서 AOP 설정을 한다.
3. pointcut은 포인트컷 표현식을 통해 포인트컷으로 사용할 패키지, 클래스, 메서드를 명시한다.
4. &lt;aop:aspect>에서 id는 애스팩트의 이름, ref는 사용할 Advice이다.
5. &lt;aop:aspect>내부에서 사용하게 될 , 즉 횡단 관심에 해당하는 어드바이스의 메서드와 ref를 통해 포인트컷과 연결시킨다.
  
이를 통해 Advice와 포인트 컷이 연결되어 포인트컷에 해당하는 메서드가 호출될 때 Advice 또한 실행되게 된다.

### 1-3. 포인트컷 표현식
위에서 포인트컷 표현식(expression)을 사용한다고 했는데 이것의 종류에 대해 알아보자.
1. execution 명시자 (aop.*Impl.get*(..)) : Adivce를 적용할 메서드를 명시할 때 사용한다.   execution(반환형, 패키지경로, 클래스명, 메소드명 매개변수)   
(* : 모든 값 / .. : 0개 이상의 값)
- 리턴타입
	+ *(모든 리턴타입) 
   	+ void(리턴타입이 void인 메서드) 
   	+ !int(리턴타입이 int가 아닌 메서드)
- 패키지 경로  
	+ aop.aop2.aop3(정확히 패키지 선택) 
	+ aop.aop2..(패키지로 시작하는 모든 패키지 선택)
	+ aop.aop1..aop3(aop.aop1로 시작하는 패키지에서 aop3으로 끝나는 패키지 선택)

- 클래스명
	+ ServiceImpl(정확한 클래스 선택) 
	+ *Impl(Impl로 끝나는 클래스 선택) 
	+ Service+(해당 클래스에서 파생된 자식 클래스, 인터페이스 구현된 모든 클래스 선택)

- 메서드명, 매개변수  
	+ *(모든 메서드 선택) 
	+ get*(..)(get으로 시작하는 메서드 선택)
 	

2. within 명시자 : 특정 타입에 속하는 메서드를 Pointcut으로 설정할 때 사용
- within(aop.service.*) : aop.service 패키지에 있는 모든 메서드
- within(aop.service..*) : aop.service 패키지 및 하위 패키지에 있는 모든 메서드

### 1-4. JoinPoint와 바인드 변수

다음과 같이 횡단 관심으로 사용되는 메서드에 joinPoint가 사용된다. 이는 정확한 예외 처리 로직을 위해 사용한다. JoinPoint는 이를 위한 인터페이스이며 JoinPoint의 메서드를 사용하면
예외가 발생한 비즈니스 메소드 이름이 무엇인지 그 메소드가 속한 클래스와 패키지 정보는 무엇인지 알아낼 수 있다.
```
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

```
다음은 JoinPoint의 시그니처 정보 관련한 메서드이다.
+ Signature getSignature() : 클라이언트가 호출한 메소드의 시그니처(반환형, 이름, 매개변수) 정보 반환
	- String getName() : 메서드명 반환
	- String toLongString() : 메서드 리턴 타임, 이름, 매개변수, 패키지 경로를 포함해서 반환
	- String toShorString() : 시그니처를 축약 문자열로 반환
	- Object getTarget() : 비지니스 메서드를 포함하는 비즈니스 객체 반환
	- Object[] getArgs() :  메서드를 호출할 때 넘겨준 인자 목록 반환

----------------------

## 2. Annotation을 이용한 AOP
AOP 또한 xml파일에서 설정하는 방법도 있지만 Annotation을 통해서 자바 클래스 내부에서 설정하는 방법이 있다.

### 2-1. xml 설정
다음은 Aspect에 해당하는 객체의 프록시화를 위해서 명시해 주어야 한다. 이것이 있어야 클래스들을 탐색하며 @Aspect 어노테이션을 발견하여 알아서 설정하는 것이 가능해진다.
```
	<aop:aspectj-autoproxy/>
```

### 2-2. Annotation을 이용한 Aspect와 포인트컷 생성

#### 2-2-1. @Aspect
@Aspect 어노테이션을 통해 해당 클래스가 AOP에 사용될 애스팩트라는 것을 명시한다.
```
@Aspect
public class ServiceLogging {...
}
```
#### 2-2-2. @Pointcut
@Pointcut을 통해 포인트컷으로 사용할 표현식을 명시하고 이를 호출하는 이름의 함수 설정
```
    @Pointcut("execution(* aop.*Impl.get*(..))")
    public void servicePointcut() {}
```

### 2-3. 포인트 컷과 Advice의 연결

@Before, @Around, @AfterReturning, @AfterThrowing등 어드바이스의 종류를 명시하는 어노테이션을 설정한 후 포인트컷과 연결시킨다. 
```
    @Before("servicePointcut()")
    public void printLogging() {
        System.out.println("Before :: 로그 기록");
    }
```

AfterThrowing의 경우 예외처리 변수를 명시해주자.
```
    @AfterThrowing(pointcut = "serviceGetMinPointcut()", throwing = "e")
    public void exceptionLogging(JoinPoint jp, Exception e) {
        String method = jp.getSignature().getName();
        System.out.println(method + "() 에서 예외 발생!");
    }
```

다음은 @Aspect에 해당하는 전체 클래스이다.
```
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
```



