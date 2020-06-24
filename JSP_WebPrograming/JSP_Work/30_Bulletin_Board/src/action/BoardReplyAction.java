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
 * Servlet implementation class BoardReplyAction
 */
@WebServlet("/board/reply.do")
public class BoardReplyAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");
		
		int idx = Integer.parseInt(request.getParameter("idx"));
		int page = Integer.parseInt( request.getParameter("page") );
		
		String name = request.getParameter("name");
		String subject = request.getParameter("subject");
		String content = request.getParameter("content");
		String pwd = request.getParameter("pwd");
		String ip = request.getRemoteAddr();
		
		BoardDAO dao = BoardDAO.getInstance();
		
		//댓글을 달고자 하는 기준글 번호(idx)를 사용하여 게시물 정보를 얻기
		BoardVO baseVO = dao.selectOne(idx);
		
		//기준글의 step보다 큰 값은 step + 1처리
		dao.update_step( baseVO );
		
		//댓글을 달기위한 VO를 포장
		BoardVO vo = new BoardVO();
		vo.setName(name);
		vo.setSubject(subject);
		vo.setContent(content);
		vo.setPwd(pwd);
		vo.setIp(ip);
		
		//댓글이 들어갈 위치 선정
		vo.setRef( baseVO.getRef() );
		vo.setStep(baseVO.getStep() + 1);
		vo.setDepth( baseVO.getDepth() + 1 );
		
		//댓글 등록
		dao.reply(vo);
		
		response.sendRedirect("list.do?page=" + page);
	}

}












