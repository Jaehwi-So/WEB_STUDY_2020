package dao;

import java.util.ArrayList;
import java.util.List;

import vo.MemoVO;

public class MemoDAOImpl implements MemoDAO {
	
	public List<MemoVO> select_list(){
		List<MemoVO> list = new ArrayList<MemoVO>();
		MemoVO vo = new MemoVO();
		//DB에서 정보를 가져왔다고 가정
		vo.setName("sample name1");
		vo.setContent("sample content1");
		MemoVO vo2 = new MemoVO();
		vo2.setName("sample name2");
		vo2.setContent("sample content2");
		list.add(vo);
		list.add(vo2);
		return list;
	}
}
