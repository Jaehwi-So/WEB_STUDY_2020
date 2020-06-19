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

import dao.ProductDAO;
import vo.ProductVO;

/**
 * Servlet implementation class ProductInsertResultAction
 */
@WebServlet("/shop/insert.do")
public class ProductInsertResultAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String web_path = "/images/";
		ServletContext application = request.getServletContext();
		String path = application.getRealPath(web_path);
		System.out.println(path);
		
		int max_size = 1024 * 1024 * 100;
		
		MultipartRequest mr = new MultipartRequest(
					request, 
					path, //실제 업로드될 절대경로
					max_size, //최대업로드 용량
					"utf-8", //수신 인코딩
					new DefaultFileRenamePolicy() //동일파일명 처리
				);
		
		//업로드된 파일의 정보를 얻어오자
		String p_image_s = "no_file";
		String p_image_l = "no_file";
		
		File f = mr.getFile("p_image_s");
		if( f != null ) {
			p_image_s = f.getName();//업로드 된 파일명
		}
		
		f = mr.getFile("p_image_l");
		if( f != null ) {
			p_image_l = f.getName();
		}
		
		//파일 이외의 일반 파라미터 수신
		String category = mr.getParameter("category");
		String p_num = mr.getParameter("p_num");
		String p_name = mr.getParameter("p_name");
		String p_company = mr.getParameter("p_company");
		int p_price = Integer.parseInt( mr.getParameter("p_price") );
		int p_saleprice = Integer.parseInt( mr.getParameter("p_saleprice") );
		String p_content = mr.getParameter("p_content");
		
		//받아온 파라미터를 vo에 저장
		ProductVO vo = new ProductVO();
		vo.setCategory(category);
		vo.setP_num(p_num);
		vo.setP_name(p_name);
		vo.setP_company(p_company);
		vo.setP_price(p_price);
		vo.setP_saleprice(p_saleprice);
		vo.setP_image_s(p_image_s);
		vo.setP_image_l(p_image_l);
		vo.setP_content(p_content);
		
		
		//파라미터를 vo로 포장하여 DB로 전송예정
		ProductDAO.getInstance().insert(vo);
		
		response.sendRedirect("list.do?category=" + category);
	}

}
























