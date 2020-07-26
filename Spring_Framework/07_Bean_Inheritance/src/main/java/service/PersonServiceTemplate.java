package service;

import dao.PersonDAO;

public class PersonServiceTemplate {
	public PersonDAO dao;
	public String serviceType;

	public void setDao(PersonDAO dao) {
		this.dao = dao;
	}
	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	} 
	
}
