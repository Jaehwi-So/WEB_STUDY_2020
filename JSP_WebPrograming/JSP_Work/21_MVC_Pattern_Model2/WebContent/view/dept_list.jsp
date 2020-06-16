<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!--  
 ## MVC 패턴 ##
Model-View-Controller 패턴.
사용자가 보게 될 결과 화면을 출력하는 View(jsp, HTML)
사용자의 입력 처리에 따른 흐름 제어를 담당하는 Controller(Servlet)
로직 처리를 위한 Model로 나눈다(Java class, Bean)

# Model
해당 jsp는 MVC 패턴의 모델 역할을 한다. Controller에서 처리된 결과물을 받아와 사용자에게 디스플레이하는 역할을 한다.
-->
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>MVC 패턴을 이용한 DB로부터 목록 받아오기</title>
	</head>
	<body>
		<table border="1">
			<tr>
				<th>부서번호</th>
				<th>부서명</th>
				<th>부서위치</th>
			</tr>
			<c:forEach var="vo" items="${list}">
				<tr>
					<th>${vo.deptno }</th>
					<th>${vo.dname }</th>
					<th>${vo.loc }</th>
				</tr>
			</c:forEach>
		</table>
	</body>
</html>