package service;

import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class MyBatisConnector {
	// single-ton pattern: 
	// 객체1개만생성해서 지속적으로 서비스하자
	static MyBatisConnector single = null;

	public static MyBatisConnector getInstance() {
		//생성되지 않았으면 생성
		if (single == null)
			single = new MyBatisConnector();
		//생성된 객체정보를 반환
		return single;
	}
	
	SqlSessionFactory factory = null;
	
	//생성자
	public MyBatisConnector() {
		try {	
			Reader reader = Resources.getResourceAsReader(	//resources는 org.apache.ibatis에있는것으로 import
					"config/mybatis/sqlMapConfig.xml");
			factory = new SqlSessionFactoryBuilder().build(reader);	//Mapper로 접근을 가능하게 하는 factory.
			reader.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	public SqlSessionFactory getSqlSessionFactory() {
		return factory;
	}
}
