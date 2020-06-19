package action;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class LogoutAction
 */
@WebServlet("/logout.do")
public class LogoutAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//로그아웃을 위해 세션에 등록된 user를 삭제
		HttpSession session = request.getSession();
		session.removeAttribute("user");
		
		RequestDispatcher disp = 
				request.getRequestDispatcher("login_form.jsp");
		disp.forward(request, response);
	}

}












