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
 * Servlet implementation class CartDelAction
 */
@WebServlet("/shop/cart_delete.do")
public class CartDelAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		int c_idx = Integer.parseInt(request.getParameter("c_idx"));
		int m_idx = 1;
		
		//삭제쿼리 수행
		CartDAO.getInstance().delete_cart( c_idx, m_idx );
		
		List<CartVO> list = CartDAO.getInstance().select(m_idx);
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











