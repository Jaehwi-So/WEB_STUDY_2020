package dao;

import java.util.List;

import vo.MemoVO;

public interface MemoDAO {
	public List<MemoVO> select_list();
	public void insert(MemoVO vo);
}
