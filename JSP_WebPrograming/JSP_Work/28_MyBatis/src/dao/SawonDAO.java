package dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import service.MyBatisConnector;
import vo.SawonVO;

public class SawonDAO {
	//싱글톤 패턴
	static SawonDAO single = null;

	//DAO는 단 한개만 생성(싱글톤생성)하면 된다.
	public static SawonDAO getInstance() {
		//생성되지 않았으면 생성
		if (single == null)
			single = new SawonDAO();
		//생성된 객체정보를 반환
		return single;
	}
	
	//생성자 추가
	SqlSessionFactory factory = null;
	public SawonDAO() {
		factory = MyBatisConnector.getInstance().getSqlSessionFactory();	
		//DB접근을 가능하게 Mapper통로를 열어주는 factory.
	}
	
	//사원 목록 가져오기
	public List<SawonVO> select(){
		List<SawonVO> list = null;
		//mapper로 접근해 쿼리문을 입력하기 위한 sqlSession 객체.
		SqlSession sqlSession = factory.openSession();
		list = sqlSession.selectList("sawon.sawon_list");	//sawon별칭의 mapper로 들어가서 sawon_list라는 id를 가진 select문 수행.
		
		sqlSession.close(); //DB사용후 반드시 세션을 닫아주자!
		return list;
	}
}
