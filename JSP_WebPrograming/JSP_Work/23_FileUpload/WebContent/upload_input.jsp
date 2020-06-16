<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<script type="text/javascript">
			function send(f){
				var title = f.title.value.trim();
				var photo = f.photo.value.trim();
				if(title == ""){
					alert("제목을 입력하세요");
					return;
				}
				if(photo == ""){
					alert("파일을 선택하세요");
					return;
				}
				f.action = "upload.do";
				f.submit();
			}			
		</script>
	</head>
	<body>
		<!-- 파일 업로드 시 고려사항  
		1. method : 파일 전송 방식은 POST여야 한다.
		2. enctype : 폼을 전송하기위한 인코딩 방법. 파일 전송시 multipart/form-data속성을 넣어야 한다.
		-->
		<form method = "POST" enctype = "multipart/form-data">
			제목 : <input name = "title"><br>
			첨부 : <input type = "file" name = "photo"><br>
			<input type = "button" value = "업로드" onclick="send(this.form);">
		</form>
	</body>
</html>