package service;

import org.springframework.beans.factory.annotation.Autowired;

public class InfoService {
	StudentService service;
	
	//Autowired를 통해 컨테이너가 객체를 생성하며 자동으로 Bean을 주입한다.
	@Autowired	
	public void setService(StudentService service) {
		this.service = service;
	}
	public String getInfo() {
		return service.getInfo();
	}
}
