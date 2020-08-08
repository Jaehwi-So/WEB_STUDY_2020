# Annotation을 통한 객체 생성과 자바기반의 컨테이너 생성
- [1. 어노테이션을 통한 빈 생성](#1-Maven-프로젝트)
  + [1-1. @Component를 통한 객체 생성](#1-1-component를-통한-객체-생성)
  + [1-2. @Value를 통한 값 주입](#1-2-value를-통한-값-주입)
  + [1-3. @Controller, @Service, @Repository](#1-3-controller-service-repository)
- [2. 자바기반 IoC 컨테이너 설정](#2-자바기반-ioc-컨테이너)
  + [2-1. @Configuration으로 설정파일 명시](#2-1-configuration으로-설정파일-명시)
  + [2-2. @Bean을 통한 객체의 생성](#2-2-bean을-통한-객체의-생성)
  + [2-3. 컨테이너 설정](#2-3-컨테이너-설정)


----------------------
### 1. 어노테이션을 통한 빈 생성
앞에서 @Autowired를 통해 자동 DI가 되는 것을 보았는데 컨테이너가 클래스들을 스캔하여 객체를 자동으로 생성하게 할 수도 있다.

#### 1-1. @Component를 통한 객체 생성
@Component 어노테이션을 사용하면 스프링 컨테이너가 어노테이션이 설정된 새로운 빈들을 찾는 스캔을 하여 객체를 생성한다. 

다음과 같이 component-scan을 명시해주어야 컨텍스트에 등록된 빈들의 어노테이션들이 적용될 수 있도록 한다.   
이를 통해 컨테이너가 탐색 시 어노테이션을 발견하여 @Component를 인지할 수 있으며 @Autowired가 존재한다면 이 또한 인식하여 객체 생성 시 자동으로 DI또한 할 수 있다.
```
<context:component-scan base-package="package_name"/>
```

그리고 나서 자바 클래스에 다음과 같이 어노테이션으로 명시하게 되면 컨테이너가 해당 클래스의 인스턴스를 생성한다. 어노테이션 뒤에 ID에 해당하는 별칭을 지정하여 @Autowired의 @Qualifier등에 사용하는 것도 가능하다.
```
@Component
public class ExamService{...}

@Component("examServiceBean")
public class ExamService{...}

```

#### 1-3. @Controller, @Service, @Repository
@Component는 용도에 따라서 자식 어노테이션으로 @Controller, @Service, @Repository가 있다. 이 어노테이션들은 @Component를 대체 가능하다.  
본래 @Component는 MVC 모델을 구현할 때 주로 사용한다. 올려놓은 실습예제는 적합도가 떨어진다고 볼 수 있다.

MVC 패턴에서는 주로 컨테이너에서 Controller, Service, DAO의 빈을 생성하게 되는데 이 때 @Component를 사용한다면 용도에 따라 다음의 어노테이션으로 대체한다.

- @Controller -> Controller
- @Service -> Service
- @Repository -> DAO

이를 통해 프로그래밍 코드의 직관성이 높아지고 용도를 파악하기 쉬워진다.

```
@Controller
public class StudentController {
...
}
```

------------------------------

### 2. 자바기반 IoC 컨테이너 설정
지금까지는 .xml의 설정 파일에 의존하여 IoC 컨테이너의 설정을 하였다.   
그런데 .xml파일이 아닌 자바 클래스를 통해서 컨테이너의 설정을 진행할 수 있다.


#### 2-1. @Configuration으로 설정파일 명시

다음과 같이 @Configuration 어노테이션을 통해 다음 자바 클래스가 컨테이너 설정의 정보가 담겨있음을 명시해준다.

```
@Configuration
public class TestConfig {
    ...
}
```

### 2-2. @Bean을 통한 객체의 생성
빈의 생성은 @Bean을 통해 이루어진다. 해당 어노테이션을 통해서 클래스의 인스턴스가 생성된다.

반환형은 생성하고자 하는 빈의 클래스, 함수명은 빈의 id에 해당하는 이름을 사용한다.
```
	@Bean
	public InfoService infoServiceBean() {	
		return new InfoService();
	}
```
해당 코드는 .xml 설정파일에서 다음을 대체하는 코드이다.
```
    <bean id="infoServiceBean" class="service.InfoService"> 
        <property name="service" ref="studentServiceDetailBean"></property> 
    </bean>
```

### 2-3. 컨테이너 설정

다음과 같이 .xml에서의 component-scan기능을 사용하려면 클래스에 어노테이션을 통해 명시해야 한다. 아래의 두 코드는 같은 기능을 한다.

```
<context:component-scan base-package="service, vo"/>
```
```
@ComponentScan({"service", "vo"})
@Configuration
public class TestConfig{
    ...
}
```

