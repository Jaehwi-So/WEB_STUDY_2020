package dao;

public class PersonDaoInstanceFactory {
	
	public PersonDaoInstanceFactory() {
		System.out.println("factory 생성");
	}	//클래스가 인스턴스 팩토리 메서드를 정의한다면 public 생성자가 필요하다.
	//이를 통해 스프링 컨테이너가 해당 클래스의 인스턴스를 생성 가능하다.
	
	public PersonDao getPersonDao(String daoType) { 
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
