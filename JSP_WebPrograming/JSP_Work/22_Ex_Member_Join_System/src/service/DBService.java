package service;

import java.sql.Connection;

import javax.naming.InitialContext;
import javax.sql.DataSource;

public class DBService {
	
	// single-ton pattern: 
	// 객체1개만생성해서 지속적으로 서비스하자
	static DBService single = null;

	public static DBService getInstance() {
		//생성되지 않았으면 생성
		if (single == null)
			single = new DBService();
		//생성된 객체정보를 반환
		return single;
	}
	
	
	DataSource ds;
	public DBService() {
		
		try {
			
			InitialContext ic = new InitialContext();
			ds = (DataSource)ic.lookup("java:comp/env/jdbc/oracle_test");
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		
	}
	
	//DB접속
	public Connection getConnection() {
		Connection conn = null;
		
		try {
			
			conn = ds.getConnection();
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		return conn;
		
	}
	
	
}















