# 관점 지향 프로그래밍(AOP)
- [1. 관점 지향 프로그래밍](#1-관점-지향-프로그래밍)
  + [1-1. AOP란?](#1-1-aop란)
  + [1-2. 자바 코드에서의 AOP](#1-2-자바-코드에서의-aop)
- [2. 스프링으로 AOP 구현하기](#2-스프링으로-aop-구현하기)
  + [2-1. 스프링 AOP의 용어](#2-1-스프링-aop의-용어)
  + [2-2. Advice의 종류와 프록시 빈 생성](#2-2-advice의-종류와-프록시-빈-생성)
  + [2-3. 포인트 컷과 Advisor](#2-3-포인트-컷과-advisor)
  + [2-4. 정리](#2-4-정리)
  
----------------------
### 1. 관점 지향 프로그래밍

#### 1-1. AOP란?
Aspect Oriented Programming. 관점 지향 프로그래밍.   
주요 업무에서 관점이 다른 기능들을 사용할 때 코드를 분리해서 모듈화하여 사용하는 기법. 비핵심이지만 꼭 필요하고, 공통화할 수 있는 부분을 따로 빼서(횡단 분리) 관리하는 것이다.

예를 들어 사용자의 관점에서 서비스를 제공받는 로직 뿐 만 아니라 프로그래머 입장에서의 성능 측정 등을 위하여 시간측정을 하는 코드를 추가할 수 있다. 이는 프로그래머 입장에서 필요한 로직이며 공통화될 수 있는 로직이다. 
이 경우 코드를 로직에 직접 추가하는 것이 아니라 모듈화하여 proxy를 통해 관점에 따라 유동적으로 활용할 수 있도록 한다.  
주로 로그 처리, 보안, 인증, 트랜잭션 처리 등에 사용한다.

용어 정리
- Concern : 서로 다른 클래스에서 비슷한 기능을 하는 부분(메서드, 코드..)
- Primary(Core) Concern : 주요 업무. 비즈니스 로직을 처리하기 위한 부분
- Cross-cutting Concern : 주요 업무를 위아래로 감싸고 있는 곁다리 업무. 이 부분을 관점(필요여부)에 따라 모듈화하여 주요 업무에 추가하여 사용한다.

### 1-2. 자바 코드에서의 AOP
스프링으로 AOP를 구현하기에 앞서 자바 코드를 통해 AOP의 개념을 확인하고자 한다.

다음은 숫자를 파라미터로 받아 소수의 개수를 반환해주는 함수이다.
```
	public int get_prime_number(int number) {
		long start = System.currentTimeMillis();
		System.out.println("서비스의 처리 속도를 계산합니다.");
		//==========Cross-cutting concern==========
		
		//Primary(Core) concern
		int cnt = 0;
		for(int i = 1; i <= number; i++) {
			if(is_prime(i)) {
				cnt++;
			}
		}
		System.out.println("1~" + number + "까지 수 중 소수의 개수 : " + cnt);
		//Primary(Core) concern
		
		//==========Cross-cutting concern==========
		long end = System.currentTimeMillis();
		System.out.println("업무처리 시간 : " + (end - start) + "ms");
		return cnt;
	}
```

위의 코드에서 개발자가 해당 코드의 성능을 테스트하기 위해서 처리 속도를 계산하기 위해 Cross-cutting concern으로 시간을 체크하여 로그로 찍어내는 코드를 추가했다고 치자. 이를 필요시마다 코드에 추가하여 사용하는 방법도 있겠지만 모듈화하여 관점에 따라서만 해당 곁다리 업무를 수행하도록 할 수 있다.

다음은 자바 코드로 AOP를 구현한 것이다. service 인스턴스를 Proxy를 통해 복사하여 사용하는 개념이다.   
해당 코드에서는 클래스, 인터페이스, 핸들러등의 파라미터를 전달받아 프록시 위임객체가 생성되고 핸들러의 invoke()메서드를 통해 원래 주요업무(Core-concern)에 곁다리 업무를 추가하였다.   
이를 통해 service의 위임 객체 proxy에는 메서드에 곁다리 업무가 추가된 상태이다. 관점에 따라 service의 메서드를 사용하거나 proxy의 메서드를 사용하는 것이 가능하다.

```
Service service = new ServiceImpl();

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
```

--------------------------------
### 2. 스프링으로 AOP 구현하기

### 2-1. 스프링 AOP의 용어
스프링에서는 이러한 AOP를 구현하기 위한 모듈화를 제공한다.   
스프링에서는 proxyFactory를 프록시 객체를 생성할 수 있는데 파라미터로 적용할 Advice의 정보를 받게 된다.   
- 어드바이스(Advice) : 관점에 따라 분리해 놓은 공통 기능의 코드, 독립된 클래스의 메소드로 작성한다.
- 포인트컷(Pointcut) : 특정 메서드에서만 Advice가 동작하도록 한정한 조인 포인트
- 조인포인트(Joinpoint) : 클라이언트가 호출하는 모든 비즈니스 메소드, 포인트컷이 될 후보들 
- 위빙(Weaving) : : 곁다리 업무(cross-cutting-concern)와 주 업무(core-concern)를 연결해주는 일련의 과정. 주 업무 메서드가 호출 시 곁다리 업무가 삽입되는 과정
- 에스팩트(Aspect) : 어떤 포인트컷 메서드에 대해 어떤 어드바이스 메서드를 실행할 지 결정하는 기준

### 2-2. Advice의 종류와 프록시 빈 생성

프록시 빈을 생성하기 위해서는 다음과 같이 Advice에 해당하는 빈을 생성해야 한다.
class에는 주 업무에 삽입할 cross-cutting-concern이 있는 클래스를 선언한다.

```
	<bean id="aroundLog" class="advice.AroundLog"></bean>
	<bean id="beforeLog" class="advice.BeforeLog"></bean>
	<bean id="afterReturningLog" class="advice.AfterReturningLog"></bean>
	<bean id="afterThrowingLog" class="advice.AfterThrowingLog"></bean>
```

Advice는 동작 시점에 따라서 네 종류로 나눌 수 있다.
+ Before Advice : 주요 업무 메서드의 앞쪽 Slice를 구현
+ After returning Advice : 주요 업무 메서드의 뒤쪽 Slice를 구현
+ After throwing Advice : 주요 업무 메서드의 뒤쪽 Slice의 예외처리를 구현
+ Around Advice : 주요 업무 메서드 앞,뒤쪽에 필요한 곁다리 업무를 구현. 모든 시점에서 동작한다.

아래의 클래스들은 Advice에 해당하는 네 종류의 클래스이다.
```
public class BeforeLog implements MethodBeforeAdvice {

	@Override
	public void before(Method method, Object[] args, Object target) throws Throwable {
		System.out.println("Before :: 서비스를 실행합니다.");
	}
}
```
```
public class AroundLog implements MethodInterceptor{

	@Override
	public Object invoke(MethodInvocation invocation) throws Throwable {
		long start = System.currentTimeMillis();
		System.out.println("Around ::서비스의 처리 속도를 계산합니다.");
		//====Cross-cutting concern=== : 곁다리 로직. 필요에 따라 꽂아넣을 수 있는 로직
		
		//===Primary(Core) concern=== : 핵심 로직
		Object result = invocation.proceed();
		//원래 업무 객체, 호출하는 메서드의 파라미터를 받음. object형으로 반환받는다.
		//===Primary(Core) concern=== : 핵심 로직
		
		//===Cross-cutting concern=== : 곁다리 로직. 필요에 따라 꽂아넣을 수 있는 로직
		long end = System.currentTimeMillis();
		System.out.println("Around :: 업무처리 시간 : " + (end - start) + "ms");
		return result;
	}

}
```
```
public class AfterReturningLog implements AfterReturningAdvice {

	@Override
	public void afterReturning(Object returnValue, Method method, Object[] args, Object target) throws Throwable {
		System.out.println("AfterReturning :: 결과값 : " + returnValue);
	}
}
```
```
public class AfterThrowingLog implements ThrowsAdvice {
	public void afterThrowing(IllegalArgumentException e) throws Throwable{
		System.out.println("AfterThrowing ::예외 발생!!" + e.getMessage());
	}
}
```

Advice 빈 생성을 마쳤다면 proxyFactoryBean을 통해 프록시를 만든다. 파라미터로 target(Advice를 적용할 대상 객체)과 interceptorNames(객체에 적용할 Advice)를 받아 프록시 인스턴스를 만든다.
```
	<bean id="serviceAdviceBean" class="org.springframework.aop.framework.ProxyFactoryBean">
		<property name="target" ref="serviceBean"></property>	<!-- target : Advice를 적용할 대상 객체 -->
		<property name="interceptorNames">	<!-- interceptorNames : 객체에 적용할 Advice 목록을 전달 -->
			<list>
				<value>beforeLog</value>	<!-- 참조열 -->			
				<value>aroundLog</value>
				<value>afterReturningLog</value>
				<value>afterThrowingLog</value>
			</list>
		</property>
	</bean>
```

### 2-3. 포인트 컷과 Advisor
지금까지 프록시로 객체를 위임받으면 모든 메서드들이 조인 포인트가 되어 곁다리 업무가 실행되었다. 이제 특정 메서드에서만 Cross-cutting-concern이 실행되게 하기 위해서 포인트 컷을 지정할 수 있다.

우선 포인트 컷을 생성한다. 프로퍼티로 조인 포인트가 될 대상 메서드의 이름을 지정한다.
```
	<bean id="pointCutBean" class="org.springframework.aop.support.NameMatchMethodPointcut">
		<property name="mappedName" value="get_min_number"></property>
	</bean>
```

다음과 같이 여러개의 메서드 또한 지정 가능하다.
```
	<bean id="pointCutBean2" class="org.springframework.aop.support.NameMatchMethodPointcut">
		<property name="mappedNames">
			<list>
				<value>get_min_number</value>
				<value>get_prime_number</value>
			</list>
		</property>
	</bean>
```

그리고 Advisor를 생성한다. Advisor은 포인트 컷과 Advice를 이어주는 역할을 한다. 이를 통해 Advice는 포인트 컷의 조인 포인트에서만 작동한다. Advisor은 proxyFactoryBean에서 interceptorName(s)에 참조 가능하다.

```
	<bean id="pointCutAroundAdvisor" class="org.springframework.aop.support.DefaultPointcutAdvisor">
		<property name="advice" ref="aroundLog"></property>
		<property name="pointcut" ref="pointCutBean"></property>
	</bean>
```

포인트 컷을 Advisor 내부에서 함께 생성하는 것이 가능하다.

```
	<bean id="pointCutAfterAdvisor" class="org.springframework.aop.support.NameMatchMethodPointcutAdvisor">
		<property name="advice" ref="afterReturningLog"></property>
		<property name="mappedName" value="get_prime_number"></property>
		<!-- 다음과 같이 여러개의 포인트 컷도 설정 가능하다.
		<property name="mappedNames">
			<list>
				<value>get_prime_number</value>
				<value>get_min_number</value>
			</list>
		</property>
		-->
	</bean>
```

포인트 컷의 대상이 될 함수를 일일이 지정하기에 가독성과 직관성이 떨어질 수 있다. 따라서 정규식을 활용하여 포인트컷을 지정할 수 있다.

```
	<!-- 정규표현식의 포인트컷을 생성하는 Advisor -->
	<bean id="pointCutBeforeExpAdvisor" class="org.springframework.aop.support.RegexpMethodPointcutAdvisor">
		<property name="advice" ref="beforeLog"></property>
		<property name="patterns">
			<list>
				<value>.*get.*</value>
			</list>
		</property>
	</bean>
```

### 2-4. 정리
이렇게 Spring에서 관점에 따라서 필요한 로직들을 자바코드를 수정하는 것이 아닌 Primary(Core) Concern에 Cross-cutting Concern을 삽입하여 빈을 생성하고 모듈화할 수 있다. 이를 통해 코드를 바꾸지 않고 설정파일의 빈의 id만을 바꾸어 필요한 로직을 추가하는 것이 가능하다.
또한 포인트 컷을 지정하는 것으로 특정 메서드에서만 동작이 이루어지도록 하는 것도 가능했다.