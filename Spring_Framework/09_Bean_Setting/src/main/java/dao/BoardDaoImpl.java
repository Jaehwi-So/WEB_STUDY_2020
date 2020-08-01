package dao;

import java.util.ArrayList;
import java.util.List;

//ServiceImpl에 BoardDaoImple, VisitDaoImple등을 모아서 관리한다.

public class BoardDaoImpl implements BoardDAO{
	public String dao_message;
	public BoardDaoImpl() {};
	public BoardDaoImpl(String dao_message) {
		this.dao_message = dao_message;
	};
	
	@Override 
	public List<String> selectList() {
		//DB에서 정보를 가지고 왔다고 가정
		List<String> list = new ArrayList<String>();
		list.add(dao_message);
		list.add("hello world 1");
		list.add("hello world 2");
		return list;
	}

}
