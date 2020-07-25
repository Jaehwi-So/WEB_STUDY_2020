package dao;

import java.util.ArrayList;
import java.util.List;

//ServiceImpl에 BoardDaoImple, VisitDaoImple등을 모아서 관리한다.

public class BoardDaoImpl implements BoardDAO{

	@Override
	public int insert(Object obj) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<String> selectList() {
		//DB에서 정보를 가지고 왔다고 가정
		List<String> list = new ArrayList<String>();
		list.add("사과");
		list.add("수박");
		list.add("참외");
		list.add("복숭아");
		return list;
	}

	@Override
	public int update(Object obj) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(int idx) {
		// TODO Auto-generated method stub
		return 0;
	}

}
