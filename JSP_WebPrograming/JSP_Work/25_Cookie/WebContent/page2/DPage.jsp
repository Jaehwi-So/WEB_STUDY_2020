<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	//방문정보를 쿠키에 기록
	Cookie cookie = new Cookie("D", "Dpage");
	response.addCookie(cookie);

%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	DPage방문을 환영합니다<br>
	<a href="../page1/APage.jsp">A페이지로 이동</a>
	쿠키 : ${cookie.A.value}<br>

	쿠키 목록
	<%
		Cookie[] cookies = request.getCookies();
		String[] name = new String[cookies.length];
		for(int i = 0; i < cookies.length; i++){
			name[i] = cookies[i].getName();	//getName(), getValue()등을 통해 이름과 값을 반환
		}
		pageContext.setAttribute("name", name);
	%>
	<c:forEach var="cookies" items="${name}">
		${cookies} 
	</c:forEach><br>
	${cookie }
	
</body>
</html>







