package dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import service.MyBatisConnector;
import vo.BoardVO;

public class BoardDAO {
	// single-ton pattern: 
	// 객체1개만생성해서 지속적으로 서비스하자
	static BoardDAO single = null;

	public static BoardDAO getInstance() {
		//생성되지 않았으면 생성
		if (single == null)
			single = new BoardDAO();
		//생성된 객체정보를 반환
		return single;
	}
	
	SqlSessionFactory factory;
	public BoardDAO() {
		
		factory = MyBatisConnector.getInstance().getSqlSessionFactory();
		
	}
	
	//전체게시물 조회
	public List<BoardVO> selectList(){
		List<BoardVO> list = null;
		
		SqlSession sqlSession = factory.openSession();
		list = sqlSession.selectList("b.board_list");
		sqlSession.close();
		
		return list;
	}
	
	//새 글 추가
	public int insert( BoardVO vo ) {
		
		SqlSession sqlSession = factory.openSession(true);
		int res = sqlSession.insert("b.board_insert", vo);
		sqlSession.close();
		return res;
		
	}

	//게시글 한 건 상세보기
	public BoardVO selectOne( int idx ) {
		//b.board_one을 통해 상세보기 쿼리 실행
		SqlSession sqlSession = factory.openSession();
		BoardVO vo = sqlSession.selectOne("b.board_one", idx);
		sqlSession.close();
		return vo;
		
	}
	
	//조회수 증가
	public int update_readhit( int idx ) {
		
		SqlSession sqlSession = factory.openSession( true );
		int res = sqlSession.update("b.board_update_readhit", idx);
		sqlSession.close();
		return res;
		
	}
	
	//기준글의 step값 증가
	public int update_step( BoardVO baseVO ) {
		SqlSession sqlSession = factory.openSession(true);
		int res = sqlSession.update("b.board_update_step", baseVO);
		sqlSession.close();
		return res;
	}
	
	//댓글위치 선정(댓글, 대댓글 달기)
	public int reply( BoardVO vo ) {
		SqlSession sqlSession = factory.openSession(true);
		int res = sqlSession.insert("b.board_reply", vo);
		sqlSession.close();
		return res;
	}
	
	//삭제를 위한 게시글 정보 얻어오기
	public BoardVO selectOne( int idx, String pwd ) {
		
		SqlSession sqlSession = factory.openSession();
		Map<String, Object> map = new HashMap<>();
		map.put("idx", idx);
		map.put("pwd", pwd);
		BoardVO vo = sqlSession.selectOne("b.board_idx_pwd", map);
		sqlSession.close();
		return vo;
		
	}
	
	//게시글 삭제(된 것 처럼 업데이트)
	public int del_update( BoardVO baseVO ) {
		
		SqlSession sqlSession = factory.openSession( true );
		int res = sqlSession.update("b.board_del_update", baseVO);
		sqlSession.close();
		return res;
		
	}
	
	//페이징을 포함한 게시글 목록 출력
	public List<BoardVO> selectList(Map<String, Integer> map){
		SqlSession sqlSession = factory.openSession();
		List<BoardVO> list = sqlSession.selectList("b.board_list_paging", map);
		sqlSession.close();
		return list;
	}
	
	//전체 게시물 수 구하기
	public int getRowTotal() {
		SqlSession sqlSession = factory.openSession();
		int count = sqlSession.selectOne("b.board_count");
		sqlSession.close();
		return count;
	}
	
}





















