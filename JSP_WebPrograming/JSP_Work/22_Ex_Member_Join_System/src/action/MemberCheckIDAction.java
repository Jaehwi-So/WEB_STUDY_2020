package action;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.MemberDAO;
import vo.MemberVO;

/**
 * Servlet implementation class MemberCheckIDAction
 */
@WebServlet("/member/check_id.do")
public class MemberCheckIDAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");
		
		MemberVO vo = MemberDAO.getInstance().selectOne(id);
		
		String res = "no";
		if(vo == null) {	//vo가 null이라면 해당 id검색이 실패했음. 즉 중복된 아이디가 없으므로 가입 가능
			res = "yes";
		}
		
		//보내고자 하는 콜백데이터를 JSON으로 포장
		response.setContentType("text/plain;charset=UTF-8"); //JSON으로 결과를 돌려줄 때 한글포함시 대비 인코딩
		String resultStr = String.format("[{'result' : '%s'}, {'id' : '%s'}]", res, id);	//JSON 전달 시 배열로 전달하는 것이 안전하다.
		
		//Ajax 콜백메서드로 resultStr전송
		response.getWriter().println(resultStr);
	}

}
