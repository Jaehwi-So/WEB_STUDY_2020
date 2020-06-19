<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<script>
			function session_del(){
				location.href="sessdel.do"
			}
		</script>
	</head>
	<body>
		<c:choose>
			<c:when test="${empty sessionScope.log}">
			세션이 없음
			</c:when>
			<c:otherwise>
			세션이 존재함
			</c:otherwise>
		</c:choose>
		<br>
		<input type="button" value="세션제거" onclick="session_del();"></button><br>
		<a href="FirstPage.jsp">첫 페이지로 이동</a>
	</body>
</html>