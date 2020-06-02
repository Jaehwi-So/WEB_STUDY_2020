<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
			Request 영역의 값 : <%= request.getAttribute("v_request") %><br>
			Page 영역의 값 : <%= pageContext.getAttribute("v_page") %><br>
			Session 영역의 값 : <%= session.getAttribute("v_session") %><br>
			Application 영역의 값 : <%= application.getAttribute("v_application") %><br>
	</body>
</html>