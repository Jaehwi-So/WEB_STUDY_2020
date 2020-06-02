<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Scope</title>
	</head>
	<body>
		<h1>웹 어플리케이션의 영역(Scope)</h1>
		1) PAGE 영역 : 하나의 JSP 페이지를 처리할 때 사용되는 영역이다.<br>
		기본 객체로 PageContext를 가진다.
		<hr>
		2) REQUEST 영역 : 한 번의 웹 브라우저 요청을 처리할 때 사용되는 영역, 즉 요청을 주고받는 페이지들 사이에서 저장된 값을 공유한다. 
		요청을 보낼 때 마다 새로운 REQUEST영역이 생성된다.<br>
		기본 객체로 Request를 가진다.
		<hr>
		3) SESSION 영역 : 하나의 웹 브라우저 내에서 값을 공유한다. 브라우저가 열려있는 동안 값이 저장되어 있다가 
		브라우저 종료시 값이 사라진다.(네이버 로그인)<br>
		기본 객체로 Session을 가진다.
		<hr>
		4) APPLICATION 영역 : 하나의 웹 어플리케이션 안에서 값을 공유한다. 
		모든 JSP는 하나의 application 기본 객체를 공유한다.<br>
		기본 객체로 Application을 가진다.
		<hr>
		
	</body>
</html>