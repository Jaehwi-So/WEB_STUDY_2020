package dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import vo.VisitVO;

public class VisitDAO {
	SqlSession sqlSession;
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//방명록 조회
	public List<VisitVO> selectList(){
		List<VisitVO> list = sqlSession.selectList("visit.visit_list");
		return list;
	}
	
	//방명록 새 글 쓰기
	public int insert(VisitVO vo) {
		int res = sqlSession.insert("visit.visit_insert", vo);
		return res;
	}
	
	//방명록 글 지우기
	public int delete(int idx) {
		int res = sqlSession.delete("visit.visit_delete", idx);
		return res;
	}
	
	//수정을 위한 게시글 한 건 조회
	public VisitVO selectOne(int idx) {
		VisitVO vo = sqlSession.selectOne("visit.visit_one", idx);
		return vo;
	}
	
	//게시글 수정
	public int modify(VisitVO vo) {
		int res = sqlSession.update("visit.visit_update", vo);
		return res;
	}
}
