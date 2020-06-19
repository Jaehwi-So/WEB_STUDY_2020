package dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import service.MyBatisConnector;
import vo.CartVO;

public class CartDAO {

	// single-ton pattern: 
	// 객체1개만생성해서 지속적으로 서비스하자
	static CartDAO single = null;

	public static CartDAO getInstance() {
		//생성되지 않았으면 생성
		if (single == null)
			single = new CartDAO();
		//생성된 객체정보를 반환
		return single;
	}
	
	SqlSessionFactory factory;
	
	public CartDAO() {
		factory = MyBatisConnector.getInstance().getSqlSessionFactory();
	}
	
	public List<CartVO> select( int m_idx ) {
		List<CartVO> list = null;
		SqlSession sqlSession = factory.openSession();
		list = sqlSession.selectList("c.cart_list", m_idx );
		sqlSession.close();
		return list;
	}
	
	public int selectTotalAmount(int m_idx) {
		SqlSession sqlSession = factory.openSession();
		int total = sqlSession.selectOne("c.cart_total_amount", m_idx);
		sqlSession.close();
		return total;
		
	}
	
	public int selectSaleAmount(int m_idx) {
		SqlSession sqlSession = factory.openSession();
		int total = sqlSession.selectOne("c.cart_sale_amount", m_idx);
		sqlSession.close();
		return total;
		
	}
	
	//상품 번호와 상품 갯수, 유저번호를 파라미터로 받아 장바구니 수량을 업데이트 한다
	public int update_cnt(int c_idx, int c_cnt, int m_idx) {
		
		SqlSession sqlSession = factory.openSession(true);//오토커밋 insert, update, delete쓸때 주의
		
		//파라미터를 map으로 묶어서 저장
		Map<String, Integer> map = new HashMap<>();
		map.put("c_idx", c_idx);
		map.put("c_cnt", c_cnt);
		map.put("m_idx", m_idx);
		
		int res = sqlSession.update("c.cart_cnt_update", map);
		sqlSession.close();
		
		return res;
	}
	
	public int delete_cart(int c_idx, int m_idx) {
		SqlSession sqlSession = factory.openSession(true);//오토커밋 insert, update, delete쓸때 주의
		Map<String, Integer> map = new HashMap<>();
		map.put("c_idx", c_idx);
		map.put("m_idx", m_idx);
		int res = sqlSession.update("c.cart_delete", map);
		sqlSession.close();
		return res;
	}
	
	//장바구니에 중복된 상품이 있는지 검색
	public CartVO selectOne( CartVO vo ) {
		
		CartVO resVO = null;
		SqlSession sqlSession = factory.openSession();
		resVO = sqlSession.selectOne("c.cart_one", vo);
		sqlSession.close();
		return resVO;
		
	}
	
	//장바구니에 상품추가!
	public int insert( CartVO vo ) {
		
		SqlSession sqlSession = factory.openSession(true);
		int res = sqlSession.insert("c.cart_insert", vo);
		sqlSession.close();
		return res;
	}
	
}













