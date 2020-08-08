package vo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

//@Component Annotation을 통해서 스프링 컨테이너가 해당 클래스의 인스턴스를 생성하도록 명시한다.
//@Component 어노테이션은 용도에 따라서 별칭에 해당하는 자식 어노테이션이 존재한다.
//@Controller, @Service, @Repository에 해당하며 각각 MVC에서 Controller, Service, DAO에 해당한다.
//실험을 위해 VO에 Component를 달긴 했지만 스프링 MVC 프로젝트의 용도에는 맞지 않다고 볼 수 있다.
@Component
public class StudentVO {
	
	//@Value Annotation으로 초기값을 지정할 수 있다.
	@Value("Kim")
	private String name;
	@Value("23")
	private String age;
	@Value("990123-1098972")
	private String personalNumber;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getPersonalNumber() {
		return personalNumber;
	}
	public void setPersonalNumber(String personalNumber) {
		this.personalNumber = personalNumber;
	}
	
	
	
}
