package action;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.PhotoDAO;
import vo.PhotoVO;

/**
 * Servlet implementation class PhotoDeleteAction
 */
@WebServlet("/photo/photo_del.do")
public class PhotoDeleteAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int idx = Integer.parseInt(request.getParameter("idx"));
		
		PhotoVO vo = PhotoDAO.getInstance().selectOne(idx);
		String web_path = "/upload/";
		ServletContext application = request.getServletContext();
		String path = application.getRealPath(web_path);
		
		int res = PhotoDAO.getInstance().delete(idx);
		//# DB삭제 성공시 절대경로안의 파일을 지움.
		System.out.println(path);
		if(res > 0) {
			File f = new File(path, vo.getFilename());
			if(f.exists()) {	//경로 존재시
				f.delete();	//삭제
			}
		}
		
		String param = "no";
		if(res > 0) {
			param = "yes";
		}
		
		String resultStr = String.format("[{'param' : '%s'}]", param);
		response.getWriter().println(resultStr);
	}
	
	//이미지 삭제

}
