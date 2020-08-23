# **Spring Framework**

## 스프링 공부를 하며 실습과 정리 노트를 올려둔 Repository
### 해당 주제에 맞는 **마크다운 노트 정리**와 **예제 프로젝트**의 링크와 키워드를 나열해두었다.

- Spring Tools : String Tools 3 Standalone Eddition 3 (3.9.13 RELEASE)
- Spring Version : 3.1.1 / 5.0.1
- DBMS : Oracle Database 11g
- Server : Apache Tomcat 8.5
-----------------------------
# INDEX

해당 번호에 해당하는 폴더에 해당 주제에 대한 예제 프로젝트와 설명으로 주석이 상세히 달려 있음. 인덱스의 부가 목록으로는 키워드를 달아 둠

- [1. 스프링 프레임워크의 정의와 환경설정](1-스프링-프레임워크의-정의와-환경설정)
- [2-12. XML 설정파일에 기반한 스프링 컨테이너와 스프링 빈 설정](2-12-xml-설정파일에-기반한-스프링-컨테이너와-스프링-빈-설정)
- [13-18. Annotation 기반의 컨테이너 설정과 Java Configuration](13-18-annotaion-기반의-컨테이너-설정과-java-configuration)
- [19-23. AOP(Aspect_Oriented_Programming)](19-23-aopaspectorientedprogramming)
- [24-35. Spring MVC 프로젝트](24-35-spring-mvc-프로젝트)
- [36-37. RESTful API](36-37-restful-api)
- Spring 시큐리티(추가 학습 예정)

---------------------------------

# 1. 스프링 프레임워크의 정의와 환경설정
## [**필기 : 1. Spring 프레임워크의 기능과 환경 설정, 프로젝트 구성**](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/01_Spring_Note.md)   
### [실습 : 1. Spring 프레임워크의 기능과 환경 설정, 프로젝트 구성](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/01e_Spring_Start)
* 스프링 프레임워크 정의, 환경설정, Tomcat, 모듈, 기능

-----------------------------------

# 2-12. XML 설정파일에 기반한 스프링 컨테이너와 스프링 빈 설정
## [**필기 : 2~6. 스프링 컨테이너와 스프링 빈**](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/02-06_Spring_Note.md)   
### [실습 : 2. 스프링 컨테이너에서의 Bean 생성(정적 팩토리 메서드 이용)](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/02_Spring_Bean)
* 스프링 IoC 컨테이너, 스프링 빈, 정적 팩토리
### [실습 : 3. 인스턴스 팩토리를 통한 Bean의 생성과 의존관계 주입)](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/03_Spring_Bean)
* 컨테이너, 스프링 빈, 의존 관계, 인스턴스 팩토리
### [실습 : 4. Bean의 SI(Setter Injection)과 CI(Constructor Injection)](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/04_Spring_Bean_Injection)
* SI(Setter Injection), property
* CI(Constructor Injection), constructor-arg
### [실습 : 5. Bean의 의존성 주입(DI)와 빈 스코프](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/05_Dependency_Injection)
* DI(의존성 주입), ref
* IoC(제어 역전)
* 빈 스코프, Single-ton, Prototype
### [실습 : 6. 의존 관계 인터페이스를 통한 설계](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/06_Dependency_Interface)
* 의존 관계 인터페이스 설계

-------------------------

## [**필기 : 7~9. 스프링 빈 설정과 모듈화**](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/07-09_Spring_Note.md)   
### [실습 : 7. Bean의 상속과 추상 Bean](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/07_Bean_Inheritance)
* 스프링 빈 상속(abstract, parent)
* 스프링 빈 설정, Templete
### [실습 : 8. Bean에 Collection 타입 지정하기](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/08_Bean_Collection)
* Collection 타입 지정(value, entry, key, ref, idref)
### [실습 : 9. c-이름공간, p-이름공간, util-스키마, 모듈화](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/09_Bean_Setting)
*  c-이름공간, p-이름공간
* util 스키마(list, map, set, constant, properties)
* 모듈화
### [실습 : 10. properties 파일의 사용법과 Bean 등록](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/10_Properties)
* properties 
### [실습 : 11. 내부 빈, 명시적/암시적 의존 관계, 빈 초기화 제어](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/11_Dependency)
* 내부 빈 설정
* 명시적, 암시적 의존 관계, depends-on
* depends-on
### [실습 : 12. 싱글턴과 프로토타입 빈 간의 의존 관계](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/12_Dependency)
- 싱글턴과 프로토타입 빈의 의존 관계 
- lookup-method

--------------------------------------

# 13-18. Annotation 기반의 컨테이너 설정과 Java Configuration
## [**필기 : 13~16. Annotation 기반 컨테이너 설정**](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/13-16_Spring_Note.md)   
### [실습 : 13. Maven 프로젝트와 IoC 컨테이너](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/13_Maven_IoC_Container)
* Maven의 정의, 구성요소, 설정
### [실습 : 14. Annotation과 @Autowired](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/14_Annotation_Autowired)
* Annotation이란? 
* annotation-config
* @Autowired
### [실습 : 15. @Autowired의 위치와 @Quealifier를 통한 빈의 구분](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/15_Annotation_Qualifier)
* @Autowired 어노테이션의 위치
* @Qualifier
### [실습 : 16. @Autowired의 required 속성](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/16_Annotation_Required)
* @Autowired의 required 속성

----------------------------

## [**필기 : 17~18. Annotation 기반 인스턴스의 생성과 Java Configuration을 통한 컨테이너 설정**](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/17-18_Spring_Note.md)   
### [실습 : 17. @Component, @Value 어노테이션을 통한 인스턴스의 생성](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/17_Annotation_Component)
* @Component, component-scan
* @Controller, @Service, @Repository
### [실습 : 18. xml 설정파일을 Java Class로 구현하여 설정하기](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/18_Java_Configuration)
* @Configuration
* @Bean

-----------------------

# 19-23. AOP(Aspect_Oriented_Programming)
## [**필기 : 19~21. 자바와 Spring에서의 AOP와 xml 기반 설정**](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/19-21_Spring_Note.md)   
### [실습 : 19. AOP와 Proxy, 자바에서의 AOP](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/19_AOP_Aspect_Oriented_Programming)
* AOP의 정의, 자바 코드에서의 AOP
* 공통 관심사 : primary(core) concern
* 횡단 관심사 : cross-cutting-concern
* proxy, 핸들러, InvocationHandler
### [실습 : 20. Spring에서의 AOP, Advice](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/20_AOP_Spring)
* 스프링에서의 AOP
* 어드바이스 : Advice
	- Around Advice
	- Before Advice
	- After returning Advice
	- After throwing Adivce
### [실습 : 21. 포인트 컷 설정과 Advisor를 통한 위빙](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/21_AOP_Spring)
* 포인트컷 :Pointcut
* 조인포인트 : Joinpoint 
* 위빙 : Weaving
* 애스팩트 : Aspect
* invoke, target, interceptorNames

---------------------------

## [**필기 : 22~23. AspectJ를 이용한 AOP와 Annotation 기반 설정**](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/22-23_Spring_Note.md)   
### [실습 : 22. AspectJ를 이용한 AOP xml 설정](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/22_AOP_AspectJ)
* AspectJ 설정, <aop:config>, <aop:aspect>
* 포인트컷 표현식 (expression)
* joinPoint, 바인드 변수, getSignature()
### [실습 : 23. Annotation을 이용한 AOP](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/23_AOP_Annotation)
- autoproxy
- @Aspect
- @PointCut
- @Before, @Around, @AfterReturning, @AfterThrowing

----------------------
# 24-35. Spring MVC 프로젝트
## [**필기 : 24~25. MVC 프로젝트 컨테이너 설정**](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/24-25_Spring_Note.md)   
### [실습 : 24. xml 파일을 통한 MVC 설정](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/24_Spring_MVC)
- Model, View, Controller
- pom.xml, web,xml, ContextLoader
- servlet-context.xml, DispatcherServlet
- root-context.xml
- View resolver, ModelAndView
- 비즈니스 로직, 서블릿, 필터, Service, DAO
- MVC 프로젝트의 동작 원리
- 요청과 매핑
### [실습 : 25. Java Config와 Annotation를 통한 MVC 설정](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/25_Spring_MVC)
- WebInitiallizer
- @EnableWebMvc
- WebContextConfig, RootContextConfig, ConfigurerAdapter
- @ComponentScan, @Configuration

------------------------

## [**필기 : 26. 스프링 JDBC와 MyBatis**](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/26_Spring_Note.md)   
### [실습 : 26. Spring JDBC와 MyBatis를 통한 DBMS 연동](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/26_JDBC_MyBatis)
- JDBC, 트랜잭션, SQL문
- JDBC 과정과 모듈
- SqlSession, SqlSessionTemplate, SqlSessionFactory
- MyBatis
* mapper
* db.properties, mybatis.config
* context-datasource, context-mybatis, DBCP

--------------------------

## [**필기 : 27-30. 컨트롤러의 매핑과 데이터 상호작용**](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/27-30_Spring_Note.md)   
### [실습 : 27. RequestMapping : URL을 컨트롤러에 매핑](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/27_RequestMapping)
- @RequestMapping
- 반환형 : ModelAndView, String(View), redirect:, void, Object
- 메서드 수준, 클래스 수준 매핑, HTTP 요청 메서드 매핑, 파라미터 매핑, 요청 헤더값, MIME 타입에 따른 매핑
### [실습 : 28. 요청 파라미터를 받는 방법과 RequestParam](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/28_RequestParam)
- 컨트롤러 메서드의 시그니처, HttpServletRequest,HttpSession,SessionStatus,Model
- 컨트롤러의 파라미터
- Map이나 VO 등 객체 형태의 인수 전달
- @RequestParam
### [실습 : 29. 데이터 바인딩과 ModelAttribute](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/29_ModelAttribute)
- Model
- model.addAttribute
- @ModelAttribute
### [실습 : 30. 스프링 데이터 검증](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/30_DataValidate)
- Validator
- supports(), validate(), hasErrors()
- DTO
- @Valid
	*  @AssertTrue, @AssertFalse, @NotNull, @NotEmpty, @NotBlank, @Size, @Null, @Positive, @PositiveOrZero, @Negative, @NegativeOrZero, @Min, @Max, @Email, @Pattern

-----------------------------

## [**필기 : 31-33. 다양한 데이터의 통신**](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/31-33_Spring_Note.md) 
### [실습 : 31. Ajax와 Jackson을 이용한 JSON 타입 데이터 반환](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/31_ResponseBody_Jackson_Ajax)  
- Ajax, JSON
- Jackson
### [실습 : 32. 컨트롤러에서의 JSON 타입 처리와 다양한 Ajax 비동기 통신 방법](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/32_RequestBody_Ajax)  
- @ResponseBody, @RequestBody
- Ajax 방법 
	* XMLHttpRequest
	* Jquery
- 클라이언트 측에서 Object, Form, Json을 파라미터로 넘기기
- serialize
- Open API에서 JSON 데이터 받기
### [실습 : 33. 파일 타입의 업로드와 웹 절대경로](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/33_SpringFileUpload)  
- 파일 업로드
- multipartResolver
- getRealPath()

------------------------------------

### [간이 프로젝트 : 방명록](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/34_Ex_MVC_Visit)  
### [간이 프로젝트 : 게시판](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/35_Ex_MVC_Board)  


------------------------------------------
# 36-37. RESTful API
## [**필기 : 36~37. RESTful API 정의, 설계, 구현**](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/36-37_Spring_Note.md)   
### [실습 : 36. RESTful API 디자인, 구현 그리고 RESTful JSON 데이터 교환](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/36_RESTful_API)
- REST의 정의, URL, URI, CURD, JSON
- REST 설계규칙
- HttpRequest : GET, POST, PUT, DELETE
- @GetMapping, @PostMapping, @PutMapping, @DeleteMapping
- @ResponseBody, @RequestBody
- @PathVariable
### [실습 : 37. REST 컨트롤러와 어노테이션](https://github.com/Jaehwi-So/WEB_STUDY_FullStack/blob/master/Spring_Framework/37_RESTful_API)
- @RestController
------------------------------------------------
