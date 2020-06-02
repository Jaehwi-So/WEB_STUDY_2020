<%@page import="dao.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	//member_del.jsp?idx=2
	int idx = Integer.parseInt(request.getParameter("idx"));

	MemberDAO.getInstance().delete(idx);
	
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