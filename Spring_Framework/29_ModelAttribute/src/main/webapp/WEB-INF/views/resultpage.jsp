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
				location.href="main.do";
			}
		</script>
	</head>
	<body>
		<p>${personVO.name}</p>
		<p>${personVO.age}</p>
		<p>${attrStr}</p>
		<input type="button" value="돌아가기" onclick="return_page()">
	</body>
</html>