package service;

import java.sql.Connection;

import javax.naming.InitialContext;
import javax.sql.DataSource;

public class DBService {
	
	// single-ton pattern: DB연동 객체는 단 한개만 생성해두면 계속 사용할 수 있으므로 객체를 한 개만 생성하여 지속적으로 서비스한다.
	static DBService single = null;
	public static DBService getInstance() {
		if (single == null)
			single = new DBService();
		return single;
	}
	
	
	DataSource ds;
	//생성자를 통해 DataSource 생성
	public DBService() {
		try {
			InitialContext ic = new InitialContext();
			ds = (DataSource)ic.lookup("java:comp/env/jdbc/oracle_test");
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	//호출 시 DB접속에 필요한 Connection 반환
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















