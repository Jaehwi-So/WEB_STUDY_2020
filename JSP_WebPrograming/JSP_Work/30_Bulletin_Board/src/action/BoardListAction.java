package action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.BoardDAO;
import util.PageUtil;
import util.Paging;
import vo.BoardVO;


/**
 * Servlet implementation class BoardListAction
 */
@WebServlet("/board/list.do")
public class BoardListAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//list.do?page=1
		int nowPage = 1;//기본페이지
		
		String page = request.getParameter("page");
		if( page != null && !page.isEmpty() ) {
			nowPage = Integer.parseInt(page);
		}
		
		//한 페이지에 표시되는 게시물의 시작과 끝번호를 계산
		int start = (nowPage - 1) * PageUtil.Board.BLOCKLIST + 1;
		int end = start + PageUtil.Board.BLOCKLIST - 1;
		
		Map<String, Integer> map = new HashMap<>();
		map.put("start", start);
		map.put("end", end);
		
		//게시글 전체목록 가져오기
		List<BoardVO> list = null;
		BoardDAO dao = BoardDAO.getInstance();
		list = dao.selectList( map );
		
		//전체게시물 수 구하기
		int row_total = dao.getRowTotal();
		
		//하단 페이지메뉴 생성하기
		String pageMenu = Paging.getPaging(
				"list.do", nowPage, row_total, 
				PageUtil.Board.BLOCKLIST, 
				PageUtil.Board.BLOCKPAGE);
		
		request.setAttribute("list", list);
		request.setAttribute("pageMenu", pageMenu);
		
		//세션에 기록되어 있던 show정보를 지운다
		request.getSession().removeAttribute("show");
		
		RequestDispatcher disp = 
				request.getRequestDispatcher("board_list.jsp");
		disp.forward(request, response);
		
	}

}























