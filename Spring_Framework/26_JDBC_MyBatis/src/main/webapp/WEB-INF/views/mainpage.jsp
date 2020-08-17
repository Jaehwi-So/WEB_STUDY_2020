<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>메모장</title>
		<script>
			function send(f){
				if(f.name == ""){
					alert("작성자를 입력하세요");
					return;
				}
				if(f.content == ""){
					alert("내용을 입력하세요");
					return;
				}
				f.action = "memo_insert.do"
				f.submit();
			}
		</script>
	</head>
	<body>
		<h1>메모장</h1>
		<form>
			<input name="name" value="작성자 입력"><br>
			<textarea name="content" rows="10"cols="25">
				내용 입력
			</textarea><br>
			<input type="button" value="추가" onclick="send(this.form);"><br>
		</form>
		<hr>
		<table border="1">
			<tr>
				<th>작성자</th>
				<th>내용</th>
			</tr>
			<c:forEach var="vo" items="${list}">
			<tr>
				<td>${vo.name }</td>
				<td>${vo.content }</td>
			</tr>
			</c:forEach>
		</table>
	</body>
</html>