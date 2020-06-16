package action;

import java.io.File;
import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

/**
 * Servlet implementation class FileUploadAction
 */
@WebServlet("/upload.do")
public class FileUploadAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//post방식이나 라이브러리로 인코딩 처리를 할 것임.
		//String path = "d:/23_File_Upload/upload";	//경로
		String web_path = "/upload/";
		//현재 프로젝트를 관리하는 객체
		ServletContext application = request.getServletContext();
		//웹 상의 upload경로 -> 절대경로로 변환(클라이언트들도 사용가능하도록) 
		//클라이언트들이 웹 상의 절대경로에 업로드해야한다. 상대경로는 개발자 전용. 절대경로는 클라이언트 업로드 + 개발자
		String path = application.getRealPath(web_path);
		System.out.println(path);
		
		
		int max_size = 1024 * 1024 * 100; //최대 업로드 용량(약 100mb)
		//파라미터 받기(파일을 포함하고 있는 파라미터를 받아야 한다) -> cos.jar 라이브러리활용
		//request받아둠, 파일 업로드 경로, 최대 업로드 용량, 동일 파일명 정책
		MultipartRequest mr = new MultipartRequest(request, path, max_size, "utf-8", new DefaultFileRenamePolicy());	
		
		//업로드된 파일정보 얻어오기
		String filename = "no_file";
		File f = mr.getFile("photo");	//java.io패키지. 파일의 파라미터명을 받음.
		
		if(f != null) {
			filename = f.getName();	//업로드한 파일명
			System.out.println(filename);
		}
		
		//파일타입 이외의 일반 파라미터 수신. 파일이 파라미터로 넘어올 경우 request를 위임한 mr을 이용하여 파라미터를 받는다.
		String title = mr.getParameter("title");
		
		//바인딩
		request.setAttribute("title", title);
		request.setAttribute("filename", filename);
		
		//바인딩한 정보를 result.jsp로 포워딩.
		RequestDispatcher disp = request.getRequestDispatcher("upload_result.jsp");
		disp.forward(request, response); 
		
	}

}
