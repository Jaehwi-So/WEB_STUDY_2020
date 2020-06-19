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
 * Servlet implementation class CartUpdateAction
 */
@WebServlet("/shop/cart_update.do")
public class CartUpdateAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int c_idx = Integer.parseInt(request.getParameter("c_idx"));
		int c_cnt = Integer.parseInt(request.getParameter("c_cnt"));
		int m_idx = 1;//회원번호 1번으로 가정
		
		//장바구니 수량 업데이트
		CartDAO.getInstance().update_cnt(c_idx, c_cnt, m_idx);
		
		//장바구니 목록 갱신
		List<CartVO> list = CartDAO.getInstance().select(m_idx);
		
		//장바구니 상품의 총 가격 갱신
		int total_amount = CartDAO.getInstance().selectTotalAmount(m_idx);
		int sale_amount = CartDAO.getInstance().selectSaleAmount(m_idx);
		
		request.setAttribute("list", list);
		request.setAttribute("total_amount", total_amount);
		request.setAttribute("sale_amount", sale_amount);
		
		RequestDispatcher disp = 
				request.getRequestDispatcher("cartList.jsp");
		disp.forward(request, response);
		
	}

}














































