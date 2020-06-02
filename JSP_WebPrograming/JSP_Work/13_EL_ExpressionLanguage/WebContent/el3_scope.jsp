<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<% 
	String str = "안녕";
	
	/*
	EL표기법으로 변수를 사용하는 방법 : 4개의 영역(JSP의 내장객체)에 바인딩된 값 사용, 할당 연산자 사용.
	1) page영역
	page영역은 단 한 개의 페이지에서만 내용을 공유
	2) request영역
	가장 많이 사용되는 영역. 두 개의 페이지에서 저장된 값을 공유
	3) session영역
	두번째로 많이 사용되는 영역. tomcat이 실행될 때 자동으로 만들어지는 영역. 하나의 웹 브라우저 내에서 값을 공유한다.
	브라우저가 열려있는 동안 값이 저장되어있다가 브라우저 종료시 값이 사라짐. ( ex)네이버 로그인 )
	4) application영역
	하나의 웹 어플리케이션 안에서 값을 공유.
	*/
	
	
	//jsp를 통해 requestScope영역에 값을 넣는다.
	request.setAttribute("msg", "리퀘스트 영역의 msg");
	
	//jsp를 통해 pageScope영역에 값을 넣는다.
	pageContext.setAttribute("msg", str);
	
	//jsp를 통해 sessionScope영역에 값을 넣는다.
	session.setAttribute("msg2", "세션 영역의 msg");
	
	//jsp를 통해 applicationScope영역에 값을 넣는다.
	application.setAttribute("msg3", "어플리케이션 영역의 msg");
%>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EL 표현식</title>
	</head>
	<body>
		JSP 표현식 : <%= str %><br>
		

		EL 표현식(PageScope) : ${ pageScope.msg }<br>
		EL 표현식 (requestScope) : ${requestScope.msg }<br>
		EL 표현식 (sessionScope) : ${sessionScope.msg2 }<br>
		
		
		<!-- 
		# 객체 탐색
		기본 객체를 명시하지 않는 생략식을 이용한 탐색 시 영역 참조 우선순위 존재 
		1)pageScope 2)requestScope 3)sessionScope 4)applicationScope
		-->
		EL 표현식(생략식) : ${ msg2 }<br>
		EL 표현식(생략식) : ${ msg }<br> <!-- EL표현식이 중복되면 우선순위를 따른다. -->
		
		<!-- 파라미터 값 표현하기 -->
		EL 표현식 (파라미터) ${ param.age }<br> <!-- url에서 넘겨받은 파라미터 age에 접근. -->

	</body>
</html>