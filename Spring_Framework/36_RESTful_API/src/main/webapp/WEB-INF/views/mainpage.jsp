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
		
		//목록전체 조회
		function select_list(f){
			$.ajax({
				type : 'GET',
				url : 'user/',
				success : function(data) {
					alert("success");
					var inner = "<table>";
					$.each(data, function(i, v) {
						inner += "<tr>"
						inner += "<td>" + v.idx + "</td>";
						inner += "<td>" + v.name + "</td>";
						inner += "<td>" + v.age + "</td>";
						inner += "<td>" + v.email + "</td>";
						inner += "</tr>";
					}); 
					inner += "</table>";
					document.getElementById("output").innerHTML = inner;
				},
				error : function() {
					alert("error");
				}
			});
		}
		
		//목록 하나 조회
		function select_one(f){
			var idx = f.idx.value;
			$.ajax({
				type : 'GET',
				url : 'user/' + idx,
				success : function(data) {
					alert("success");
					var inner = ""
					inner += data.idx + "/";
					inner += data.name + "/";
					inner += data.age + "/";
					inner += data.email;
					document.getElementById("output").innerHTML = inner;
				},
				error : function() {
					alert("error");
				}
			});
		}
		
		//목록 하나 삭제
		function delete_one(f){
			var idx = f.idx.value;
			$.ajax({
				type : 'DELETE',
				url : 'user/' + idx,
				success : function(data) {
					alert("success");
					var inner = data.result;
					document.getElementById("output").innerHTML = inner;
				},
				error : function() {
					alert("error");
				}
			});
		}
		
		//insert / POST
		function insert(f) {
			var form = $("#insert_form").serializeObject(); //폼 객체를 Object 문자열 형태(json)로 변환
			$.ajax({
				type : 'POST',
				contentType : 'application/json; charset=utf-8;',
				url : 'user/',
				dataType : 'json',
				data : JSON.stringify(form),
				success : function(data) {
					alert("success");
					var inner = data.result;
					document.getElementById("output").innerHTML = inner;;
				},
				error : function() {
					alert("error");
				}
			});
		}
		
		//update / POST
		function update(f) {
			var form = $("#update_form").serializeObject(); //폼 객체를 Object 문자열 형태(json)로 변환
			$.ajax({
				type : 'PUT',
				contentType : 'application/json; charset=utf-8;',
				url : 'user/',
				dataType : 'json',
				data : JSON.stringify(form),
				success : function(data) {
					alert("success");
					var inner = data.result;
					document.getElementById("output").innerHTML = inner;
				},
				error : function() {
					alert("error");
				}
			});
		}
	</script>
</head>
<body>
	<input type="button" value="회원 목록 조회" onclick="select_list();">
	
	<hr>
	
	<form name="select_form" id="select_form">
		<input value="회원번호 입력" name="idx" id="idx"><br> 
		<input id="btn_select" type="button" value="회원 조회" onclick="select_one(this.form);">
	</form>
	
	<hr>
	
	<form name="delete_form" id="delete_form">
		<input value="회원번호 입력" name="idx" id="idx"><br> 
		<input id="btn_delete" type="button" value="회원 삭제" onclick="delete_one(this.form);">
	</form>
	
	<hr>
	
	<form name="insert_form" id="insert_form">
		<input value="이름 입력" name="name" id="name"><br> 
		<input value="나이 입력" name="age" id="age"><br> 
		<input value="이메일 입력" name="email" id="email"><br> 
		<input id="btn_insert" type="button" value="회원 추가" onclick="insert(this.form);">
	</form>
	
	<hr>
	
	<form name="update_form" id="update_form">
		<input value="회원번호 입력" name="idx" id="idx"><br> 
		<input value="이름 입력" name="name" id="name"><br> 
		<input value="나이 입력" name="age" id="age"><br> 
		<input value="이메일 입력" name="email" id="email"><br> 
		<input id="btn_update" type="button" value="회원정보 수정" onclick="update(this.form);">
	</form>
	
	<hr>
	<div id="output"></p>
</body>
</html>