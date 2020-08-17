package dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import vo.MemoVO;

public class MemoDAOImpl implements MemoDAO {
	@Autowired
	SqlSession sqlSession;

	@Override
	public List<MemoVO> select_list(){
		List<MemoVO> list = null;
		list = sqlSession.selectList("memo_mapper.select_list");
		return list;
	}

	@Override
	public void insert(MemoVO vo) {
		sqlSession.insert("memo_mapper.insert_one", vo);
		
	}
}
