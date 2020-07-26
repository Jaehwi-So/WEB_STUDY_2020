# Spring Bean
- [1. 스프링 빈 설정](#1-스프링-빈-설정)
  + [1-1. 스프링 빈 상속](#1-1-스프링-빈-상속)
  + [1-2. 빈에 Collection 타입 지정하기](#1-2-빈에-collection-타입-지정하기)

----------------------
### 1. 스프링 빈 설정

#### 1-1. 스프링 빈 상속
자바 클래스에서 자식 클래스가 부모 클래스를 상속받는 것과 마찬가지로 자바 빈에서도 빈끼리의 상속이 가능하다.  
주로 Bean들의 정의가 중복될 때 공통적인 속성을 모아 정의한 부모 Bean을 상속받는 형태로 쓰인다.

<b>추상 Bean</b> : 다른 Bean 정의의 부모 역할을 하는 Bean을 추상 Bean형태로 구현할 수 있다. 추상 Bean은 정의할 수 없는 형태로 프로퍼티나 생성자 인수로 주입은 불가능하다. 프로퍼티, 생성자 인수, 메서드 오버라이드, 초기화와 정리 메서드, 팩토리 메서드를 상속할 수 있다.

다음과 같이 abstract 속성이 true인 경우 추상 Bean이며 parent속성을 통해 부모 빈을 상속받는다.
```
	<bean id="serviceTemplate" abstract="true">
		<property name="dao" ref="dao"/>
		<property name="serviceType" value="fruit"/>
	</bean>
	
	<!-- serviceTemplate Bean의 정의를 상속받는 자식 Bean -->
	<bean id="serviceBean" class="service.BoardServiceImpl" parent="serviceTemplate">
		<property name="message" value="service1"></property> 
	</bean>		 
```

추상 Bean이 아닌 경우에도 상속할 수 있다.

다음과 같이 personService(자식 Bean)는 personServiceTemplet(부모 Bean)을 상속받는다. 이 경우 자식 Bean 클래스에서는 부모 Bean 클래스가 정의하고 있는 프로퍼티에 대한 setter 메서드를 반드시 정의해야 한다. 즉 service.PersonServiceImpl에 이를 정의하거나 service.PersonServiceImpl를 service.PersonServiceTemplate를 상속시켜 사용해야 한다.

```
	<bean id="person_dao" class="dao.PersonDaoImpl"></bean>
	
	<bean id="personServiceTemplet" class="service.PersonServiceTemplate">
		<property name="dao" ref="person_dao"></property>
		<property name="serviceType" value="person"></property>
	</bean>
	
	<bean id="personService" class="service.PersonServiceImpl" parent="personServiceTemplet">
		<property name="message" value="person-service"></property>
	</bean>
```
----------
#### 1-2. 빈에 Collection 타입 지정하기
빈의 Collection 타입의 프로퍼티나 생성자 인수를 설정하려면
property나 constructor-arg 엘리먼트의 &lt;list>, &lt;map>, &lt;set> 하위 엘리먼트를 각각 사용해야 한다.

다음은 Set타입을 프로퍼티나 생성자 인수로 주입시키는 경우이다. &lt;value>를 통해 원소를 지정할 수 있다.
```
	<!-- Set을 setter를 통해 주입시킨 mySetBean -->
	<bean id="mySetBean" class="ex.MySet">
		<property name="set">
			<set>
				<value>set1-1</value>
				<value>set1-2</value>
				<value>set1-3</value>
			</set>
		</property>
	</bean>
	
	<!-- Set을 생성자를 통해 주입시킨 mySetBean2 -->
	<bean id="mySetBean2" class="ex.MySet">
		<constructor-arg>
			<set>
				<value>set2-1</value>
				<value>set2-2</value>
				<value>set2-3</value>
			</set>
		</constructor-arg>
	</bean>
```

다음은 Map 타입을 프로퍼티로 주입시키는 경우이다.   
&lt;map>의 하위 엘리먼트로 &lt;entry>를 선언하여 그 안의 &lt;key>를 통해 key값을 설정하고 그에 따른 value를 설정할 수 있다.  
 컬렉션의 원소들은 &lt;ref bean="">을 통해 bean을 참조할 수 있으며 bean의 id또한 &lt;idref bean="">를 통해 참조 가능하다.   
 또한 &lt;null>을 통해 null로 설정또한 가능하다.
```
	<!-- 다음과 같이 컬렉션 타입에 빈 참조와 참조하는 빈의 id, null을 넣을 수 있다. -->
	<bean id="str1" class="java.lang.String"><constructor-arg value = "key1"></constructor-arg></bean>
	<bean id="str2" class="java.lang.String"><constructor-arg value = "value2"></constructor-arg></bean>
	<bean id="key3" class="java.lang.String"><constructor-arg value = "value3"></constructor-arg></bean>
	
	<bean id="myMapBean2" class="ex.MyMap">
		<property name="map">
			<map>
				<entry>
					<key><ref bean="str1"/></key>	<!-- 빈을 참조함 -->
					<value>value1</value>
				</entry>
				<entry>
					<key><value>key2</value></key>
					<ref bean="str2"/>	<!-- 빈을 참조함 -->
				</entry>
				<entry>
					<key><idref bean="key3"></idref></key>	<!-- <idref>를 통해 빈의 id를 참조함 -->
					<ref bean="key3"/>	<!-- 빈의 value를 참조함 -->
				</entry>
				<entry>
					<key><value>key3</value></key>
					<null/>	<!-- null 사용 -->
				</entry>
			</map>
		</property>
	</bean>
```