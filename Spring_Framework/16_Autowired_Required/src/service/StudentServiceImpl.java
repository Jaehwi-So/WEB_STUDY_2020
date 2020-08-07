package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import vo.StudentVO;

public class StudentServiceImpl implements StudentService{
	
	@Autowired(required = false)
	@Qualifier("studentBean2")
	private StudentVO student;
	
	@Override
	public void setStudent(StudentVO student) {
		this.student = student;
	}
	@Override
	public String getInfo() {
		if(student == null) {
			return "학생이 존재하지 않습니다";
		}
		else {
			return "이름 : " + student.getName() + "/ 나이 : " + student.getAge();
		}
	}

}
