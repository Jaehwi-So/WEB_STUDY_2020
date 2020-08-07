package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class InfoService {
	//빈이 생성되기를 원하는 형식의 메서드를 골라서 Autowired의 위치를 지정하여 해당 방식으로 인스턴스를 생성할 수 있다.
	//Qualifier는 특정 빈의 id를 지정하여 같은 클래스의 인스턴스들이 여러 개 존재하더라도 구분할 수 있게 한다.
	
	//1)Autowired의 위치  
	//멤버변수에 바로 선언할 경우. 기본적으로 디폴트 생성자를 통해 빈이 주입되므로 기본 생성자가 필요하다.
	@Autowired
	@Qualifier("studentServiceDetailBean")	
	private StudentService service;
		
	//2)Autowired의 위치 
	//Info를 통해 빈이 주입되고 싶다면 다음과 같이 명시하면 된다. 
	//단 Qualifier의 경우 파라미터의 수가 많을 수 있으므로 다음과 같이 정의한다.
	
	/*
	 Autowired
	 public InfoService(	
	 		Qualifier("studentServiceDetailBean") StudentService service,
	 		Qualifier("exampleBean") ExampleCalss example) {
	 	this.service = service; 
	 	this.example = example;
	 }
	 */
	
	//3)Autowired의 위치 
	//Setter를 통해 빈이 주입되고 싶다면 다음과 같이 명시하면 된다.
	
	//@Autowired
	//@Qualifier("studentServiceDetailBean")	
	public void setService(StudentService service) {
		this.service = service;
	}
	
	public String getInfo() {
		return service.getInfo();
	}
}
