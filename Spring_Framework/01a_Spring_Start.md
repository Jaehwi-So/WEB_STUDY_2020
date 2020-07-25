스프링 프레임워크란?
======================
## 1. Spring 프레임워크의 정의와 환경설정
### 1-1 Spring 프레임워크란
프레임워크란 모듈의 개념이다. 라이브러리와 다른 점은 라이브러리는 프로그래머가 라이브러리의 원하는 기능을 가져다 사용 가능한 반면 프레임워크의 경우 정해진 모듈에 맞추어 프로그램을 작성해야 한다
스프링 프레임워크의 경우 JSP에서 필요한 부분들을 모듈화되어 사용할 수 있도록 하였다. 스프링의 가장 큰 특징이라고 하면 의존 관계 주입과 제어의 역전을 들 수 있다.
이로 인해 프로그래머는 비즈니스 로직을 구현하는 데에 집중할 수 있다.
스프링은 구조가 잘 잡히고 유지보수하기가 쉬우며 테스트하기 좋은 애플리케이션을 개발하기 위한 인프라를 제공함
오픈소스이기 때문에 비용이 들지 않음. 라이브러리와 다른 점은 라이브러리는 프로그래머가 라이브러리의 원하는 기능을 가져다 사용 가능한 반면 프레임워크의 경우 정해진 모듈에 맞추어 프로그램을 작성해야 한다.

### 1-2 Spring의 설치와 환경설정
#### Tomcat 설정
1. 포트번호바꾸기
conf->server.xml의 포트번호를 8080->9090(임의 포트번호)로 바꾸기
    <Connector port="9090" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" />
2. webapps->example->WEB_INF->lib에있는 라이브러리 두개 루트폴더의 lib에 복사

#### 이클립스 설정
3. help->eclipse marketplace -> Find검색 : spring sts ->Spring3 standalone edition
4. window -> preference -> general - > workspace -> utf-8 인코딩
5. webbrowser -> external web browser -> Chrome
6. server -> runtime environment -> tomcat 8.5
7. web->css,html,jsp utf-8로 인코딩

#### 다른사람의 프로젝트를 import할 경우
1. 프로젝트에서 maven -> update project
2. c드라이브 -> 사용자 -> pc -> .m2폴더 지우기 (실행이 안 될 경우)
<hr>

## 2. 스프링의 모듈과 기능
애플리케이션 개발 요소에 따라 스프링은 여러가지 모듈로 구성되어 있다.
### 2-1. 스프링 모듈의 종류
* 핵심 컨테이너   
  - DI(Dependency Injection : 의존성 주입)과 IoC(Inversion of Control : 제어 역전) 컨테이너 구현, 객체 설정 등 스프링의 기반을 이루는 모듈을 포함한다.
(spring-core, spring-beans, spring-expression)
* AOP와 계측    
  - AOP(관점 지향 프로그래밍)(spring-aop)과 클래스 계측(spring-instrument)을 지원하는 모듈을 포함한다.
* 메시징    
  - 메시징을 쉽게 개발할 수 있도록 도와주는 spring-messaging 모듈
* 데이터 접근    
  - DB와 메시징 공급자와의 상호작용을 도와주는 모듈. spring-jdbc, spring-orm, spring-jms, spring-tx..
* 웹    
  - spring-webmvc 모듈은 서블릿(servlet)기반 웹 애플리케이션과 RESTful 웹 서비스 개발을 도와준다. spring-webflux 모듈은 반응형 웹 애플리케이션, spring-websocket 모듈은 웹소켓 프로토콜을 사용하는 애플리케이션의 개발, spring-web 모듈은 공통으로 사용하는 클래스와 인터페이스를 정의한다.
    + REST : 자원의 상태(정보)를 주고 받는 모든 것을 의미한다.
* 테스트    
  - 단위 테스트와 통합 테스트를 도와주는 spring-text 모듈이 있다.
 
 ### 2-2. 스프링의 기능
 
 1. 프레임워크 내에서 객체 생성과 의존 관계를 주입함으로서 제어 역전 기능을 한다. 즉 이를 통해 자바 애플리케이션 조합을 쉽게 한다.
 2. 스프링 컨테이너가 애플리케이션 객체에 기능을 부여한 자바 클래스인 POJO를 기반으로 개발한다. 
 3. 스프링 컨테이너는 XML, Annotation, Java등을 통해 설정된 메타데이터를 기반으로 Java Reflection API를 사용해 애플리케이션 객체를 생성하고 의존 관계를 주입한다.
 4. 트랜잭션을 사용하는 애플리케이션 개발에 선언적 트랜잭션 관리를 사용하여 트랜잭션을 관리할 수 있다.
  - 트랜잭션 : DB의 상태를 변화시키기 위한 일련의 연산.
 5. 스프링 시큐리티 기능을 지원하여 보안과 권한 요구 기능을 구현할 수 있다.
 6. JMX 기술을 쉽게 애플리케이션에 덧붙일 수 있다.
 7. JMS(Java Message Service)를 사용하여 JMS 제공자와의 상호작용을 간단하게 만들어준다.
 8. 캐시 추상화를 사용하여 일관성 있게 캐시를 사용할 수 있다.
<hr>

## 3. 스프링 프로젝트 분석
### 3-1. 프로젝트 생성과 실행
#### 프로젝트 생성
file -> new -> spring -> spring legacy project
Templetes : Spring MVC Project 선택 (스프링 프레임워크로 웹 MVC모델을 구현하는 것을 주 목적으로 한다)
패키지 이름 (com.korea.test)

> 패키지
> > - 애플리케이션을 구분하는 고유한 값 
> > - 앱이 디바이스에 설치되었을 때 다른 앱들과 구분하는 역할을 하므로 유일무이해야 한다.    

> 패키지 명명 방법
> > - com.회사이름.프로그램이름 com.devmg.app
> > - com.회사이름.플랫폼.프로그램이름 com.devmg.android.app / com.devmg.ios.app 
> > - kr.co.회사이름.프로그램이름 kr.co.devmg.app 
> > - kr.co.회사이름.플랫폼.프로그램이름 kr.co.devmg.android.app    

> 명명 규칙
> > - 회사 이름이나 혹은 도메인(웹사이트주소)등은 유니크하기 때문에 사이트명으로 많이 구분합니다.
> > - 웹사이트 주소를 반대로 기재한 모양으로 패키지 이름을 부여합니다.
> > - 명칭 소문자 사용
> > - 패키지명에 대문자는 사용하지 않는게 좋습니다.(권고)
> > - 소스 파일들을 각각의 그룹으로 구분하기 위해 점(.)으로 구분
> > - 패키지 이름으로 소스가 들어가는 폴더가 자동으로 만들어 집니다.
> > Link: [참고](https://devmg.tistory.com/66, "link")

#### 프로젝트 실행
프로젝트에서 run as -> run on server
이 때 web.xml이 가장 먼저 실행된다.

### 3-2 프로젝트 구성
* <b>pom.xml</b> : Maven은 "pom.xml"라는 빌드 파일을 사용하여 빌드 정보를 기술한다. 이 파일이 어떤 내용으로 되어 있는지, 그 기본형을 설명한다. 프로젝트의 기본 설정과 dependency, 즉 참조 라이브러리를 모아서 기술한다.
* <b>web.xml</b> :  웹 프로젝트의 배치 기술서. 프로젝트가 실행되면 맨 처음 web.xml을 읽어들임 클라이언트의 요청 시 클라이언트의 요청을 핸들링 web.xml에서 ContextLoader을 통해 root-context.xml과 servlet-context.xml을 참조하게 된다.
* <b>root-context.xml</b> : root-context는 사용할 객체를 생성하는 영역. web.xml 다음으로 실행된다. Service, DAO, DB등 비즈니스 로직과 관련된 설정을 한다.
* <b>servlet-context.xml</b> : Controller나, @(어노테이션), ViewResolver, Interceptor, MultipartResolver 등의 설정. View와 관련있는 설정을 담당한다.







