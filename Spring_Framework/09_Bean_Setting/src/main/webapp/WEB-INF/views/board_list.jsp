<%@page import="org.springframework.web.context.support.WebApplicationContextUtils"%>
<%@page import="org.springframework.web.context.WebApplicationContext"%>
<%@page import="java.util.Set"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%
	WebApplicationContext wc = WebApplicationContextUtils.getWebApplicationContext(application);
	Set<String> set = (Set<String>)wc.getBean("set_type");
	request.setAttribute("set", set);
%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	<c:forEach var="fruit" items="${list}">
		${fruit}<br>
	</c:forEach>
	
	<c:forEach var="setvar" items="${set}">
		${setvar}<br>
	</c:forEach>
	
</body>
</html>









