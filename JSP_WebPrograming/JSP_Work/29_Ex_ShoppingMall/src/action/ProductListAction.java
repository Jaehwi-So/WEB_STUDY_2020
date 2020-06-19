package action;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.ProductDAO;
import vo.ProductVO;

/**
 * Servlet implementation class ProductListAction
 */
@WebServlet("/shop/list.do")
public class ProductListAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//list.do?category=com001
		
		String category = request.getParameter("category");
		if( category == null || category.isEmpty() ) {
			category = "com001";//첫 실행시 기본카테고리 지정
		}
		
		//카테고리별 목록조회
		List<ProductVO> list = ProductDAO.getInstance().select( category );
		
		//바인딩
		request.setAttribute("list", list);
		
		//포워딩
		RequestDispatcher disp = 
				request.getRequestDispatcher("product_list.jsp");
		disp.forward(request, response);
		
		
	}

}











