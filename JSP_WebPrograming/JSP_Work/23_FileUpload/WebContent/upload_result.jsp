<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>

<!-- upload폴더 안에는 개발 시 사용되는 이미지등이 들어가고 클라이언트들이 사용하는 이미지는 클라이언트들의 전용 upload폴더를 이용해야한다. -->
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		제목 : ${title}<br>
		<img src = "upload/${filename}" width = "200">
	</body>
</html>