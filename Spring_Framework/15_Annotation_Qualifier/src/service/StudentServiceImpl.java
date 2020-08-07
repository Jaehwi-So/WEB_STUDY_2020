package service;

import vo.StudentVO;

public class StudentServiceImpl implements StudentService{
	private StudentVO student;
	@Override
	public void setStudent(StudentVO student) {
		this.student = student;
	}
	@Override
	public String getInfo() {
		return "이름 : " + student.getName() + "/ 나이 : " + student.getAge();
	}

}
