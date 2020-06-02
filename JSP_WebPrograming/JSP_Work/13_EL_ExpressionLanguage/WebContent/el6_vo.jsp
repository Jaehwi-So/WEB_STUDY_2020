<%@page import="vo.PersonVO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	/* DB에서 vo값들을 가져왔다고 가정. */
	PersonVO vo = new PersonVO("kim", 20);
	request.setAttribute("vo1", vo);
	PersonVO vo2 = new PersonVO("lee", 22);
	PersonVO vo3 = new PersonVO("park", 27);
	List<PersonVO> arr = new ArrayList<>();
	arr.add(vo);
	arr.add(vo2);
	arr.add(vo3);
	request.setAttribute("list", arr);
	
%>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	</head>
	<body>
		이름 : ${vo1.name}<br>	<!-- vo1의 getName()을 호출한다. getName()이 없으면 에러 -->
		나이 : ${vo1.age } 또는 ${vo1['age'] }<br>
		<hr>
		<!-- 리스트의 요소 el표기법으로 출력하기 -->
		${list[0].name } / ${list[0].age}<br>
		${list[1].name } / ${list[1].age}<br>
		${list[2].name } / ${list[2].age}<br>
	</body>
</html>