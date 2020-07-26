package dao;

import java.util.ArrayList;
import java.util.List;

public class PersonDaoImpl implements PersonDAO{

	@Override 
	public List<String> selectList(String serviceType) {
		//DB에서 정보를 가지고 왔다고 가정
		List<String> list = new ArrayList<String>();
		if(serviceType.equals("person")) {
			list.add("kim");
			list.add("lee");
			list.add("park");
		}
		return list;
	}

}
