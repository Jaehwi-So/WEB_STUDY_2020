package dao;

import java.util.ArrayList;
import java.util.List;

//ServiceImpl에 BoardDaoImple, VisitDaoImple등을 모아서 관리한다.

public class BoardDaoImpl implements BoardDAO{

	@Override 
	public List<String> selectList(String serviceType) {
		//DB에서 정보를 가지고 왔다고 가정
		List<String> list = new ArrayList<String>();
		if(serviceType.equals("fruit")) {
			list.add("사과");
			list.add("수박");
			list.add("참외");
			list.add("복숭아");
		}
		return list;
	}

}
