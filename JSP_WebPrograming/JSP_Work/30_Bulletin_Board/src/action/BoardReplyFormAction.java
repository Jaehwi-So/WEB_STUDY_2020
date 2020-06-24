package action;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class BoardReplyFormAction
 */
@WebServlet("/board/reply_form.do")
public class BoardReplyFormAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//reply_form.do?idx=10
		
		RequestDispatcher disp = 
				request.getRequestDispatcher("board_reply.jsp");
		disp.forward(request, response);
	}

}















