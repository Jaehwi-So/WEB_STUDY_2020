package service;

import java.util.List;


//PersonServiceTemplet의 자식 클래스. Template의 요소를 상속받을 수 있음
public class PersonServiceImpl extends PersonServiceTemplate implements PersonService{
	public String message;

	@Override
	public void setMessage(String message) {
		this.message = message;
		
	}
	@Override
	public List<String> selectList() {
		List<String> list = dao.selectList(serviceType);
		list.add(message);
		return list;
	}

}
