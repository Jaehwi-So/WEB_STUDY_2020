<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	<title>EL표기법으로 람다식 활용하기</title>
	</head>
	<body>
		${factorial = (n) -> n == 1 ? 1 : n * factorial(n-1)}<br>
		${factorial(10) }
	</body>
</html>