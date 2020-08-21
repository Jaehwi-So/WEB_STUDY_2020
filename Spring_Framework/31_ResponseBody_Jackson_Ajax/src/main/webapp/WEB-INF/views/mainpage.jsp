<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>ajax</title>		
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/httpRequest.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.js"></script>
		<script type="text/javascript"> 
			function send(f) { 
			    var name = f.name.value.trim();
				var age = f.age.value.trim();
				var email = f.email.value.trim();
				var url = "join.do";
				var param = "name=" + name + "&age=" + age + "&email=" + email;
				sendRequest(url, param, resultFn, "post"); 
			}
	
			function resultFn(){
				alert(xhr.readyState + "/" + xhr.status);
				if( xhr.readyState == 4 && xhr.status == 200 ){
				    var data = xhr.responseText;
				    //data = "[" + data + "]";
					var json = eval( '('+ data + ')');
					alert(json.name);
					document.getElementById("name_output").innerHTML = json.name
					document.getElementById("age_output").innerHTML = json.age
					document.getElementById("email_output").innerHTML = json.email
				}
			} 
		</script>
	</head>
	<body>
		<form name="userForm" id="userForm">
			<input value="이름 입력" name="name" id="name"><br>
			<input value="나이 입력" name="age" id="age"><br>
			<input value="이메일 입력" name="email" id="email"><br>
			<input type="button" value="전송" onclick="send(this.form);">
		</form>
		<p id="name_output"></p>
		<p id="age_output"></p>
		<p id="email_output"></p>
		<label>Return: </label><label id="resultLbl"></label>
	</body>
</html>