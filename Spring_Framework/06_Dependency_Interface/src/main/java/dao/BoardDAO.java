package dao;

import java.util.List;

public interface BoardDAO {

	int insert( Object obj );//create
	List<String> selectList();//read
	int update( Object obj );//update
	int delete( int idx );//delete

}













