package action;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.CartDAO;
import vo.CartVO;

/**
 * Servlet implementation class CartInsertAction
 */
@WebServlet("/shop/cart_insert.do")
public class CartInsertAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int p_idx = Integer.parseInt(request.getParameter("p_idx"));
		int m_idx = Integer.parseInt(request.getParameter("m_idx"));
		
		//장바구니에 상품등록을 하기 위한 vo
		CartVO vo = new CartVO();
		vo.setP_idx(p_idx);
		vo.setM_idx(m_idx);
		
		//이미 장바구니에 등록된 상품인지 확인
		CartVO res_vo = CartDAO.getInstance().selectOne(vo);
		
		String result = "no";
		if( res_vo == null ) {//장바구니에 상품추가가 가능한 상태
			result = "yes";
			
			//장바구니에 상품등록
			CartDAO.getInstance().insert(vo);
		}
		
		//Json형식으로 콜백메서드로 전송
		String resultStr = String.format("[{'res':'%s'}]", result);
		response.getWriter().println(resultStr);
		
	}

}













