<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	<title>로케일 지정 태그</title>
	</head>
	<body>
		<!-- 선호 로케일을 설정한다. 헤더에서 지정한 언어가 아닌 다른 언어를 사용하도록 지정할 때 사용
		scope는 영향을 미치는 범위를 지정한다. -->
		<fmt:setLocale value="ko" scope="request"/>
		
		<!-- 요청 파라미터의 캐릭터 인코딩을 지정한다.
		request.setCharactorEncoding()과 같은 역할
		 -->
		<fmt:requestEncoding value="utf-8"/>
	</body>
</html>