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
 * Servlet implementation class MemberDeleteAction
 */
@WebServlet("/member/member_del.do")
public class MemberDeleteAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		int idx = Integer.parseInt(request.getParameter("idx"));
		String c_pwd = request.getParameter("c_pwd");
		MemberVO vo = MemberDAO.getInstance().selectOne(idx);
		String param = "no";
		String res_str;
		System.out.println(c_pwd);
		System.out.println(vo.getPwd());
		//비밀번호 불일치의 경우
		if(!c_pwd.equals(vo.getPwd())) {
			param = "pwd_error";
			res_str = String.format("[{'param':'%s'}]", param);
			response.getWriter().println(res_str);
			return;
		}
		int res = MemberDAO.getInstance().delete(idx);
		if( res > 0 ) {
			param = "yes";
		}
		res_str = String.format("[{'param':'%s'}]", param);
		//콜백메서드로 응답.
		response.getWriter().println(res_str); //콜백 메서드로 json형태의 문자열이 넘어감.
	}

}
