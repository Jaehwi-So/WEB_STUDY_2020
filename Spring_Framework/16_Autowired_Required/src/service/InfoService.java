package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class InfoService {
	StudentService service;
	
	public void setService(StudentService service) {
		this.service = service;
	}
	public String getInfo() {
		return service.getInfo();
	}
}
