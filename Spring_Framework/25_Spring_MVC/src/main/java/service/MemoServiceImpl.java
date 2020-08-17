package service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.MemoDAO;
import vo.MemoVO;

@Service("memo_serviceBean")
public class MemoServiceImpl implements MemoService {
	@Autowired
	private MemoDAO memo_dao;
	public void setMemo_dao(MemoDAO memo_dao) {
		this.memo_dao = memo_dao;
	}
	
	public List<MemoVO> get_memo_list(){
		List<MemoVO> list = memo_dao.select_list();
		return list;
	}
}
