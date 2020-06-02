<%@page import="vo.PersonVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- JSTL 라이브러리 등록하는 방법 -->
<!-- 라이브러리 설정 : tomcat -> webapps -> examples -> WEB-INF -> lib -> 라이브러리 두개 복사.
	tomcat -> lib에 붙여넣기 -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> <!-- prefix이름은 자유 -->
<!-- core 라이브러리 : if, forEach와 같은 제어문을 사용할 수 있도록 하는 라이브러리 -->
<!DOCTYPE html>
<%
	PersonVO person = new PersonVO("gildong", "hong", 20);
	request.setAttribute("person", person);
%>
<!--  
JSTL(JSP Standard Tag Library)
# if, for등 연산, 조건문 등을 스크립트 릿을 대체하여 편하게 처리하도록 하는 태그 등의 커스텀 태그를 모아 둔 라이브러리
-->
<html>
	<head>
		<meta charset="UTF-8">
		<title>Core 라이브러리의 Set, Remove</title>
	</head>
	<body>
		<!-- c:set태그 : EL변수의 값이나 EL변수의 프로퍼티 값을 지정한다. 
		프로퍼티 : 객체의 속성이나 인스턴스
		-->
		# 1. value 속성 사용  <br>
		<c:set var = "num1" value = "10"></c:set>
		${num1}<br>
		<c:set var = "num2" value = "20" scope = "request"/>	<!-- 변수를 저장할 스코프 지정 -->
		${requestScope.num2}<br>
		
		# 2. 태그 몸체 사용 <br>
		<c:set var = "num3">30</c:set>
		${num3}<br>
		
		# 3. 객체의 프로퍼티 값 설정하기<br>
		<c:set var = "first_name">${person.getFirst_name()}</c:set>
		<c:set var = "last_name" value = "${person.getLast_name()}"></c:set>
		성 : ${first_name}<br>
		이름 : ${last_name}<br>
		<hr>
		<c:set target="${person}" property="first_name">길동</c:set>
		<c:set target="<%=person%>" property="last_name" value="홍"/>
		성 : ${person.first_name}<br>
		이름 : ${person.last_name}<br>
		
		<!-- c:remove태그 : set으로 지정한 변수를 삭제한다. -->
		<c:remove var="num2" scope="request"/>
		<c:remove var="num3"></c:remove>
		
	</body>
</html>