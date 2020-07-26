<%@page import="java.util.Map"%>
<%@page import="ex.MyMap"%>
<%@page import="java.util.Set"%>
<%@page import="ex.MySet"%>
<%@page import="java.util.List"%>
<%@page import="ex.MyList"%>
<%@page import="org.springframework.web.context.support.WebApplicationContextUtils"%>
<%@page import="org.springframework.web.context.WebApplicationContext"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	WebApplicationContext wc = WebApplicationContextUtils.getWebApplicationContext(application);
 	MyList mylist = (MyList)wc.getBean("myListBean");
	List<String> list = mylist.getList();
	request.setAttribute("list", list); 
	
	MySet mySet = (MySet)wc.getBean("mySetBean");
	Set<String> set = mySet.getSet();
	request.setAttribute("set", set);
	
	MySet mySet2 = (MySet)wc.getBean("mySetBean2");
	Set<String> set2 = mySet2.getSet();
	request.setAttribute("set2", set2);
	
	MyMap myMap = (MyMap)wc.getBean("myMapBean");
	Map<String, String> map = myMap.getMap();
	request.setAttribute("map", map);
	
	MyMap myMap2 = (MyMap)wc.getBean("myMapBean2");
	Map<String, String> map2 = myMap2.getMap();
	request.setAttribute("map2", map2);
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		<c:forEach var="s1" items="${set}">
			${s1} 
		</c:forEach>
		<br>
		<c:forEach var="s2" items="${set2}">
			${s2} 
		</c:forEach>
		<hr>
		<c:forEach var = "m" items = "${map}">
			${m.key} / ${m.value}<br>
		</c:forEach>
		<br>
		<c:forEach var = "m2" items = "${map2}">
			${m2.key} / ${m2.value}<br>
		</c:forEach>
		<hr>
		<c:forEach var = "l" items = "${list}">
			${l}
		</c:forEach>
	</body>
</html>