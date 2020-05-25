<%@page import="dao.MemberDAO"%>
<%@page import="vo.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	//수신시 인코딩형식
	//전송방식이 GET인 경우에는 쓰지 않아도 되지만 POST전송방식으로 파라미터가 넘어온다면
	//한글데이터가 모두 깨지므로, 이를 방지하기 위해 utf-8로 인코딩을 해줘야 한다.
	request.setCharacterEncoding("utf-8");

	String name = request.getParameter("name");
	String id = request.getParameter("id");
	String pwd = request.getParameter("pwd");
	String email = request.getParameter("email");
	String addr = request.getParameter("addr");
	
	//받아온 파라미터들을 vo로 포장
	MemberVO vo = new MemberVO();
	vo.setName(name);
	vo.setId(id);
	vo.setPwd(pwd);
	vo.setEmail(email);
	vo.setAddr(addr);
	
	MemberDAO.getInstance().insert( vo );  

	response.sendRedirect("member_list.jsp");
%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>


