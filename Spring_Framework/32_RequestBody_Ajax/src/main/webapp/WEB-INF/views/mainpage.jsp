<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	<title>ajax</title>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/resources/js/jquery.js"></script>
	<script>
		//object형을 serialize하는 함수
		$.fn.serializeObject = function() {
			var o = {};
			var a = this.serializeArray();
			$.each(a, function() {
				if (o[this.name]) {
					if (!o[this.name].push) {
						o[this.name] = [ o[this.name] ];
					}
					o[this.name].push(this.value || '');
				} else {
					o[this.name] = this.value || '';
				}
			});
			return o;
		};
	
		//폼을 그대로 넘기기(Json으로 넘기는 것이 아닌 파라미터로 넘김)
		function send_form(f) {
			alert($("#userForm").serialize());
			$.ajax({
				url : "join.do",
				type : "GET",
				data : $("#userForm").serialize(), //serialize() : 폼 객체를 serialize하여 문자열 형태로 넘긴다.
				success : function(data) {
					document.getElementById("name_output").innerHTML = data.name;
					document.getElementById("age_output").innerHTML = data.age;
					document.getElementById("email_output").innerHTML = data.email;
				},
				error : function() {
					alert("error");
				}
			});
		}
		//object를 json으로 바꾸어 넘기기
		function send_obj_json(f) {
			var obj = {
				name : f.name.value.trim(),
				age : f.age.value.trim(),
				email : f.email.value.trim()
			}
			$.ajax({
				type : 'POST',
				contentType : 'application/json; charset=utf-8;',
				url : 'join.do',
				dataType : 'json',
				//JSON.stringify() : JSON타입을 String 객체로 변환시켜주는 역할을 한다.
				//서버쪽으로 데이터를 넘길때,  String객체로 변환시켜주기 않으면 URL의 get 파라미터 형식처럼 넘겨버린다.
				data : JSON.stringify(obj),
				success : function(data) {
					document.getElementById("name_output").innerHTML = data.name;
					document.getElementById("age_output").innerHTML = data.age;
					document.getElementById("email_output").innerHTML = data.email;
				},
				error : function() {
					alert("error");
				}
			});
		}
		//폼을 json형태로 넘기기
		function send_form_json(f) {
			alert("onclick3");
			var form = $("#userForm").serializeObject(); //폼 객체를 Object 문자열 형태(json)로 변환
			$.ajax({
				type : 'POST',
				contentType : 'application/json; charset=utf-8;',
				url : 'join.do',
				dataType : 'json',
				//JSON.stringify() : JSON타입을 String 객체로 변환시켜주는 역할을 한다.
				//서버쪽으로 데이터를 넘길때,  String객체로 변환시켜주기 않으면 URL의 get 파라미터 형식처럼 넘겨버린다
				data : JSON.stringify(form),
				success : function(data) {
					document.getElementById("name_output").innerHTML = data.name;
					document.getElementById("age_output").innerHTML = data.age;
					document.getElementById("email_output").innerHTML = data.email;
				},
				error : function() {
					alert("error");
				}
			});
		}
	</script>
</head>
<body>
	<form name="userForm" id="userForm">
		<input value="이름 입력" name="name" id="name"><br> <input
			value="나이 입력" name="age" id="age"><br> <input
			value="이메일 입력" name="email" id="email"><br> <input
			id="btn" type="button" value="폼 전송" onclick="send_form(this.form);">
		<input id="btn2" type="button" value="obj type에 담아 json으로 전송"
			onclick="send_obj_json(this.form);"> <input id="btn3"
			type="button" value="폼을 json으로 변환하여 전송"
			onclick="send_form_json(this.form);">
	</form>

	<p id="name_output"></p>
	<p id="age_output"></p>
	<p id="email_output"></p>
</body>
</html>