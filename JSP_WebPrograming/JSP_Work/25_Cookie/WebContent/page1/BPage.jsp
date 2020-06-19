<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	//방문정보를 쿠키에 기록
	Cookie cookie = new Cookie("B","BPage.jsp");

	//지속성 추가
	//일반적으로 브라우저 종료시 함께 종료되는 쿠키를 세션쿠키 라고 한다.
	//setMaxAge를 설정하면 쿠키의 생존시간을 설정할 수 있다. 이를 영구적 쿠키 라고 한다.
	cookie.setMaxAge(60 * 2);//2분간 유효한 영구적 쿠키. 브라우저 종료시에도 쿠키가 사라지지 않음
	response.addCookie(cookie);
%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	BPage방문을 환영합니다<br>
	<a href="APage.jsp">A페이지로 이동</a>
	쿠키 : ${cookie.A.value}<br>
	<a href="CPage.jsp">C페이지로 이동</a>
	쿠키 : ${cookie.C.value}<br>
</body>
</html>







