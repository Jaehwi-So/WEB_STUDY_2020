package action;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.SawonDAO;
import vo.SawonVO;

/**
 * Servlet implementation class SawonListAction
 */
@WebServlet("/sawon/sawon_list.do")
public class SawonListAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//사원목록 가져오기
		List<SawonVO> list = SawonDAO.getInstance().select();
		//System.out.println(list.size());
		//System.out.println(list.get(0).getSaname());
		request.setAttribute("s_list", list);
		RequestDispatcher disp = request.getRequestDispatcher("sawon_list.jsp");
		disp.forward(request, response);
	}

}
