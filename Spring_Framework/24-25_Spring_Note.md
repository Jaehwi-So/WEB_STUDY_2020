# 스프링 MVC 프로젝트
- [1. MVC 프로젝트와 환경설정](#1-관점-지향-프로그래밍)
  + [1-1. MVC 프로젝트의 구성](#1-1-aspectj-설정)
	* [1-1-1. pom.xml](#1-1-1-pomxml)
	* [1-1-2. web.xml](#1-1-2-webxml)
	* [1-1-3. servlet-context.xml(DispatcherServlet)](#1-1-3-servletcontextxmldispatcherservlet)
	* [1-1-4. root-context.xml](#1-1-4-rootcontextxml)
	* [1-1-5. Model, View, Controller](#1-1-5-model-view-controller)
  + [1-2. MVC 프로젝트의 동작원리](#1-2-포인트컷과-advice의-연결)
- [2. Java Configuration을 이용한 설정](#2-java-configuration을-이용한-설정)
  + [2-1. WebInitiallizer](#2-1-webinitiallizer)
  + [2-2. WebContextConfig](#2-2-webcontextconfig)
  + [2-3. RootContextConfig](#2-3-rootcontextconfig)
----------------------
## 1. 스프링 MVC 프로젝트
이제 본격적으로 Spring을 이용하여 웹 어플리케이션을 구성하고자 한다.   
프로젝트는 Spring Lacacy Project에 MVC Project를 이용하게 될 텐데 이 프로젝트의 구성과 환경설정 방법, 그리고 동작 원리에 대해서 알아보려고 한다.

### 1-1. MVC 프로젝트의 구성
웹 어플리케이션을 구성하는 요소로는 MVC에 해당하는 Model, View, Controller와 환경 설정 파일들에 해당하는 pom.xml, web.xml, servlet-context, root-context등이 있을 것이다. 아래에서 이러한 구성 요소들을 파해쳐보겠다.

#### 1-1-1. pom.xml

Maven은 "pom.xml"라는 빌드 파일을 사용하여 빌드 정보를 기술한다. 이 파일이 어떤 내용으로 되어 있는지, 그 기본형을 설명한다. 프로젝트의 기본 설정과 dependency, 즉 참조 라이브러리를 모아서 기술한다. 이는 &lt;dependencies>에 모아서 기술한다.

##### 1-1-2. web.xml

웹 프로젝트의 배치 기술서. 프로젝트가 실행되면 맨 처음 web.xml을 읽어들임 클라이언트의 요청 시 클라이언트의 요청을 핸들링한다. web.xml에서 ContextLoader을 통해 root-context.xml과 servlet-context.xml을 참조하게 된다.

```
<?xml version="1.0" encoding="UTF-8"?>
<web-app version="2.5" xmlns="http://java.sun.com/xml/ns/javaee"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://java.sun.com/xml/ns/javaee https://java.sun.com/xml/ns/javaee/web-app_2_5.xsd">
	web.xml : 웹 프로젝트의 배치 기술서. 프로젝트가 실행되면 맨 처음 web.xml을 읽어들임-->
	
	<!-- 2. 객체를 생성하기 위해서 스프링의 환경설정 파일인 root-context.xml을 참조하여 생성된다. -->
	<!-- The definition of the Root Spring Container shared by all Servlets and Filters -->
	<context-param>
		<param-name>contextConfigLocation</param-name>
		<param-value>/WEB-INF/spring/root-context.xml</param-value>
	</context-param>
	<!-- 1. context라는 참조파일들을 가져와 객체를 생성하기 위해 ContextLoader을 찾는다.(Listener실행) 
	이를 통해 루트 컨텍스트에 정의되어 있는 것들을 모든 서블릿과 필터가 공유할 수 있게 해준다.-->
	<!-- Creates the Spring Container shared by all Servlets and Filters -->
	<listener>
		<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
	</listener>

	<!-- 3. 서블릿 설정. Spring에 내장된 DispatcherServlet을 호출. 
	이는 앞단에서 웹 어플리케이션의 요청정보를 가로채 적절한 컨트롤러에 핸들링 해준다.
	이는 servlet-context.xml을 참조한다. -->
	<!-- Processes application requests -->
	<servlet>
		<servlet-name>appServlet</servlet-name>
		<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
		<init-param>
			<param-name>contextConfigLocation</param-name> 
			<param-value>/WEB-INF/spring/appServlet/servlet-context.xml</param-value>
		</init-param>
		<load-on-startup>1</load-on-startup>
	</servlet>
		
	<servlet-mapping>
		<servlet-name>appServlet</servlet-name>
		<url-pattern>/</url-pattern>
	</servlet-mapping>

</web-app>
```

web.xml에서는 크게 세가지의 설정을 한다.
- ContextLoaderListener 생성 
	* context에 해당하는 xml 설정파일들을 web.xml에서 모두 load되도록 등록할 때 사용한다.
	* 서블릿을 초기화하는 역할도 한다. 이를 통해 정의된 빈들을 모든 서블릿과 필터가 공유하도록 할 수 있다.
- root-context를 참조하여 빈 생성
	* Service, DAO, DB등 비즈니스 로직과 관련된 설정을 기재한 root-context를 참조한다.
- DispatcherServlet을 호출
	*  제일 앞에서 서버로 들어오는 모든 요청을 처리하는 프론트 컨트롤러를 Spring에서 정의한 것
	* HTTP 요청을 가로채 적절한 컨트롤러에 핸들링 해주는 역할을 한다.
	* 주로 servlet-context.xml의 형태의 xml파일을 참조하게 된다.

##### 1-1-3. servlet-context.xml(DispatcherServlet)
```
servlet-context는 웹 어플리케이션의 요청을 받기 위한 Entry Point인 서블릿의 Context 설정이다.   
요청에 대한 처리를 직접적으로 해줄 Controller의 매핑설정(Handler Mapping), View를 어떻게 처리할 것인지에 대한 설정(View Resolver) 등이 존재하게 된다.    
이 servlet-context를 DispathcerServlet에서 참조하여 요청을 매핑된 컨트롤러에 핸들링해준다.
```

#### 1-1-4. root-context.xml
root-context의 경우 웹 어플리케이션의 비즈니스 영역의 객체 인스턴스를 생성하기 위해 명시하는 context 설정 파일이다. 해당 xml 설정파일에서 DAO, Service 등의 빈을 생성한다.

### 1-1-5. Model, View, Controller
- Model
	* 비즈니스 로직을 처리해주는 자바 클래스나 빈에 해당한다. DAO, Service 등..
- View
	* 클라이언트의 요청 결과를 보여줄 페이지를 출력한다. HTML, jsp등..
- Controller
	* 클라이언트의 요청에 따른 흐름 제어를 담당하는 서블릿인 Controller

## 1-2. MVC 프로젝트의 동작원리

다음은 설정 파일들의 동작 원리이다.
1. web.xml이 가장 먼저 실행된다.
2. ContextLoaderListener 검색
3. root-context.xml을 참조하여 빈 생성
4. servlet-context.xml을 참조하여 DispatcherServlet 설정

다음은 클라이언트의 HTTP 요청 시 MVC 프로젝트가 동작하는 과정이다.
1. 클라이언트가 URL을 통해 HTTP 요청
2. DispatcherServlet이 요청을 가로챔
3. 해당 요청을 매핑한 컨트롤러가 있는지 확인
4. 컨트롤러에 처리요청. 컨트롤러는 ModelAndView를 반환
5. ViewResolver를 통해 컨트롤러에서 보내온 네임을 통해 View 검색
6. 처리결과가 포함된 View를 DispatcherServlet에 송신
7. DispatcherServlet이 최종 결과를 클라이언트에게 출력

-----------------------

## 2. Java Configuration을 이용한 설정
전에 스프링 컨테이너를 .xml파일을 이용한 설정과 Java 클래스를 이용하여 설정하는 방법을 익혔다. 이번에는 이제 스프링 MVC 프로젝트의 설정을 자바 클래스와 어노테이션들을 이용하여 설정하는 방법을 살펴보겠다. 설정하기에 앞서 pom.xml의 스프링 버전과 dependency의 서블릿을 변경해야 자바 설정을 위한 클래스를 사용 할 수 있다. 또한 web.xml을 대체할 클래스를 생성할 것이므로 plugin에 web.xml이 없어도 문제없다는 설정을 명시해준다.
(pom.xml)
```
	<properties>
		<java-version>1.6</java-version>
		<org.springframework-version>5.0.1.RELEASE</org.springframework-version>
		<org.aspectj-version>1.6.10</org.aspectj-version>
		<org.slf4j-version>1.6.6</org.slf4j-version>
	</properties>
	...
	<dependency>
		<groupId>javax.servlet</groupId>
		<artifactId>javax.servlet-api</artifactId>
		<version>3.1.0</version>
		<scope>provided</scope>
	</dependency>
	...
	<plugin>
	 	<groupId>org.apache.maven.plugins</groupId>
		<artifactId>maven-war-plugin</artifactId>
		<configuration>
			<failOnMissingWebXml>false</failOnMissingWebXml>
		</configuration>
	</plugin>   
```

### 2-1. WebInitiallizer

WebInitiallizer는 web.xml에 해당하는 설정파일을 대신한다. Initializer 클래스를 사용해 Servlet-context를 프로그램에서 설정하고 DispatcherServlet과 ContextLoaderListener를 서블릿 컨텍스트로 설정한다.

```
public class WebInitiallizer extends AbstractAnnotationConfigDispatcherServletInitializer{

	//루트 웹 애플리케이션 컨텍스트에 등록될 root-context에 해당하는 Configuration을 반환해준다. 
	//AbstractAnnotationConfigDispatcherServletInitializer는
	//ContextLoaderListener의 인스턴스를 루트 웹 애플리케이션 컨텍스트에 제공한다.
	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class[] { RootContextConfig.class };
	}

	//자식 웹 애플리케이션 컨텍스트에 등록될 servlet-context에 해당하는 Configuration을 반환해준다.
	//AbstractAnnotationConfigDispatcherServletInitializer는
	//Dispatcher Servlet의 인스턴스를 자식 웹 애플리케이션 컨텍스트에 제공한다.
	@Override
	protected Class<?>[] getServletConfigClasses() {
		return new Class[] { WebContextConfig.class };
	}

	//DispatcherServlet의 서블릿 매핑을 지원한다.
	@Override
	protected String[] getServletMappings() {
		return new String[] { "/" };
	}
	
}
```

### 2-2. WebContextConfig
servlet-context.xml에 해당하는 자식 어플리케이션 컨텍스트를 구현한다.
```
//@Configuration을 통해 설정파일임을 명시해준다.
@ComponentScan({"controller"})
//EnableWebMvc는 어노테이션 설정 방식을 활용하겠다는 <annotation-driven> 역할을 해 준다.
@EnableWebMvc
@Configuration
//servlet-context에서 할 수 있는 설정들을 WebMvcConfiguer 인터페이스의 메서드들을 구현하여 사용한다.
public class WebContextConfig extends WebMvcConfigurerAdapter{

	//view resolver의 역할을 한다.
	@Override
	public void configureViewResolvers(ViewResolverRegistry registry) {
		InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
		viewResolver.setPrefix("/WEB-INF/views/");
		viewResolver.setSuffix(".jsp");
		registry.viewResolver(viewResolver);
		
	}
}
```

### 2-3. RootContextConfig
root-context.xml에 해당하는 웹 어플리케이션 컨텍스트 구현. 
```
//@Configuration을 통해 설정파일임을 명시해준다.
@Configuration
//ComponentScan을 통해 dao, service패키지에 있는 클래스들의 빈 자동생성
@ComponentScan(basePackages = { "dao", "service"})
public class RootContextConfig {

}
```


