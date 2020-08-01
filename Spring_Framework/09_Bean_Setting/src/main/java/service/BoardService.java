package service;

import java.util.List;

import dao.BoardDAO;

public interface BoardService {
	
	public void setDao(BoardDAO dao);
	public void setMessage(String message);
	public List<String> selectList();
}
