<%@page import="vo.PersonVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	PersonVO p1 = new PersonVO();
	p1.setName("kim");
	p1.setAge(20);
	p1.setTel("010-1234-1254");
	
	PersonVO p2 = new PersonVO("lee", 30, "010-123-1545");
	request.setAttribute("p1", p1);
	request.setAttribute("p2", p2);
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		<p>${p1.name } / ${p1.age } / ${p1['tel']}</p>
		<p>${p2.name } / ${p2.getAge()} / ${p2['tel']}</p>
	</body>
</html>