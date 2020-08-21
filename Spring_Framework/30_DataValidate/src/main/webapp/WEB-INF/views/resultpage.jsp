<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>RequestMapping</title>
		<script>
			function return_page(){
				location.href="${pageContext.request.contextPath}/main.do";
			}
		</script>
	</head>
	<body>
		<p>${vo.name}</p>
		<p>${vo.age}</p>
		<p>${vo.email}</p>
		<input type="button" value="돌아가기" onclick="return_page()">
	</body>
</html>