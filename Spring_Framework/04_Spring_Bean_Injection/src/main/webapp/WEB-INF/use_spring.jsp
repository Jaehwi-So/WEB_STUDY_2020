<%@page import="vo.PersonVO"%>
<%@page import="org.springframework.web.context.support.WebApplicationContextUtils"%>
<%@page import="org.springframework.web.context.WebApplicationContext"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	//root-context에 대한 참조값을 가져온다. 
	//applicationScope는 서블릿의 영역이므로 스프링에서 바로 접근은 안 되고 다음과 같이 접근한다.
	
	//applicationScope로 접근
	WebApplicationContext wc = WebApplicationContextUtils.getWebApplicationContext(application);

	//root-context에서 생성한 id가 p1인 객체 bean의 정보를 가져온다. getBean은 object형으로 반환되므로 캐스팅필요
	PersonVO p1 = (PersonVO)wc.getBean("p1");
	PersonVO p2 = wc.getBean("p2", PersonVO.class);
	
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
		<p>${p1.name } / ${p1.age } / ${p1.tel }</p>
		<p>${p2.name } / ${p2.age } / ${p2.tel }</p>
		<hr>
	</body>
</html>