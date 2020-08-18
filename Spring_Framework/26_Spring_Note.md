# 스프링 JDBC와 MyBatis
- [1. 스프링 JDBC](#1-스프링-jdbc)
  + [1-1. JDBC란?](#1-1-jdbc란)
  + [1-2. JDBC 모듈 설정](#1-2-jdbc-모듈-설정)
	* [1-2-1. db.properties](#1-2-1-dbproperties)
	* [1-2-2. mybatis-config](#1-2-2-mybatisconfig)
	* [1-2-3. datasource](#1-2-3-datasource)
	* [1-2-4. context-mybatis](#1-2-4-contextmybatis)
	* [1-2-5. mapper](#1-2-5-mapper)
- [2. MyBatis를 이용한 DBMS](#2-mybatis를-이용한-dbms)

----------------------
## 1. 스프링 JDBC
전에 jsp으로 웹 어플리케이션을 만들 때 데이터베이스와의 상호작용을 통해 API를 만들었다. 이번에는 스프링에서 데이터베이스와 연동하기 위한 설정과 사용방법을 알아보도록 하겠다.

### 1-1. JDBC란?
JDBC는 자바에서 DB 프로그래밍을 하기 위해 사용되는 API이다.   
스프링 JDBC 모듈을 사용하면 데이터베이스 연결을 열고 닫기, 트랜잭션 관리, 예외 처리 등의 세부사항들을 스프링이 처리해주기 때문에 데이터 소스와의 상호 작용이 단순해진다.    
다음은 일반적인 JDBC를 통한 데이터 소스와의 상호 작용 과정이다    
1. JDBC 드라이버 로드
2. DB 연결
3. DB 데이터 트랜잭션(SQL문)
	* 트랜잭션 : 트랜잭션(Transaction)은 데이터베이스의 상태를 변화시키기 해서 수행하는 작업의 단위를 뜻한다. 즉 질의어(SQL)를 이용하여 데이터베이스를 접근 하는 것을 의미한다.
4. DB 연결 종료

이 과정을 매번 DB와의 상호작용 필요시마다 하기에는 반복되는 작업이 많고 번거롭다. 따라서 스프링에서 설정 파일을 통해 반복되는 작업을 줄이고 MyBatis나 Hibernate의 프레임워크를 이용해 과정을 단순화 시키면 로직 처리가 수월해진다.

우선 JDBC를 위해서 라이브러리 등록과 web.xml의 설정을 바꾸자
다음은 pom.xml에서 필요한 라이브러리들을 등록한 것이다.
```
		<!--  ## DBCP 라이브러리 풀 ##-->
		<!-- https://mvnrepository.com/artifact/commons-dbcp/commons-dbcp -->
		<dependency>
		    <groupId>commons-dbcp</groupId>
		    <artifactId>commons-dbcp</artifactId>
		    <version>1.4</version>
		</dependency>      
		
		<!-- ## MyBatis 라이브러리 ## -->
		<!-- https://mvnrepository.com/artifact/org.mybatis/mybatis -->
		<dependency>
		    <groupId>org.mybatis</groupId>
		    <artifactId>mybatis</artifactId>
		    <version>3.4.5</version>
		</dependency>
		
		<!-- ## MyBatis-Spring 라이브러리 ## -->
		<!-- https://mvnrepository.com/artifact/org.mybatis/mybatis-spring -->
		<dependency>
		    <groupId>org.mybatis</groupId>
		    <artifactId>mybatis-spring</artifactId>
		    <version>1.3.1</version>
		</dependency>
		
		<!-- ## Spring JDBC 라이브러리 ## -->
		<!-- https://mvnrepository.com/artifact/org.springframework/spring-jdbc -->
		<dependency>
		    <groupId>org.springframework</groupId>
		    <artifactId>spring-jdbc</artifactId>
		    <version>3.2.2.RELEASE</version>
		</dependency>        
```

다음은 web.xml이다. 
- 한글 사용을 위해 url-pattern에 해당하는 mapper들을 인코딩 처리
- 프로젝트에서 root-context 대신 여러개의 context를 사용할 것이다. 따라서 모든 객체 생성 참조파일을 명시하자
- 서블릿 컨텍스트의 경로도 바꿀 것이므로 경로 재설정
```
	<!-- ================ utf-8 인코딩 설정 ======================== -->
	<filter>
		<filter-name>encodingFilter</filter-name>
		<filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
		<init-param>
			<param-name>encoding</param-name>
			<param-value>utf-8</param-value>
		</init-param>
	</filter>
	
	<filter-mapping>
		<filter-name>encodingFilter</filter-name>
		<url-pattern>*.do</url-pattern> <!-- do로 끝나는 모든 mapper들을 모두 인코딩 처리 -->
	</filter-mapping>
	<!-- ================ utf-8 인코딩 설정 ======================== -->
	
	
	<!-- 2번호출)루트 context 접근 -->
	<context-param>
		<param-name>contextConfigLocation</param-name>
		<param-value>classpath*:config/spring/context/context-*.xml</param-value>	
		<!-- #실행시킬 root context를 변경시킴 
		context-~.xml인 context를 순차적으로 실행한다 -> datasource생성, mybatis생성, service생성, dao생성-->
	</context-param>
	
	<!-- 1번호출)contextLoaderListener 실행 -->
	<listener>
		<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
	</listener>

	<!-- 3. 서블릿 설정. Spring에 내장된 DispatcherServlet을 호출. 이는 servlet-context.xml을 참조. -->
	<servlet>
		<servlet-name>appServlet</servlet-name>
		<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
		<init-param>
			<param-name>contextConfigLocation</param-name>
			<param-value>classpath:config/spring/mvc/servlet-context.xml</param-value> <!-- 변경 -->
		</init-param>
		<load-on-startup>1</load-on-startup>
	</servlet> 
		
	<servlet-mapping>
		<servlet-name>appServlet</servlet-name>
		<url-pattern>/</url-pattern>
	</servlet-mapping>
```

### 1-2. JDBC 모듈 설정
![패키지 구성](/Spring_Framework/note_img/26_img1_project.jpg)
다음은 JDBC를 위한 프로젝트를 구성한 것이다.
- db.properties
	* 드라이버와 같은 DB 접속과 관련된 정보를 기재해 둔 곳. 접속 시 파일의 내용을 읽어온다.
- mybatis.config
	* MyBatis사용을 위한 설정을 하는 설정파일
- context-1-datasource
	* DB 접속과 관련된 정보를 가진 설정파일
- context-2-mybatis
	* datasource와 mybatis.config를 참조하여 sqlSessionFactory를 생성하는 설정파일
- context-3-dao
	* DAO Bean을 생성하는 설정파일
- context-4-service
	* Service Bean을 생성하는 설정파일
- mapper
	* MyBatis를 통해 트랜잭션시 SQL 쿼리문을 명령어 형태로 매핑시키는 곳

#### 1-2-1. db.properties

DB 접속과 관련된 설정 프로퍼티이다. 오라클, mySql등 driver를 명시하고 접속할 user과 password를 기재한다.
```
	driver=oracle.jdbc.OracleDriver
	url=jdbc:oracle:thin:@localhost:1521:xe
	user=test2
	password=1111
```
#### 1-2-2. mybatis.config

MyBatis 사용과 관련된 설정을 하는 xml이다. 이 곳에서 sql문과 관련된 설정, 자료형 설정, mapper 설정들을 포함시킨다.   
mapper는 반드시 존재해야 하며 이 설정이 있어야 매핑을 통한 데이터 트랜잭션이 가능해진다.

```
<configuration>
	<settings>
		<setting name="cacheEnabled" value="false" />
		<setting name="useGeneratedKeys" value="true" />
		<setting name="defaultExecutorType" value="REUSE" />
	</settings>
	
	<typeAliases>
		<typeAlias type="vo.MemoVO" alias="memo"/>
	</typeAliases>
	<!-- 참조할 mapper들을 기재한다. -->
	<mappers>
		<mapper resource="config/mybatis/mapper/memo.xml" />
	</mappers>
</configuration>
```

#### 1-2-3. datasource

property-placeholder 엘리먼트는 db.properties파일에서 프로퍼티를 로드하여 xml파일의 빈 정의에 사용할 수 있도록 한다. dataSource빈은 데이터 소스로의 연결을 생성하는 팩토리 역할을 한다. BasicDataSource 클래스는 dataSource 인터페이스를 구현한 클래스로 연결 풀링 기능을 지원한다. DB 연결이 끝난 후 빈 인스턴스를 제거할 때 풀에 있는 연결도 모두 닫아주는 역할을 한다.
```
	<!-- db.properties 참조  -->
	<context:property-placeholder location="classpath:config/mybatis/db.properties"/>	
	
	<!-- DB연결객체(DBCP) 생성 -->
	<bean id="ds" class="org.apache.commons.dbcp.BasicDataSource">
		<property name="driverClassName" value="${driver}"></property>	<!-- 객체의 driverClassName에 db.properties의 driver를 set-->
		<property name="url" value="${url}"></property>
		<property name="username" value="${user}"></property>
		<property name="password" value="${password}"></property>
		<property name="maxActive" value="20"></property>	<!-- DB 동시접속인원 -->
	</bean>
```

#### 1-2-4. context-mybatis
앞에서 명시한 datasource를 프로퍼티와 mybatis-config 설정파일에서 명시된 설정과 mapper들의 정의를 가져와 SqlSessionFactoryBean을 생성한다. 이를 스프링에서 지원하는 sqlSessionTemplet의 생성자로 넘겨 템플릿을 생성한다. 이를 통해 템플릿을 이용하여 DB와의 상호작용을 원활히 할 수 있다.
```
	<!-- Factory 생성-->
	<bean id="factoryBean" class="org.mybatis.spring.SqlSessionFactoryBean">
		<property name="dataSource" ref="ds"></property>
		<property name="configLocation" value="classpath:config/mybatis/mybatis-config.xml"></property>
	</bean>	
	
	<!-- 스프링의 Sql Session 템플릿 생성. 기본 생성자가 없음. -->
	<bean id="sqlSessionBean" class="org.mybatis.spring.SqlSessionTemplate">
		<constructor-arg ref="factoryBean"></constructor-arg>
	</bean>
```

#### 1-2-5. mapper
MyBatis를 통해 트랜잭션시 SQL 쿼리문을 명령어 형태로 매핑시키는 곳. namespace에 mapper의 이름을 기재하고 id를 통해 쿼리문 수행 시 사용할 명령어 형태로 매핑시킨다.
```
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="memo_mapper">
	<select id="select_list" resultType="vo.MemoVO">
		select * from memo
	</select>

	<insert id="insert_one" parameterType="vo.MemoVO">
		insert into memo values(memo_idx.nextVal, #{name}, #{content})
	</insert>
</mapper>
```
---------------------

## 2. MyBatis를 이용한 DBMS
앞에서 JDBC를 통해서 DB에 대한 연결, 해제, 커넥션 풀 처리, 트랜잭션 처리를 원활하게 되도록 설정해두었다. 이제 MyBatis를 통해 DB와의 상호작용을 해보자.   
이전에 JSP에서 MyBatis를 사용했던 것과 유사하다.

다음은 Dao 클래스이다. sqlSession을 @Autowired를 통해 받는다. 이 sqlSession은 context-mybatis에서 생성된 sqlSessionTemplet이다.   
템플릿 메서드로 적합한 쿼리 유형을 선택한 후 파라미터로 mapper의 namespace.(쿼리문id)에 해당하는 매핑 정보와 상호작용할 파라미터를 넘겨준다. select시 여러개의 컬럼이 검색될 경우 List의 형태로 반환된다.
```
public class MemoDAOImpl implements MemoDAO {
	@Autowired
	SqlSession sqlSession;

	@Override
	public List<MemoVO> select_list(){
		List<MemoVO> list = null;
		list = sqlSession.selectList("memo_mapper.select_list");
		return list;
	}

	@Override
	public void insert(MemoVO vo) {
		sqlSession.insert("memo_mapper.insert_one", vo);		
	}
}
```

다음 매퍼에서 select 등 컬럼을 반환받을 때 사용하는 resultType에는 반환받을 클래스 형태를 선택한다. VO의 멤버변수 이름과 DB 컬럼명이 일치하면 자동으로 매칭되어 해당 클래스로 저장된다.   
 parameterType으로는 insert 등 데이터를 애플리케이션에서 받아야 할 때 클래스를 명시한다.
 #{}를 통해 클래스의 멤버변수를 사용할 수 있다. 
```
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="memo_mapper">
	<select id="select_list" resultType="vo.MemoVO">
		select * from memo
	</select>

	<insert id="insert_one" parameterType="vo.MemoVO">
		insert into memo values(memo_idx.nextVal, #{name}, #{content})
	</insert>
</mapper>
```

앞에서 JDBC 설정을 마쳤다면 이 과정만으로 간단하게 데이터베이스와의 상호작용이 가능해진다.
