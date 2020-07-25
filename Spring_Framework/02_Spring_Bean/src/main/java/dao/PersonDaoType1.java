package dao;

import java.util.ArrayList;
import java.util.List;

public class PersonDaoType1 implements PersonDao {

	@Override
	public List<String> selectList() {
		List<String> list = new ArrayList<String>();
		list.add("selectList() type1");
		return list;
	}

}
