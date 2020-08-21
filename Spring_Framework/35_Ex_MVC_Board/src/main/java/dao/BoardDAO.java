package dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import vo.BoardVO;

public class BoardDAO {
	
	SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//전체게시물 조회
	public List<BoardVO> selectList(){
		List<BoardVO> list = null;
		list = sqlSession.selectList("b.board_list");
		return list;
	}
	
	//새글 등록
	public int insert( BoardVO vo ) {	
		int cnt = sqlSession.insert("b.board_insert", vo);
		return cnt;
	}
	
	//게시글 한 건 상세보기
	public BoardVO selectOne( int idx ) {
		//b.board_one을 통해 상세보기 쿼리 실행
		BoardVO vo = null;		
		vo = sqlSession.selectOne("b.board_one", idx);
		return vo;
		
	}
	
	//조회수 증가
	public int update_readhit( int idx ) {		
		int res = sqlSession.update("b.board_update_readhit", idx);
		return res;
	}
	
	//기준글의 step값 증가
	public int update_step( BoardVO baseVO ) {
		int res = sqlSession.update("b.board_update_step", baseVO);	
		return res;
	}
	
	//댓글 위치 선정(댓글, 대댓글 달기)
	public int reply( BoardVO vo ) {	
		int res = sqlSession.insert("b.board_reply", vo);
		return res;
	}
	
	//삭제를 위한 게시글 정보 얻어오기
	public BoardVO selectOne( int idx, String pwd ) {	
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("idx", idx);
		map.put("pwd", pwd);
		BoardVO vo = sqlSession.selectOne("b.board_idx_pwd", map);
		return vo;
		
	}
	
	//게시글 삭제(된 것 처럼 업데이트)
	public int del_update( BoardVO baseVO ) {	
		int res = sqlSession.update("b.board_del_update", baseVO);
		return res;
		
	}
	
	//페이징을 포함한 게시글 목록 출력
	public List<BoardVO> selectList(Map<String, Integer> map){
		List<BoardVO> list = sqlSession.selectList("b.board_list_paging", map);
		return list;
	}
	
	//전체 게시물 수 구하기
	public int getRowTotal() {
		int count = sqlSession.selectOne("b.board_count");
		return count;
	}
	

}
