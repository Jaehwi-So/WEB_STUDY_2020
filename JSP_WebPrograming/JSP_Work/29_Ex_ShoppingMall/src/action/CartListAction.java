package action;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.CartDAO;
import vo.CartVO;

/**
 * Servlet implementation class CartListAction
 */
@WebServlet("/shop/cart_list.do")
public class CartListAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		//가입된 회원 한명(m_idx : 1번)이라고 가정
		int m_idx = 1;
		
		//장바구니 목록 조회
		List<CartVO> list = CartDAO.getInstance().select(m_idx);
		
		//장바구니 상품의 총계
		int total_amount = CartDAO.getInstance().selectTotalAmount(m_idx);
		int sale_amount = CartDAO.getInstance().selectSaleAmount(m_idx);
		
		request.setAttribute("total_amount", total_amount);
		request.setAttribute("sale_amount", sale_amount);
		request.setAttribute("list", list);
		
		RequestDispatcher disp = 
				request.getRequestDispatcher("cartList.jsp");
		disp.forward(request, response);
		
	}

}












