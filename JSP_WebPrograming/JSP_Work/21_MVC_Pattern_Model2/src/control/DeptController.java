package control;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.DeptDAO;
import vo.DeptVO;

/**
 * Servlet implementation class DeptController
 */

/* # Controller
 * 해당 서블릿은 Model2의 컨트롤러 역할을 한다.
 * 웹 브라우저가 전송한 HTTP 요청을 받으며 어떤 기능을 요청했는지에 따라서 Model을 통하여 기능을 수행한다.
 * 이 결과물을 가공하여 결과값을 request나 session 등의 scope의 속성에 저장한다.
 * 그 후 흐름에 따라 jsp나 servlet으로 포워딩하거나 리다이렉트 시킨다.
 */
@WebServlet("/view/control.do")
public class DeptController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<DeptVO> list = DeptDAO.getInstance().select_list();
		request.setAttribute("list", list);
		RequestDispatcher disp = request.getRequestDispatcher("dept_list.jsp");
		disp.forward(request, response);
	}

}
