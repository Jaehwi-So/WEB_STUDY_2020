<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<script type="text/javascript">
			function send(f){
				var title = f.title.value;
				var photo = f.photo.value;
				if(title == ""){
					alert("제목을 입력해주세요");
					return;
				}
				if(photo == ""){
					alert("사진을 등록해주세요");
					return;
				}
				f.action = "upload.do";
				f.submit();
			}
		</script>
	</head>
	<body>
		<form method="POST" enctype="multipart/form-data">	
			제목 : <input name="title"><br>
			사진 : <input name="photo" type="file"><br>
			<input type="button" value="전송" onclick="send(this.form);">
		</form>
	</body>
</html>