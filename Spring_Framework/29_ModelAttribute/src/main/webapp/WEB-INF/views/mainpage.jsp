<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Attribute</title>
		<script>
			function send(f){
				var name = f.name.value.trim();
				var age = f.age.value.trim();
				if(name == ""){
					alert("이름을 입력하세요");
					return;
				}
				if(age == ""){
					alert("나이를 입력하세요");
					return;
				}
				f.action = "attr/send_form1.do";
				f.submit();
			}
		</script>
	</head>
	<body>
		<form method="get">
			<input value="이름 입력" name="name"><br>
			<input value="나이 입력" name="age"><br>
			<input type="button" value="전송" onclick="send(this.form);">
		</form>
	</body>
</html>