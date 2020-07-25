package dao;

import java.util.ArrayList;
import java.util.List;

public class PersonDaoType2 implements PersonDao {
	@Override
	public List<String> selectList() {
		List<String> list = new ArrayList<String>();
		list.add("selectList() type2");
		return list;
	}
}
