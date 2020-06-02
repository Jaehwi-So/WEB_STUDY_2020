<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
   
<%
	String[] fruit_array = {"사과", "배", "참외", "오렌지", "복숭아"}; /* DB에서 보통 이러한 배열을 넘겨받는다. */
%>

<!-- 배열의 요소를 리스트 형태로 출력하기 -->
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>배열을 스크립트 릿 영역에서 출력하기</title>
	</head>
	<body>
		<ul>
			<!-- 릿 영역과 html 영역을 구분한다. -->
			<% for(int i = 0; i < fruit_array.length; i++){ %>
				<li> <%= fruit_array[i] %> </li>
			<% } %>				

		</ul>
	
	</body>
</html>