package dao;

import java.util.ArrayList;
import java.util.List;

public class PersonDaoType2 implements PersonDao {
	public String member_val; 
	public PersonDaoType2() {
		System.out.println("peosonDao_type2 생성");
	}
	public void setMember_val(String member_val) {
		this.member_val = member_val;
	}
	@Override
	public List<String> selectList() {
		List<String> list = new ArrayList<String>();
		list.add("selectList() type2");
		return list;
	}
}
