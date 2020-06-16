package action;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.MemberDAO;
import vo.MemberVO;

/**
 * Servlet implementation class MamberListAction
 */
@WebServlet("/member/member_list.do")
public class MemberListAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	//서블릿 호출 시
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//회원 전체목록 얻어오기
		List<MemberVO> list = MemberDAO.getInstance().selectList();
		
		//request영역에 서버에서 가져온 list를 바인딩한다.(저장)
		request.setAttribute("list", list);
		
		//request에 담긴 list를 el표기법을 통해 출력하고자 하는 JSP로 포워딩한다.(전달)
		RequestDispatcher disp = request.getRequestDispatcher("member_list.jsp");
		disp.forward(request, response);
		
	}

}
