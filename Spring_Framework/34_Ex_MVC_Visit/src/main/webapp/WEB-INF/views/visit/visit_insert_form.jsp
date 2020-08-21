<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<script>
			function send(f){
				var name = f.name.value;
				var content = f.content.value;
				var pwd = f.pwd.value;
				if(name == ""){
					alert("작성자를 입력하세요");
					f.name.focus();
					return;
				}
				if(content == ""){
					alert("내용을 입력하세요");
					f.name.focus();
					return;
				}
				if(pwd == ""){
					alert("비밀번호를 입력하세요");
					f.pwd.focus();
					return;
				}
				f.action = "insert.do";
				f.method = "post";
				f.submit();
			}
		</script>
	</head>
	<body>
		<form method="post" enctype="multipart/form-data">
			<table border="1" align="center">
				<caption>:::방명록 쓰기:::</caption>
				<tr>
					<th>작성자</th>
					<td><input name="name"></td>
				</tr>
				<tr>
					<th>내용</th>
					<td><textarea name="content" rows="5" cols="50">내용입력</textarea></td>
				</tr>
				<tr>
					<th>비밀번호</th>
					<td><input name="pwd" type="password"></td>
				</tr>
				<tr>
					<th>사진</th>
					<td><input name="photo" type="file"></td>
				</tr>
				<tr>
					<td colspan="2" align="center">
						<input type="button" value="글쓰기" onclick="send(this.form)">
						<input type="button" value="목록보기" onclick="location.href='list.do'">
					</td>
				</tr>
			</table>
		</form>
	</body>
</html>