package dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import service.MyBatisConnector;
import vo.GogekVO;

public class GogekDAO {
	
	static GogekDAO single = null;

	public static GogekDAO getInstance() {
		//생성되지 않았으면 생성
		if (single == null)
			single = new GogekDAO();
		//생성된 객체정보를 반환
		return single;
	}
	
	SqlSessionFactory factory = null;
	public GogekDAO() {
		factory = MyBatisConnector.getInstance().getSqlSessionFactory();
		
	}
	
	public List<GogekVO> select_gogek(){
		SqlSession sqlSession = factory.openSession();
		List<GogekVO> list = sqlSession.selectList("gogek.gogek_select");	
		//mapper의 gogek별칭으로 접근, gogek_select라는 id를 가진 query문 수행
		
		sqlSession.close();	//세션은 반드시 닫아준다.
		return list;
	}

}
