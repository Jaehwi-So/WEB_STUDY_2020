package action;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import dao.PhotoDAO;
import vo.PhotoVO;

/**
 * Servlet implementation class PhotoInsertAction
 */
@WebServlet("/photo/insert.do")
public class PhotoInsertAction extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String web_path = "/upload/";
		//현재 프로젝트 관리 객체
		ServletContext application = request.getServletContext();
		//upload 상대경로 -> 절대경로로 변경
		String path = application.getRealPath(web_path);
		System.out.println(path);
		//파일을 포함하고 있는 파라미터를 받기 위한 request의 위임 객체
		MultipartRequest mr = new MultipartRequest(request, path, 1024*1024*100, "utf-8", new DefaultFileRenamePolicy());
		
		//photo parameter에 해당되는 file을 받음
		File f = mr.getFile("photo");
		String filename = "no_file";
		if( f != null) {
			filename = f.getName(); //업로드가 됬다면 업로드된 실제파일명 대입.
		}
		
		//파일형식 이외의 일반적인 파라미터를 수신.
		String title = mr.getParameter("title");
		String pwd  = mr.getParameter("pwd");
		String ip = request.getRemoteAddr();
		
		PhotoVO vo = new PhotoVO();
		vo.setTitle(title);
		vo.setFilename(filename);
		vo.setPwd(pwd);
		vo.setIp(ip);
		
		//파일 등록
		int res = PhotoDAO.getInstance().insert(vo);
		response.sendRedirect("list.do");			
	}
}
