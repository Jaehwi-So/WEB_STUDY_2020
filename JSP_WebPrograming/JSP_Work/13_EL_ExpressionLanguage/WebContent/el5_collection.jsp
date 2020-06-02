<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	//EL을 통한 Map의 데이터 출력
	Map<String, String> map = new HashMap<>();
	map.put("name", "kim");
	map.put("age", "22");
	map.put("tel", "010-1111-1234");
	map.put("addr", "서울특별시 마포구");
	
	/* request 영역에 map 객체를 binding한다. */
	request.setAttribute("myMap", map);  /* setAttribute("변수명 str", 값) */
	
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
	<!-- EL표기법으로 map의 데이터를 가져오는 방법 -->
	이름 : <%= map.get("name") %><br>
	이름 : ${requestScope.myMap.get("name") }<br>
	나이 : ${myMap.get("age") }<br>
	전화번호 : ${myMap["tel"] }<br>
	주소 : ${myMap.addr}<br> <!-- 가장 많이 사용 -->
	</body>
</html>