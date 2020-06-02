<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

	String reqVal = "request영역의 값";
	String pageVal = "page영역의 값";
	String sessVal = "session영역의 값";
	String appVal = "application영역의 값";
	/* #setAttribute()를 통하여 해당 스코프의 속성명과 값을 매핑할 수 있다. 해당 값은 속성명으로 스코프에 저장된다. 
		해당 과정을 바인딩(Binding)이라고 부른다.
	*/
	request.setAttribute("v_request", reqVal);
	pageContext.setAttribute("v_page", pageVal);
	session.setAttribute("v_session", sessVal);
	application.setAttribute("v_application", appVal);
	
	/* 다른 페이지로 Request의 정보를 가지고 포워딩(Forwarding)함. 바인딩과 포워딩은 세트로 자주 사용됨 */
	RequestDispatcher disp = request.getRequestDispatcher("get_attribute.jsp");
	disp.forward(request, response);
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		<!-- 기본 객체의 속성 값을 구할 수 있다. -->
		Request 영역의 값 : <%= request.getAttribute("v_request") %><br>
		Page 영역의 값 : <%= pageContext.getAttribute("v_page") %><br>
		Session 영역의 값 : <%= session.getAttribute("v_session") %><br>
		Application 영역의 값 : <%= application.getAttribute("v_application") %><br>
	</body>
</html>