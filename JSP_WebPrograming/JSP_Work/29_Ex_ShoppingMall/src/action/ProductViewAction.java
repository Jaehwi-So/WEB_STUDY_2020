package action;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.ProductDAO;
import vo.ProductVO;

/**
 * Servlet implementation class ProductViewAction
 */
@WebServlet("/shop/view.do")
public class ProductViewAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//view.do?idx=21
		int idx = Integer.parseInt(request.getParameter("idx"));
		
		//파라미터로 받은 idx에 해당하는 상품정보를 가져오기
		ProductVO vo = ProductDAO.getInstance().selectOne(idx);
		
		//vo를 바인딩
		request.setAttribute("vo", vo);
		
		RequestDispatcher disp = 
				request.getRequestDispatcher("product_content.jsp");
		disp.forward(request, response);
		
	}

}













