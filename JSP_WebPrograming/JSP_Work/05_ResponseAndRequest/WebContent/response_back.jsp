<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!-- 
# Response
웹 브라우저에 보내는 응답 정보를 담는다. 
주로 리다이렉트(Redirect)기능을 수행한다.
--response.sendRedirect("url") : 리다이렉트란 특정 페이지를 실행 후 지정된 페이지로 이동한다.
응답 정보에 헤더 정보를 추가로 입력하여 전송하는 기능도 한다.
 -->

<%
	response.sendRedirect("question.jsp");
%>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Response</title>
	</head>
	<body>
	
	</body>
</html>