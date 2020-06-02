<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Core 라이브러리의 조건문</title>
	</head>
	<body>
		<c:set var="n1" value = "4"></c:set>
		<c:set var="n2" value = "16"></c:set>
		<c:set var="n3" value = "6"></c:set>
		
		<!-- # c:if 태그 : if문의 역할을 수행 -->
		<c:if test="${n1 mod 2 eq 0}">
			${n1}은 짝수입니다.
		</c:if>
		
		<hr>
		<!-- # choose,when,otherwise 태그 : else-if문의 역할을 수행 
		choose : else-if문의 블록
		when : if, else if문 수행. 조건이 참일시 아래의 연산을 하지 않음.
		otherwise : else문 수행
		-->
		<c:choose>
			<c:when test="${n2 mod 3 eq 0}">
				${n2}는 3의 배수입니다
			</c:when>
			<c:when test="${n2 mod 4 eq 0}">
				${n2}는 3의 배수가 아닌 4의 배수입니다
			</c:when>
			<c:otherwise>
				${n2}는 3과 4의 배수가 아닙니다
			</c:otherwise>
		</c:choose>
	</body>
</html>