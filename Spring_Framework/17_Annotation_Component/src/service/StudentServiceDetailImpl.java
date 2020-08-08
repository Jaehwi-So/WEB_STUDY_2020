package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import vo.StudentVO;

//@Component 뒤 소괄호에 생성되는 객체의 id에 해당하는 별칭을 지정할 수 있다.
@Component("studentServiceBean")
public class StudentServiceDetailImpl implements StudentService{
	
	@Autowired
	private StudentVO student;
	
	@Override
	public void setStudent(StudentVO student) {
		this.student = student;
	}
	@Override
	public String getInfo() {
		return "이름 : " + student.getName() + "/ 나이 : " + student.getAge() + "/ 주민번호 : " + student.getPersonalNumber();
	}

}
