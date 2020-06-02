<%@page import="vo.PersonVO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	List<PersonVO> person = new ArrayList<>();
	PersonVO v1 = new PersonVO("태희", "김", 37);
	PersonVO v2 = new PersonVO("보영", "박", 29);
	PersonVO v3 = new PersonVO("혜교", "송", 33);
	person.add(v1);
	person.add(v2);
	person.add(v3);
	request.setAttribute("person_list", person);
%>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>jstl</title>
	</head>
	<body>
	
		<c:forEach var="vo" items="${person_list}" >
			${vo.first_name}${vo.last_name} / ${vo.age}<br>
		</c:forEach>
		<hr>
		<c:forEach var="value" items="${person_list}" varStatus="cnt"> 
			<!-- cnt.index : index(0번부터) -->
			<c:if test="${cnt.index eq 0 or cnt.index eq 2}">
				${vo.first_name}${vo.last_name} / ${vo.age}
			</c:if>
			
			<!-- cnt.count : 순번(1번부터) -->
			<c:if test="${cnt.count eq 1 or cnt.count eq 3}">
				${vo.first_name}${vo.last_name} / ${vo.age}
			</c:if>
			<br>
		</c:forEach>
		
		<hr>
		
		<c:forEach var="p" items="${person_list }" varStatus="cnt">
			${cnt.count }. ${p.name } / ${p.age }<br>
		</c:forEach>
		
	</body>
</html>