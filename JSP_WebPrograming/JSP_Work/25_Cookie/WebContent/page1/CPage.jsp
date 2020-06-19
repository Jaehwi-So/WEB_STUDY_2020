<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	//방문정보를 쿠키에 기록
	Cookie cookie = new Cookie("C", "value");
	cookie.setValue("Cpage.jsp");	//setValue()를 통해 쿠키 값 수정
	//쿠키의 Domain 설정 : 도메인 설정으로 쿠키를 공유할 도메인을 설정한다.
	//도메인은 현재 서버의 도메인 및 상위 도메인만 전달할 수 있다.
	cookie.setDomain("Cpage.jsp");	//localhost로는 여러 도메인을 생성할 수 없어 이런식으로 테스트.
	response.addCookie(cookie);
%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	CPage방문을 환영합니다<br>
	<a href="BPage.jsp">B페이지로 이동</a>
	쿠키 : ${cookie.B.value}<br>
	<a href="APage.jsp">A페이지로 이동</a>
	쿠키 : ${cookie.A.value}<br>
</body>
</html>







