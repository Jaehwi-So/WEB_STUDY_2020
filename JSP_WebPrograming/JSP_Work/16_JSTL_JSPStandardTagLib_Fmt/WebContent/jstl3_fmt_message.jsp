<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>

<html>
<!-- 메시지 처리 태그
fmt:bundle : 태그 몸체에서 사용할 리소스 번들을 지정한다. 번들은 .properties형태이며 경로상에 존재해야 함.
fmt:message : 해당 번들에 해당하는 메시지를 언어권에 맞춰 출력한다
fmt:setBundle : 특정 메시지 번들을 사용할 수 있도록 로딩한다.
-->
<fmt:setLocale value="en"/>
<fmt:setBundle var = "message" basename="resource.message"/>
<fmt:message bundle="${message}" key="TITLE" var="title"></fmt:message>
	<head>
		<meta charset="UTF-8">
		<title>${title}</title>
	</head>
	<body>
		<fmt:message bundle="${message}" key="GREET"></fmt:message>
		<br>
		<c:if test="${empty param.id}">
			<fmt:message bundle="${message}" key="VISITOR">
				<fmt:param value="${param.id}"></fmt:param>
			</fmt:message>
		</c:if>
	</body>
</html>