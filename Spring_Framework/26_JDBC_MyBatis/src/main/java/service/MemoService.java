package service;

import java.util.List;

import dao.MemoDAO;
import vo.MemoVO;

public interface MemoService {
	public void setMemo_dao(MemoDAO memo_dao);
	public List<MemoVO> get_memo_list();
	public void insert_memo(MemoVO vo);
}
