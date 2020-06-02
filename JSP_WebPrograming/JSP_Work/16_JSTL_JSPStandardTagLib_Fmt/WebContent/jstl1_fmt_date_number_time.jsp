<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!-- fmt(format) 라이브러리 : 특정 지역에 따라 알맞은 메시지를 출력할 때 사용하는 국제화 태그
	날짜, 숫자의 출력형식을 포메팅하는 기능 등을 포함한 라이브러리(소수점 조절, 날짜 형식 조절..) -->

<%
	//오늘 년/월/일/시/분/초
	Date today = new Date();
	int money = 120000000;
	request.setAttribute("today", today);
	request.setAttribute("money", money);

%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>JSTL</title>
	</head>
	<body>
		fmt의 날짜, 숫자, 시간 포메팅 라이브러리<br>
		<fmt:formatDate value="${today }"/><br>
		<fmt:formatDate value="${today }" pattern="YYYY년 DD일"/><br> <!-- 포멧의 대소문자에 의해서도 형식이 바뀜. -->
		<fmt:formatDate value="${today }" pattern="YYYY년 MM월 dd일"/><br>
		<fmt:timeZone value="USA"/>	<!-- 해당 국가의 시간대로 바꿈 -->
		<fmt:formatDate value="${today }" pattern="YYYY년 MM월 dd일"/><br>
		금액 : <fmt:formatNumber value="${ money }" />
	</body>
</html>