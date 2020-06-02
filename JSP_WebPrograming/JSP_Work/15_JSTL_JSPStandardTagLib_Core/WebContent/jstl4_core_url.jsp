<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	String res = request.getParameter("res");
	request.setAttribute("res", res);
%>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	<title>Core 라이브러리 URL</title>
	</head>
	<body>
		<!-- c:url 태그 : URL 변수를 생성한다. 
		value에는 url이 담기고 var에 변수명을 담는다.
		-->
		<c:url value="http://www.google.com" var="potal_url"/>
		<c:url value="jstl5_core_redirect.jsp" var="redirect_page1">
			<c:param name="redir" value="no"></c:param> <!-- 전달할 파라미터를 지정할 수 있다. -->
		</c:url>
		<c:url value="jstl5_core_redirect.jsp" var="redirect_page2">
			<c:param name="redir" value="ok"></c:param> <!-- 전달할 파라미터를 지정할 수 있다. -->
		</c:url>
		
		<a href = ${potal_url }>구글 링크</a><br>
		<a href = ${redirect_page1 }>Redirect하지 않는 문서 링크</a><br>
		<a href = ${redirect_page2 }>Redirect하는 문서 링크</a><br>
		<c:if test= "${res == 'ok'}">
			redirect된 jsp
		</c:if>
	</body>
</html>