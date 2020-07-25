<%@page import="vo.PersonVO"%>
<%@page import="org.springframework.web.context.support.WebApplicationContextUtils"%>
<%@page import="org.springframework.web.context.WebApplicationContext"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	//root-context에 대한 참조값을 가져온다. 
	//applicationScope는 서블릿의 영역이므로 바로 접근은 안 되고 다음과 같이 접근한다.
	
	//applicationScope로 접근
	WebApplicationContext wc = WebApplicationContextUtils.getWebApplicationContext(application);
	
	PersonVO p3_1 = (PersonVO)wc.getBean("p3");
	PersonVO p3_2 = wc.getBean("p3", PersonVO.class);
	PersonVO p4_1 = wc.getBean("p4", PersonVO.class);
	PersonVO p4_2 = (PersonVO)wc.getBean("p4");
	
	request.setAttribute("p3_1", p3_1);
	request.setAttribute("p3_2", p3_2);
	request.setAttribute("p4_2", p4_2);
	request.setAttribute("p4_1", p4_1);
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		<p>${p3_1.name } / ${p3_1.age } / ${p3_1.tel }</p>
		<p>${p4_2.name } / ${p4_2.age } / ${p4_2.tel }</p>
		<p> single ton : ${p3_1.toString() } / ${p3_2.toString() } </p>
		<p> prototype : ${p4_1.toString() } / ${p4_2.toString()} </p>
	</body>
</html>