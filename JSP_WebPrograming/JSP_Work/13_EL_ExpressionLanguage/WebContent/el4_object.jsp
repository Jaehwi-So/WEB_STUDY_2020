<%@page import="java.util.ArrayList"%>
<%@page import="vo.PersonVO"%>
<%@page import="vo.StudentVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
Cookie cookie = new Cookie("ID", "1234");
response.addCookie(cookie);
PersonVO person = new PersonVO("kim", 22);
ArrayList<String> subject = new ArrayList<>();
subject.add("HTML");
subject.add("JavaScript");
subject.add("JSP");
StudentVO student = new StudentVO(subject, person);
request.setAttribute("student", student);
%>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		EL에서 기본 객체 사용하기<br>
		num 파라미터 값 : ${param.num}<br>
		파라미터의 이름과 값이 저장된 map : ${paramValues}<br>
		쿠키 값 : ${cookie.ID.value}<br>
		<!-- 
		# EL을 통해 객체에 접근하는 방법 
		EL언어는 객체제 저장된 값에 접근 시 .이나 []를 사용한다. 
		접근 시 읽기 가능한 프로퍼티가 있다면 메서드 호출 대신 .이나 []로 접근이 가능하다.
		-->
		학생의 이름 : ${student.person_vo.name}<br>	<!-- StudentVO객체 안의 PersonVO객체에 접근하여 name을 얻어옴 -->
		과목 : ${student.cur_subject.get(0)}	<!-- StudentVO객체 안의 ArrayList객체에 접근하여 0번째 index를 얻어옴 -->
		
	</body>
</html>