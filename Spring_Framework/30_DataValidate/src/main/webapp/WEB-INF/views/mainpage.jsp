<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Attribute</title>
		<script>
			function send(f){
				f.action = '${pageContext.request.contextPath}/user/join.do';
				f.submit();
			}
		</script>
	</head>
	<body>
		<form method="get">
			<input value="이름 입력" name="name"><br>
			<input value="나이 입력" name="age"><br>
			<input value="이메일 입력" name="email"><br>
			<input type="button" value="전송" onclick="send(this.form);">
		</form>
		<p>${result}</p>
	</body>
</html>