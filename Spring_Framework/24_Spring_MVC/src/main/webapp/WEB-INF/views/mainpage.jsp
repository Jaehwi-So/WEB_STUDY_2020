<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>메모장</title>
	</head>
	<body>
		<h1>메모장</h1>
		<table>
			<tr>
				<th>작성자</th>
				<th>내용</th>
			</tr>
			<c:forEach var="vo" items="${list}">
			<tr>
				<td>${vo.name }</td>
				<td>${vo.content }</td>
			</tr>
			</c:forEach>
		</table>
	</body>
</html>