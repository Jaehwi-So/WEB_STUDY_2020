package service;

import java.util.ArrayList;
import java.util.List;

import dao.MemoDAO;
import vo.MemoVO;


public class MemoServiceImpl implements MemoService {
	private MemoDAO memo_dao;
	public void setMemo_dao(MemoDAO memo_dao) {
		this.memo_dao = memo_dao;
	}
	
	@Override
	public List<MemoVO> get_memo_list(){
		List<MemoVO> list = memo_dao.select_list();
		return list;
	}
	
	@Override
	public void insert_memo(MemoVO vo) {
		memo_dao.insert(vo);
	}
}
