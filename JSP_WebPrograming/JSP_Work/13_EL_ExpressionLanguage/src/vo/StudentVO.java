package vo;

import java.util.ArrayList;

public class StudentVO {
	private ArrayList<String> cur_subject;
	private PersonVO person_vo;
	public ArrayList<String> getCur_subject() {
		return cur_subject;
	}
	public StudentVO(ArrayList<String> list, PersonVO vo) {
		this.cur_subject = list;
		this.person_vo = vo;
	}
	public void setCur_subject(ArrayList<String> cur_subject) {
		this.cur_subject = cur_subject;
	}
	public PersonVO getPerson_vo() {
		return person_vo;
	}
	public void setPerson_vo(PersonVO person_vo) {
		this.person_vo = person_vo;
	}

	
}
