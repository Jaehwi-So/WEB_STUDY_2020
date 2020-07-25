package dao;

public class PersonDaoFactory {
	
	private PersonDaoFactory() {}	
	
	public static PersonDao getPersonDao(String daoType) { 
		PersonDao dao = null;
		//빈에서 주입한 파라미터에 따라 Factory에서 dao의 유형을 다르게 생성한다.
		if("type1".equals(daoType)) {
			dao = new PersonDaoType1();
		}
		else if("type2".equals(daoType)) {
			dao = new PersonDaoType2();
		}
		return dao;
	}
}
