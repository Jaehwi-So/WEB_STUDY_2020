package dao;

import java.util.List;

public interface PersonDao {
	List<String> selectList();//read
	public void setMember_val(String member_val);
} 
