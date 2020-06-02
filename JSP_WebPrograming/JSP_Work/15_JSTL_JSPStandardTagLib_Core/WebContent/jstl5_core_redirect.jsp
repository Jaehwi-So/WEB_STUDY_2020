<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<%
	String rq = request.getParameter("redir");
	request.setAttribute("rq", rq);
%>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Core 라이브러리의 Redirect</title>
	</head>
	<body>
		<c:if test="${rq == 'ok'}">
			<!-- c:redirect 태그  : response.sendRedirect()처럼 지정된 페이지로 리다이렉트를 시킨다. -->
			<c:redirect url="jstl4_core_url.jsp">
				<c:param name="res" value="ok"></c:param> <!-- c:param을 이용하여 파라미터 추가 -->
			</c:redirect>
		</c:if>
			
		<c:if test="${rq == 'no'}">
			Redirect를 하지 않습니다.
		</c:if>
	</body>
</html>