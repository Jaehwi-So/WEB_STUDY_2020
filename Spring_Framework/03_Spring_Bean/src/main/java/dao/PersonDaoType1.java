package dao;

import java.util.ArrayList;
import java.util.List;

public class PersonDaoType1 implements PersonDao {
	public String member_val; 
	public PersonDaoType1() {
		System.out.println("peosonDao_type1 생성");
	}
	public void setMember_val(String member_val) {
		this.member_val = member_val;
	}
	@Override
	public List<String> selectList() {
		List<String> list = new ArrayList<String>();
		list.add("selectList() type1");
		return list;
	}

}
