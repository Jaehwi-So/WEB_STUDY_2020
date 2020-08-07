# Annotation과 Maven 프로젝트 설정
- [1. Maven 프로젝트](#1-Maven-프로젝트)
  + [1-1. Maven이란?](#1-1-maven이란)
  + [1-2. Maven 프로젝트의 구성요소](#1-2-maven-프로젝트의-구성요소)
  + [1-3. Maven 프로젝트 설정](#1-3-maven-프로젝트-설정)
- [2. Annotation](#2-annotation)
- [3. @Autowired](#3-autowired)
  + [3-1. @Autowired의 의미](#3-1-autowired의-의미)
  + [3-2. @Qualifier와 @Autowired의 위치](#3-2-qualifier와-autowired의-위치)
  + [3-3. Required 속성](#3-3-required-속성)


----------------------
### 1. Maven 프로젝트

#### 1-1. Maven이란?
전체적인 자바 프로젝트의 라이프 사이클을 관리해준다.
Maven은 필요한 라이브러리를 특정 문서(pom.xml)에 정의해 놓으면 네트워크 상의 중앙 저장소에서 필요한 라이브러리를 모두 가져올 수 있다.
Maven은 이 라이브러리를 공유하는 중앙 파일 서버라고도 볼 수 있다.

라이프사이클(LifeCycle) : 미리 정해진 순서로 빌드하는 것을 의미한다. Maven 또한 프레임워크이므로 미리 정해진 순서로 빌드한다. 빌드란 프로젝트의 파일들을 JVM이나 톰캣같은 WAS가 인식할 수 있는 구조로 패키징 하는 과정이다. 
- compile : src/main/java 경로의 소스 코드가 컴파일 된다.
- test : src/test/java, src/test/resources 테스트 자원 복사 및 테스트 소스 코드 컴파일 된다. 
- packaging : 컴파일과 테스트가 완료 된 후, jar, war 같은 형태로 압축하는 작업.

#### 1-2. Maven 프로젝트의 구성요소
1) settings.xml
메이븐을 빌드할 때 의존 관계에 있는 라이브러리. 로컬 저장소의 경로를 바꿀 수도 있다.

2) 프로젝트 객체 모델(Project Object Model)
pom.xml파일을 말하며 프로젝트의 최상위 디렉토리에 존재하는 설정 파일이다.
Maven의 기능을 이용하기 위해서 POM이 사용된다. 
프로젝트을 설정, 의존성 등을 기술한 xml 파일이다.

출처: https://goddaehee.tistory.com/199

#### 1-3. Maven 프로젝트 설정
일단 현재 필자의 Maven 사용 목적은 Maven에 대한 심도있는 이해가 아닌 스프링 프레임워크의 기술들을 익히기 적합한 프로젝트를 만들기 위해 사용하는 것이다.

1. java class에서 configure를 통해 쉽게 maven project로 바꿀 수 있다.
2. maven 프로젝트에서도 명명 규칙을 따른다.
3. window->showview->other->global repository에서 central을 rebuild하여 
pom.xml에서 Spring에서 필요한 dependency를 add할 수 있다.
4. Spring bean을 생성하고, Namespace에서 필요한 태그를 사용할 수 있다.

------------------
### 2. Annotation

Annotation이란 메타 데이터의 목적을 띈다.   
메타 데이터란 데이터에 대한 설정을 의미하는 데이터를 말한다.   
이를 통해 데이터의 유효성 검사 등을 쉽게 할 수 있으며 .xml등의 설정 파일에서 데이터의 유형을 인지하기 위한 목적이 있다.

-----------------
### 3. @Autowired

#### 3-1. @Autowired의 의미
지금까지는 Spring bean에서 POJO를 생성하여 constructor-arg나 property를 이용하여 의존성을 주입하였다. 그러나 @Autowired를 사용하여 의존 인스턴스를 .xml파일이 자동으로 주입하게 할 수 있다. 

- 객체가 Autowired로 바인딩 될 때 기준은 해당 property나 constructor-arg에 부합하는 클래스를 자동으로 찾는다. 
- id(studentServiceBean)가 service와 달라도 상관 없으나 두 개 이상의 인스턴스가 발견될 경우 id와 parameter의 이름이 같은 인스턴스를 바인딩한다. 
- 두 개 이상의 인스턴스의 id들이 parameter의 이름과 다르다면 오류가 난다.

다음과 같이 객체들을 생성 할 때 객체 안에 Annotation이 있음을 기술해준다. 이로 인해 Annotation을 인지하며 객체를 생성하며 Autowired를 발견하면 자동으로 Injection한다.

```
<context:annotation-config/>
```

클래스에 다음과 같이 어노테이션을 선언하여 자동 주입을 해달라는 것을 기술한다.
```
//Autowired를 통해 컨테이너가 객체를 생성하며 자동으로 Bean을 주입한다.
	@Autowired	
	public void setService(StudentService service) {
		this.service = service;
	}
 ```
------------------
#### 3-2. @Qualifier와 @Autowired의 위치
Autowired 사용 시 의존하는 클래스의 인스턴스가 두 개 이상일 경우 인스턴스의 id들이 parameter의 이름과 다르다면 오류가 난다.    
```
	<bean id="studentServiceBean" class="service.StudentServiceImpl">
		<property name="student" ref="studentBean"></property>
	</bean> 
	<bean id="studentServiceDetailBean" class="service.StudentServiceDetailImpl">
		<property name="student" ref="studentBean2"></property>
	</bean>
	
	<bean id="infoServiceBean" class="service.InfoService"></bean>
```

이 경우 Qualifier를 사용하여 사용하고자 하는 인스턴스의 이름(id)를 명시해준다.
```
@Autowired
@Qualifier("studentServiceDetailBean")	
private StudentService service;
```

Autowired는 크게 멤버 변수, Setter, 생성자에서 주로 선언한다.

+ 멤버변수에서 바로 Autowired 선언
    - 멤버변수에 바로 선언할 경우. 기본적으로 디폴트 생성자를 통해 빈이 주입되므로 기본 생성자가 필요하다. 만약 오버로딩 생성자를 생성했다면 디폴트 생성자 또한 명시해주어야 사용할 수 있다.

```
	@Autowired
	@Qualifier("studentServiceDetailBean")	
	private StudentService service;
```

+ 생성자에서 Autowired 선언
    - 생성자를 통해 빈이 주입되고 싶다면 다음과 같이 명시하면 된다. 단 Qualifier의 경우 파라미터의 수가 많을 수 있으므로 다음과 같이 정의한다.

```
	
	 @Autowired
	 public InfoService(	
	 		Qualifier("studentServiceDetailBean") StudentService service,
	 		Qualifier("exampleBean") ExampleCalss example) {
	 	this.service = service; 
	 	this.example = example;
	 }
	 
```
+ Setter에서 Autowired 선언
    - Setter를 통해 빈이 주입되고 싶다면 다음과 같이 명시하면 된다. 
```
	@Autowired
	@Qualifier("studentServiceDetailBean")	
	public void setService(StudentService service) {
		this.service = service;
	}

```

--------------------
#### 3-3. Required 속성

프로젝트 빌드 시 @Autowired된 객체의 인스턴스가 주입되지 않는다면 에러가 난다. 그래서 반드시 의존성 주입을 강요받는데 @Autowired의 속성 중 required속성을 통해 이를 해결할 수 있다.

다음과 같이 required 속성을 false로 지정한다면 StudentVO의 인스턴스가 주입되지 않더라도 프로젝트가 빌드되며 student는 null인 상태이다. 이를 통해 DI를 원하지 않을 경우에도 유동적으로 설정이 가능해진다.
```
	@Autowired(required = false)
	@Qualifier("studentBean2")
	private StudentVO student;
```



