package service;

import java.util.List;

import dao.BoardDAO;
import dao.PersonDAO;

public interface PersonService {
	public void setMessage(String message);
	public List<String> selectList();
	public void setDao(PersonDAO dao);
	public void setServiceType(String serviceType);
}
