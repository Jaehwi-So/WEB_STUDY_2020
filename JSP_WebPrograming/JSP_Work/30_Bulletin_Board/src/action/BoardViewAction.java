package action;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.BoardDAO;
import vo.BoardVO;

/**
 * Servlet implementation class BoardViewAction
 */
@WebServlet("/board/view.do")
public class BoardViewAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//view.do?idx=21
		int idx = Integer.parseInt(request.getParameter("idx"));
		BoardDAO dao = BoardDAO.getInstance();
		
		//idx에 해당하는 게시글 한 건 얻어오기
		BoardVO vo = dao.selectOne(idx);
		
		//조회수 증가
		HttpSession session = request.getSession();
		String show = (String)session.getAttribute("show");
		
		if( show == null ) {
			dao.update_readhit(idx);
			session.setAttribute("show", "yes");
		}
		
		
		request.setAttribute("vo", vo);
		RequestDispatcher disp = request.getRequestDispatcher("board_view.jsp");
		disp.forward(request, response);
		
	}

}














