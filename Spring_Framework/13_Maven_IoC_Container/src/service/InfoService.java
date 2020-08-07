package service;

public class InfoService {
	StudentService service;
	public void setService(StudentService service) {
		this.service = service;
	}
	public String getInfo() {
		return service.getInfo();
	}
}
