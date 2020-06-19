package action;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.GogekDAO;
import vo.GogekVO;

/**
 * Servlet implementation class GogekListAction
 */
@WebServlet("/gogek/gogek_list")
public class GogekListAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<GogekVO> list = GogekDAO.getInstance().select_gogek();
		request.setAttribute("g_list", list);
		RequestDispatcher disp = request.getRequestDispatcher("gogek_list.jsp");
		disp.forward(request, response);
	}

}
