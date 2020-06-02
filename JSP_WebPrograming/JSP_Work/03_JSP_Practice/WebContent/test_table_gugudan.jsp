<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 구구단을 테이블 형태로 웹상에 보여지게 하기 -->
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>릿 영역에서 구구단 테이블 출력하기</title>
		<style>
		 td{
			 border : solid black;
			 margin : 0px;
		 }
		</style>
	</head>

<!-- # 주석 -->
<!-- HTML 주석 : 컴파일시 자바코드로 전환되어 주석내용까지 소스에 노출. -->
<%-- JSP 주석 : 소스에 노출되지 않아 보안성이 높아진다. --%>

	<body>
		<table border = "1">
			<% for(int i = 1; i <= 9; i++){ %> 
				<tr>
				<% for(int j = 2; j <= 9; j++) { %> 
					<td> 
					<%-- <%= j + "*" + i + "=" + i * j %> --%> <!-- JSP의 주석 -->
					<% String str = String.format("%d * %d = %d", j, i, j*i); %> <!-- str에 문자열 초기화 -->
					<%= str %>
					</td>
				<% } %> 
				</tr>
			<% } %>
		</table>
	</body>
</html>