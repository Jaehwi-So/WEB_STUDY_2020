<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<style>
			h2{
				color : navy;
				font-style: italic;
			}
		</style>
	</head>
	<body>
		<hr width="400px" color="navy">
		<c:if test="${param.choice eq 1}">
			<h2>애국가 1절</h2>
			<hr width="400px" color="navy">
			<p>
				동해물과 백두산이 마르고 닳도록<br>
				하느님이 보우하사 우리나라 만세<br>
				무궁화 삼천리 화려강산<br>
				대한사람 대한으로 길이 보전하세<br>
			</p>
		</c:if>
		<c:if test="${param.choice eq 2}">
			<h2>애국가 2절</h2>
			<hr width="400px" color="navy">
			<p>
				남산 위에 저 소나무 철갑을 두른 듯 <br>
				바람 서리 불변함은 우리 기상일세<br>
				무궁화 삼천리 화려 강산<br>
				대한 사람 대한으로 길이 보전하세<br>
			</p>
		</c:if>
		<c:if test="${param.choice eq 3}">
			<h2>애국가 3절</h2>
			<hr width="400px" color="navy">
			<p>
				가을 하늘 공활한데 높고 구름 없이 <br>
				밝은 달은 우리 가슴 일편단심일세<br>
				무궁화 삼천리 화려 강산<br>
				대한 사람 대한으로 길이 보전하세<br>
			</p>
		</c:if>
		<c:if test="${param.choice eq 4}">
			<h2>애국가 4절</h2>
			<hr width="400px" color="navy">
			<p>
				이 기상과 이 맘으로 충성을 다하여 <br>
				괴로우나 즐거우나 나라 사랑하세<br>
				무궁화 삼천리 화려 강산<br>
				대한 사람 대한으로 길이 보전하세<br>
			</p>
		</c:if>

	</body>
</html>