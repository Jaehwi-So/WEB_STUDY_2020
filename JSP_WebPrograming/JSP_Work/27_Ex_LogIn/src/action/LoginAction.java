package action;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.MemberDAO;
import vo.MemberVO;

/**
 * Servlet implementation class LoginAction
 */
@WebServlet("/login.do")
public class LoginAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest request, 
						   HttpServletResponse response) throws ServletException, IOException {
		
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");
		
		//파라미터로 넘어온 id가 존재하는지 확인
		MemberVO user = MemberDAO.getInstance().selectOne(id);
		
		String param = "";
		String resultStr = "";
		
		//DB검색시 id가 검색되지 않은경우
		if( user == null ) {
			param = "no_id";
			resultStr = String.format("[{'param':'%s'}]", param);
			response.getWriter().println(resultStr);
			return;
		}
		
		//비밀번호 확인
		if( !user.getPwd().equals(pwd) ) {
			param = "no_pwd";
			resultStr = String.format("[{'param':'%s'}]", param);
			response.getWriter().println(resultStr);
			return;
		}
		
		//아이디와 비밀번호 체크에 문제가 없다면 user정보를 세션에 저장
		//세션은 서버의 메모리(ram)를 사용하기 때문에 많을수록 브라우저를 느리게 만들수 있으므로
		//꼭 필요한 곳에서만 쓰도록 하자!!
		HttpSession session = request.getSession();
		session.setAttribute("user", user);
		//세션 유지시간은 기본이 30분 이지만 이것을 변경하고 싶다면....
		session.setMaxInactiveInterval(60 * 60);
		
		//로그인 가능
		param = "clear";
		resultStr = String.format("[{'param':'%s'}]", param);
		response.getWriter().println(resultStr);
		
	}

}











