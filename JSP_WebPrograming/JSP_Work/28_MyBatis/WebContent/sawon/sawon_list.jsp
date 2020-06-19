<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>사원테이블</title>
	</head>
	<body>
		<table border = "1">
			<caption>=== 사원 목록 ===</caption>
			<tr>
				<th>사번</th>
				<th>이름</th>
				<th>성별</th>
				<th>부서번호</th>
				<th>직책</th>
				<th>입사일</th>
				<th>상사번호</th>
				<th>연봉</th>
			</tr>
			<!-- 검색 결과가 있을 때만 내용을 출력 -->
			<c:if test="${!empty s_list}">
				<c:forEach var="vo" items="${s_list}" >
				<tr>
					<td>${vo.sabun}</td>
					<td>${vo.saname}</td>
					<td>${vo.sagen}</td>
					<td>${vo.deptno}</td>
					<td>${vo.sajob}</td>
					<td>${vo.sahire}</td>
					<td>${vo.samgr}</td>
					<td>${vo.sapay}</td>
				</tr>		
				</c:forEach>
			</c:if>
		</table>
	</body>
</html>