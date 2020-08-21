<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		제목 : ${vo.title}<br>
		<img src="${pageContext.request.contextPath}/resources/upload/${vo.filename}" width="200px"><br>
		<input type="button" value="다른 이미지 등록하기" onclick="location.href='insert_form.do'">
		
	</body>	
</html>