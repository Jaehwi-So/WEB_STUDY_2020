## Spring Bean
- [1. 스프링 컨테이너와 스프링 빈]("#1.-스프링-컨테이너와-스프링-빈")
    + [1-1. 스프링 컨테이너]("#1-1.-스프링-컨테이너")
    + [1-2. 스프링 빈]("#1-2.-스프링-빈")


### 1. 스프링 컨테이너와 스프링 빈

#### 1-1. 스프링 컨테이너
스프링 컨테이너에서는 DI(Dependency Injection : 의존성 주입)과 IoC(Inversion of Control : 제어 역전) 컨테이너 구현, 객체 설정 등을 할 수 있다.
본 spring-mvc-project에서는 설정 메타 데이터에 해당하는 root-context와 servlet-context에서 본 기능들을 명시한다.

#### 1-2. 스프링 빈
스프링 컨테이너가 애플리케이션 객체를 생성하고 관리한다. 즉 스프링 컨테이너를 통해 서비스를 가독성있고 명확하게 객체에 적용이 가능하며 컨테이너를 통해 생성된 자바 객체를
POJO(plain old java object)라고 칭한다. Spring에서 컨테이너를 통해 생성하는 POJO(plain old java object)를 Beans라고 칭한다.
설정 메타 데이터(xml)에 명시된 데이터에 따라 IoC 컨테이너는 Beans를 생성하고 인스턴스화하며 의존성을 주입할 수 있다.
Spring Bean은 xml 파일, 즉 root-context.xml, servlet-context.xml등에서 정의된다.

- Bean의 속성
  + class: 자바 클래스 이름
  + id: 빈을 식별하는 용도의 ID
  + scope: sigleton, prototype 인스턴스의 수명을 결정하는 범위
  + constructor-arg: 인스턴스 생성 시 생성자에 전달할 인수
  + property: 인스턴스 생성 시 Setter에 전달할 인수
  + init method와 destroy method


























