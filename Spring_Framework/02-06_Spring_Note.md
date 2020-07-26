# Spring Bean
- [1. 스프링 컨테이너와 스프링 빈](#1-스프링-컨테이너와-스프링-빈)
  + [1-1. 스프링 컨테이너](#1-1-스프링-컨테이너)
  + [1-2. 스프링 빈](#1-2-스프링-빈)
- [2. 빈의 SI(Setter Injection)과 CI(Constructor Injection)](#2-빈의-sisetter-injection과-ciconstructor-injection)
- [3. 빈의 의존성 주입(DI : Dependency Injection)](#3-빈의-의존성-주입DI--Dependency-Injection)
- [4. 의존 관계 인터페이스 사용](#4-의존-관계-인터페이스-사용)
- [5. 팩토리 메서드를 이용한 빈의 생성](#5-팩토리-메서드를-이용한-빈의-생성)
- [6. 빈 스코프(Bean Scope)](#6-빈-스코프Bean-Scope) 
----------------------
### 1. 스프링 컨테이너와 스프링 빈

#### 1-1. 스프링 컨테이너
스프링 컨테이너에서는 DI(Dependency Injection : 의존성 주입)과 IoC(Inversion of Control : 제어 역전) 컨테이너 구현, 객체 설정 등을 할 수 있다.
본 spring-mvc-project에서는 설정 메타 데이터에 해당하는 root-context와 servlet-context에서 본 기능들을 명시한다.

#### 1-2. 스프링 빈
스프링 컨테이너가 애플리케이션 객체를 생성하고 관리한다. 즉 스프링 컨테이너를 통해 서비스를 가독성있고   
명확하게 객체에 적용이 가능하며 컨테이너를 통해 생성된 자바 객체를 POJO(plain old java object)라고 칭한다.   
Spring에서 컨테이너를 통해 생성하는 POJO(plain old java object)를 Beans라고 칭한다.  
설정 메타 데이터(xml)에 명시된 데이터에 따라 IoC 컨테이너는 Beans를 생성하고 인스턴스화하며 의존성을 주입할 수 있다.  
Spring Bean은 xml 파일, 즉 root-context.xml, servlet-context.xml등에서 정의된다.  

- Bean의 속성
  + class: 자바 클래스 이름
  + id: 빈을 식별하는 용도의 ID
  + scope: sigleton, prototype 인스턴스의 수명을 결정하는 범위
  + constructor-arg: 인스턴스 생성 시 생성자에 전달할 인수
  + property: 인스턴스 생성 시 Setter에 전달할 인수
  + init method와 destroy method

----------------------
### 2. 빈의 SI(Setter Injection)과 CI(Constructor Injection)
스프링 Bean을 통해 인스턴스를 생성할 때 해당 객체의 생성자나 setter를 통하여 인스턴스의 멤버변수를 주입할 수 있다

<b>SI(Setter Injection)</b>  
property : 파라미터를 요구하는 속성에 값을 넣음  
property를 사용하여 setter로 접근하는 형식을 SI(Setter Injection)이라고 한다.
  
```
<bean id = "p1" class = "vo.PersonVO">	
  <property name = "name" value = "park"></property>	<!-- == p1.setName("park"); -->
  <property name = "age" value = "30"></property>
  <property name = "tel" value = "010-9876-5432"></property>
</bean>
```
<b>CI(Constructor Injection)</b>  	
contructor-arg : 생성자 순서대로 값을 넣는다. 인수의 타입이 명확하게 다르다면 순서에 상관 없이 스프링 컨테이너가 알아서 인수를 처리해준다.
둘 이상의 생성자 인수가 같은 타입이라면 index 속성을 사용하여 순서를 지정할 수 있다. name속성을 사용해 생성자 인수를 지정할 수 있지만 디버그 플래그나 파라미터 이름 발견 플래그를 활성화 시켜야 한다   
생성자를 통해 파라미터를 전달한다. 이를 CI(Constructor Injection)이라고 한다.   
```
<bean id = "p2" class = "vo.PersonVO">
  <constructor-arg value ="jung"></constructor-arg>
  <constructor-arg value ="23"></constructor-arg>
  <constructor-arg value ="010-4557-5651"></constructor-arg>
</bean>
```

----------------------
### 3. 빈의 의존성 주입(DI : Dependency Injection)
클래스 1을 클래스 2의 내부에 멤버변수로 사용하게 된다면 클래스2는 클래스1에 대한 의존성이 생긴다.  
컨테이너에서 빈(클래스 1)을 생성하여 클래스 2에 넣어주는 것을 의존성 주입이라고 한다.  

```
<bean id = "class1" class = "java.lang.String">
  <constructor-arg value = "this is value"></constructor-arg>
</bean>

<bean id = "class2" class = "vo.class2">
  <property name="di_instance" ref="class1"></property>
</bean>
```
### 4. 의존 관계 인터페이스 사용
<b>인터페이스를 사용하는 프로그래밍 설계 원칙</b>  
의존 중인 클래스 사이에 인터페이스를 추가하여 느슨한 결합 관계를 형성하는 프로그래밍 방식이다. 이는 데이터베이스와 상호 작용하는 전략을 쉽게 바꿀 수 있다.

BoardController <- BoardService(인터페이스) <-BoardServiceImpl <- BoardDAO(인터페이스) <- BoardDaoImpl, BoardDaoImpl2
BoardService에 공급할 BoardDAO를 상황에 맞게 변화시켜 유연한 프로그래밍이 가능하며 유지보수가 용이하다.

-----------
### 5. 팩토리 메서드를 이용한 빈의 생성
PersonDao 인터페이스와 이를 상속받는 PersonDaoType1, PersonDaoType2가 있으며  
PersonDao를 의존하는 PersonService가 있다고 가정하자. PersonService에 PersonDao를 공급하는 PersonDaoFactory 클래스를 정의하여
팩토리 메서드 Dao 인스턴스를 생성하고 PersonService에 공급하는 방식으로 인스턴스를 생성할 수 있다.

아래의 PersonDaoFactory는 인스턴스 팩토리 메서드를 통하여 Dao를 초기화시킨다. Bean에서 주입된 파라미터에 따라서 다른 유형의 Dao를 생성해낸다.
```
public class PersonDaoInstanceFactory {
	
	public PersonDaoInstanceFactory() {
		System.out.println("factory 생성");
	}	//클래스가 인스턴스 팩토리 메서드를 정의한다면 public 생성자가 필요하다.
	//이를 통해 스프링 컨테이너가 해당 클래스의 인스턴스를 생성 가능하다.
	
	public PersonDao getPersonDao(String daoType) { 
		PersonDao dao = null;
		//빈에서 주입한 파라미터에 따라 Factory에서 dao의 유형을 다르게 생성한다.
		if("type1".equals(daoType)) {
			dao = new PersonDaoType1();
		}
		else if("type2".equals(daoType)) {
			dao = new PersonDaoType2();
		}
		return dao;
	} 
}
```

아래는 팩토리를 통해 생성되는 PersonDao의 종류 중 하나이다. 멤버변수로 member_val을 가지는 것을 확인하자.
```
public class PersonDaoType2 implements PersonDao {
	public String member_val; 
	public void setMember_val(String member_val) {
		this.member_val = member_val;
	}
	@Override
	public List<String> selectList() {
		List<String> list = new ArrayList<String>();
		list.add("selectList() type2");
		return list;
	}
}
```

root-context.xml에서 빈의 설정을 하였다. 인스턴스 팩토리 메서드를 호출하여 dao 인스턴스를 생성하고 property를 통해 생성된 dao의 멤버변수도 주입시켜주었다.  
이렇게 생성된 dao를 service에 주입하였다.
```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.springframework.org/schema/beans https://www.springframework.org/schema/beans/spring-beans.xsd">
	
	<!-- Root Context: defines shared resources visible to all other web components -->
	<!-- 인스턴스 팩토리 메서드를 호출하여 빈 생성하기 -->
	<bean id="daoFactory" class="dao.PersonDaoInstanceFactory"></bean>
	
	<!-- daoFactory의 getPersonDao를 호출하여 dao 인스턴스를 생성. -->
	<bean id="dao" factory-bean="daoFactory" factory-method="getPersonDao"> 
		<constructor-arg index="0" value="type2"></constructor-arg> <!-- 메서드의 0번째 파라미터 넘겨주기 -->
		<property name="member_val" value="membervalue"></property>   <!-- 메서드로 반환된 인스턴스의 멤버변수 프로퍼티에 SI로 멤버변수 주입 -->
	</bean>
	<bean id="service" class="service.PersonService">
		<property name="personDAO" ref="dao"></property>
	</bean> 	
</beans>
```

정적 팩토리 메서드를 사용할 수도 있는데 생성자와는 달리 호출할 때마다 새로운 객체를 생성할 필요가 없다는 장점이 있다.
```
public class PersonDaoFactory {
	
	private PersonDaoFactory() {}	
	
	public static PersonDao getPersonDao(String daoType) { 
		PersonDao dao = null;
		//빈에서 주입한 파라미터에 따라 Factory에서 dao의 유형을 다르게 생성한다.
		if("type1".equals(daoType)) {
			dao = new PersonDaoType1();
		}
		else if("type2".equals(daoType)) {
			dao = new PersonDaoType2();
		}
		return dao;
	}
}
```
----------------
### 6. 빈 스코프(Bean Scope)
빈을 공유하기 위한 인스턴스를 단 한번만 생성(Single-ton), 혹은 요청될 때 마다 새로운 인스턴스를 생성(Prototype) 등  
빈 인스턴스의 수명을 결정하기 위해 스코프 속성을 사용한다. 기본적으로 싱글톤으로 생성된다.

다음은 빈을 얻어내는 코드이다. 만약 생성된 bean의 스코프 속성이 싱글톤이었다면 p3_1과 p3_2는 같은 인스턴스이며 프로토타입이라면 다른 인스턴스일 것이다.
```
PersonVO p3_1 = (PersonVO)wc.getBean("p3"); 
PersonVO p3_2 = wc.getBean("p3", PersonVO.class);
```






















