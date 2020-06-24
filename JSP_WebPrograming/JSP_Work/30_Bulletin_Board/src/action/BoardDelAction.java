package action;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.BoardDAO;
import vo.BoardVO;

/**
 * Servlet implementation class BoardDelAction
 */
@WebServlet("/board/del.do")
public class BoardDelAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int idx = Integer.parseInt(request.getParameter("idx"));
		String pwd = request.getParameter("pwd");
		
		BoardDAO dao = BoardDAO.getInstance();
		
		//삭제하고자 하는 vo정보를 얻어온다
		BoardVO baseVO = dao.selectOne(idx, pwd);
		
		String resultStr = "";
		String result = "no";
		
		if( baseVO == null ) {
			//idx나 pwd가 일치하지 않을 경우 null이기 때문에 no를 콜백메서드로 전송한다
			resultStr = String.format("[{'result':'%s'}]", result);
			response.getWriter().println(resultStr);
			return;
		}
		
		baseVO.setSubject("작성자에 의해 삭제된 게시글 입니다");
		baseVO.setName("known");
		
		//변경된 내용을 DB에 적용하여 삭제된 것 처럼 업데이트
		int res = dao.del_update( baseVO );
		
		if( res == 1 ) {
			result = "yes";
		}
		
		resultStr = String.format("[{'result':'%s'}]", result);
		response.getWriter().println(resultStr);
		
	}

}













