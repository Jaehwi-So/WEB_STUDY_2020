package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import vo.StudentVO;

//@Component 뒤 소괄호에 생성되는 객체의 id에 해당하는 별칭을 지정할 수 있다.
@Service("studentServiceDetailBean")
public class StudentServiceImpl implements StudentService{
	
	@Autowired
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
