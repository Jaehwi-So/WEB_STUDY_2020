<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!-- 
# PageContext
PageContext 객체는 기본 객체 구하기, 속성 처리하기, 페이지 흐름 제어하기, 에러 데이터 구하기의 기능을 수행한다.
 -->
 <%	
 	/* pageContext를 통하여 response, request, session, application, config, out, exception, page 기본객체를 구할 수 있다. */
 	ServletRequest rq = pageContext.getRequest();	//request 기본객체를 구한다.
 	ServletResponse rs = pageContext.getResponse();	//response 기본객체를 구한다.
 %>
<html>
	<head>
	<meta charset="UTF-8">
	<title>기본객체 PageContext</title>
	</head>
	<body>
		pageContext.getRequest() = <%= rq %><br>  
		request = <%= request %><br>
		pageContext.getResponse() = <%= rs %><br>
		response = <%= response %><br>
		
	</body>
</html>