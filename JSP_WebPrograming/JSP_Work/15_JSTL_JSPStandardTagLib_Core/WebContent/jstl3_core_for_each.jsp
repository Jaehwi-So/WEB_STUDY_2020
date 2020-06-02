<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Core 라이브러리의 반복문</title>
	</head>
	<body>
		JSTL의 forEach문, if문<br>
		<!-- # forEach -->
		<!-- for(int n=1; n<=5; n++)-->
		<!-- var : 갱신될 초기변수 begin : 시작값 end : 끝값 step : 증가값 -->
		<c:forEach var = "n" begin = "1" end="20" step="1">
			<c:choose>
				<c:when test="${n mod 3 eq 0 and n mod 4 eq 0}">
				<li>3과 4의 공배수 출력( ${n} )</li>
				</c:when>
				<c:when test="${n mod 3 eq 0}">
				<li>3의 배수 출력( ${n} )</li>
				</c:when>
				<c:when test="${n mod 4 eq 0}">
				<li>4의 배수 출력( ${n} )</li>
				</c:when>
			</c:choose>
		</c:forEach>
		
		<hr>
		<%
		String[] fruit = {"apple", "orange", "grape", "peach"};
		request.setAttribute("fruit_list", fruit);
		%>
		
		<!-- # forEach를 사용하여 배열 출력하기. 향상된 for문의 역할 -->
		<!-- for(String s : fruit_list) -->
		<c:forEach var="s" items="${fruit_list}">
			${s } 
		</c:forEach>
	</body>
</html>