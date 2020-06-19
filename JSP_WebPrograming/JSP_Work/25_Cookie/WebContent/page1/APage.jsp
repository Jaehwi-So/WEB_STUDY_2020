<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	/*
	# 쿠키 : 인터넷 사용자가 웹사이트를 방문한 경우, 그 사이트가 사용중인 서버에서
	웹 브라우저, 즉 클라이언트의 pc에 남기는 작은 기록정보 파일
	쿠키의 동작방식은 웹 서버에서 쿠키 생성 , 웹 브라우저에 쿠키 저장,
	웹 서버의 요청 시 브라우저에서 서버로의 쿠키 전송 단계가 있다.
	구성 요소 : 
		이름 : 쿠키를 구별하는데 사용하는 이름
		값 : 쿠키의 이름과 관련된 값
		유효시간 : 쿠키의 유지시간
		도메인 : 쿠키를 전송할 도메인
		경로 : 쿠키를 전송할 요청 경로
	*/
	
	
	//쿠키 생성. 방문정보를 쿠키에 기록
	Cookie cookie = new Cookie("A","APage.jsp");	//쿠키의 이름, 쿠키의 값
	response.addCookie(cookie);
%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	APage방문을 환영합니다<br>
	<a href="BPage.jsp">B페이지로 이동</a>	
	쿠키 : ${cookie.B.value}<br>
	<a href="CPage.jsp">C페이지로 이동</a>
	쿠키 : ${cookie.C.value}<br>
	<a href="../page2/DPage.jsp">D페이지로 이동</a>
	쿠키 : ${cookie.D.value}<br>
	<br>
	
	쿠키 목록
	<%
		
		Cookie[] cookies = request.getCookies();
		if(cookies.length > 0 && cookies != null){
			String[] name = new String[cookies.length];
			for(int i = 0; i < cookies.length; i++){
				name[i] = cookies[i].getName();	//getName(), getValue()등을 통해 이름과 값을 반환
			}
			pageContext.setAttribute("name", name);
		}
	%>
	<c:forEach var="cookies" items="${name}">
		${cookies} 
	</c:forEach><br>
	${cookie }
	
	
</body>
</html>







