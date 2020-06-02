<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
//EL(Expression Language) : JSP에서 사용하는 표현식을 조금 더 간결하게 사용하기 위한 표현 언어.
//JSP의 스크립트 요소를 보완한다.
/*
1. JSP 기본 객체, 스코프 영역의 속성 사용 가능
2. 수식 연산, 관계 연산, 논리 연산 등 연산 가능
3. 자바 클래스 메서드 호출 가능
4. 쿠키, 기본 객체의 속성 등 JSP 표현언어의 기본객체 제공.
5. 람다식을 통한 함수 정의, 실행
# 형식 : ${expr}
*/
	pageContext.setAttribute("num", 10);

 %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		el 표기법 사용 : ${num}
	</body>
</html>