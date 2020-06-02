<%@page import="calcmethod.Calculator"%>
<%@page import="calcmethod.Calculator2"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	Calculator c1 = new Calculator();
	request.setAttribute("calc", c1);
%>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	<title>EL표기법을 이용한 메서드 사용</title>
	</head>
	<body>
		덧셈 메서드 : ${calc.sum(10, 20)}<br>
		뺄셈 메서드 : ${calc.minus(20, 10)}<br>
		Static 덧셈 메서드 : ${Calculator2.sum(10, 3)}
		Static 뺄셈 메서드 : ${Calculator2.sum(10, 3)}
	</body>
</html>