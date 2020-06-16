package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import service.DBService;
import vo.DeptVO;
/*
 * # Model
 * DAO, VO, Service와 같은 로직 처리를 위한 클래스와 bean들을 모델로 사용한다.
 * Service에서 DB와의 연동 로직을 처리하며
 * DAO에서 SQL 명령을 수행한다.
 */
public class DeptDAO {

	static DeptDAO single = null;
	
	//DAO 또한 한번 생성해두면 지속적으로 사용 가능하므로 single-ton으로 만든다.
	public static DeptDAO getInstance() {
		if (single == null)
			single = new DeptDAO();
		return single;
	}
	
	//DB에서 리스트를 얻어 옴(select)
	public List<DeptVO> select_list(){
		List<DeptVO> list = new ArrayList<DeptVO>();
		Connection conn = null;	//Service에서 얻는 Connection
		PreparedStatement pstmt = null;	//명령처리객체 정보
		ResultSet rs = null;	//결과행 처리객체
		String sql = "SELECT * FROM DEPT";

		try {
			//1.Connection얻어온다
			conn = DBService.getInstance().getConnection();
			//2.명령처리객체정보를 얻어오기
			pstmt = conn.prepareStatement(sql);
			//3.결과행 처리객체 얻어오기
			rs = pstmt.executeQuery();

			while (rs.next()) {
				DeptVO vo = new DeptVO();
				
				//현재레코드값=>Vo저장
				vo.setDeptno(rs.getInt("deptno"));
				vo.setDname(rs.getString("dname"));
				vo.setLoc(rs.getString("loc"));
				
				//ArrayList추가
				list.add(vo);
			}

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {

			try {
				if (rs != null)
					rs.close();
				if (pstmt != null)
					pstmt.close();
				if (conn != null)
					conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return list;
	}
}
