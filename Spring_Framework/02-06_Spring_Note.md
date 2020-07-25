# Spring Bean
- [1. 스프링 컨테이너와 스프링 빈](#1-스프링-컨테이너와-스프링-빈)
  + [1-1. 스프링 컨테이너](#1-1-스프링-컨테이너)
  + [1-2. 스프링 빈](#1-2-스프링-빈)
- [2. 빈의 SI(Setter Injection)과 CI(Constructor Injection)](#2-빈의-sisetter-injection과-ciconstructor-injection)
- [3. 빈의 의존성 주입(DI : Dependency Injection)](#3-빈의-의존성-주입(DI--Dependency-Injection))
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
contructor-arg : 생성자 순서대로 값을 넣어야 한다. index를 통해 순서를 변경할 수 있다.   
생성자를 통해 파라미터를 전달한다. 이를 CI(Constructor Injection)이라고 한다.   
```
<bean id = "p2" class = "vo.PersonVO">
  <constructor-arg value ="jung"></constructor-arg>
  <constructor-arg value ="23"></constructor-arg>
  <constructor-arg value ="010-4557-5651"></constructor-arg>
</bean>
```

### 3. 빈의 의존성 주입(DI : Dependency Injection)



























