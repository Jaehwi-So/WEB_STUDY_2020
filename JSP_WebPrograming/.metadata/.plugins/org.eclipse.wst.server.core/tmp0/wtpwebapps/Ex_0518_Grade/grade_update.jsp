<%@page import="vo.GradeVO"%>
<%@page import="dao.GradeDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
	/*?no=3&name2=김태희&kor2=87&eng2=83&mat2=90*/
	int no = Integer.parseInt(request.getParameter("no"));
	String name = request.getParameter("name2");
	int kor = Integer.parseInt(request.getParameter("kor2"));
	int eng = Integer.parseInt(request.getParameter("eng2"));
	int mat = Integer.parseInt(request.getParameter("mat2"));
	
	GradeVO vo = new GradeVO();
	vo.setNo(no);
	vo.setEng(eng);
	vo.setKor(kor);
	vo.setMat(mat);
	vo.setName(name);

	int res = GradeDAO.getInstance().update(vo);
	
	response.sendRedirect("grade_view.jsp");
%>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
	
	</body>
</html>