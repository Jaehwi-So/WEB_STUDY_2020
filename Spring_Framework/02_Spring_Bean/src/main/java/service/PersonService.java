package service;

import java.util.List;

import dao.PersonDao;

public class PersonService {
	PersonDao personDAO;
	public void setPersonDAO(PersonDao dao) {
		this.personDAO = dao;
	}
	
	public List<String> selectDB(){
		List<String> list = personDAO.selectList();
		return list;
	}
}
