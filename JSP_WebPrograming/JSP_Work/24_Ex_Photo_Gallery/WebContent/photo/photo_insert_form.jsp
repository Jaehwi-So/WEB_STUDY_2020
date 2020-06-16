<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>사진 올리기</title>
		<script>
			function send(f){
				var title = f.title.value.trim();
				var pwd = f.pwd.value.trim();
				var photo = f.photo.value.trim();			
				if(title == ""){
					alert("제목을 입력하세요");
					return;
				}
				if(pwd == ""){
					alert("비밀번호를 입력하세요");
					return;
				}
				if(photo == ""){
					alert("등록할 사진을 업로드해주세요.");
					return;
				}
				f.submit();	
			}
		</script>
	</head>
	<body>
		<!-- 파일을 파라미터로 넘길 때 method와 enctype설정 필수 -->
		<form action="insert.do" method = "POST" enctype = "multipart/form-data">
			<table border = "1" align = "center">
				<caption>=== 사진 등록하기 ===</caption>
				<tr>
					<th> 제목 </th>
					<td><input name = "title"></td>
				</tr>
				<tr>
					<th> 비밀번호 </th>
					<td><input name = "pwd" type = "password"></td>
				</tr>
				<tr>
					<th> 업로드 사진 </th>
					<td><input name = "photo" type = "file"></td>
				</tr>
				<tr>
					<td colspan = "2" align = "center">
						<input type = "button" value = "등록" onclick = "send(this.form);">
						<input type = "button" value = "돌아가기" onclick = "location.href='list.do'">
					</td>
				</tr>
			</table>
		</form>
	</body>
</html>