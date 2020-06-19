<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="check_login.jsp" %>    

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	메인페이지<br>
	${ user.name }님 환영합니다<br>
	<input type="button" value="로그아웃" onclick="location.href='logout.do'">
</body>
</html>











