<%@page import="dao.DeptDAO"%>
<%@page import="vo.DeptVO"%>
<%@page import="java.util.List"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	//부서목록 가져오기 
	DeptDAO dao = DeptDAO.getInstance();	//싱글톤으로 하나만 만들어지게 된다.
	List<DeptVO> dept_list = dao.selectList();
	System.out.println(dept_list.size());
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		<table border = "1">
			<caption>==부서목록==</caption>
			<tr>	
				<th>부서번호</th>
				<th>부서명</th>
				<th>부서위치</th>
			</tr>
			<% for(int i = 0; i < dept_list.size(); i++){
					DeptVO vo = dept_list.get(i);
			%>
			<tr>
				<td><%= vo.getDeptNO() %></td>
				<td><%= vo.getdName() %></td>
				<td><%= vo.getLoc() %></td>
			</tr>
			<% } %>
		</table>
	</body>
</html>