<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	<title>Ajax를 활용한 애국가 목록</title>
	<style>
		#content{
			width:480px;
			height:400px;
			background-color:silver;
			color:blue;
			border-style : outset;
			border-color: navy;
			border-width: 10px;
			padding : 60px;
		}
	</style>
	<script>
		function send(){
			var choice = document.getElementById("choice").value;
			alert(choice + "절 조회");
			var url = "aegookga_ajax.jsp"
			var param = "choice=" + choice;
			
			sendRequest(url, param, resultFn, "GET");	/* 1)Ajax로 HTML문서 요청  */
		}
		
		function resultFn(){
			/* 2)콜백 메서드 호출 */
			if(xhr.readyState == 4 && xhr.status == 200){	/*3)Ajax 요청결과가 성공인지 체크 */
				var text = xhr.responseText;	/* 4)HTML문서 형태로 반환되어 text변수에 저장. */
				document.getElementById("content").innerHTML = text;/* 5)현재 HTML문서 변경 */
			}
		}
	</script>

	<script src="../js/httpRequest.js"></script>
	</head>
	<body>
		<div align="center">
			<hr width = "600px" color = "navy">
			<div style="width:600px; height:50px; background-color:navy">
				<h1 style="color:white">애국가</h1>
			</div>
			<hr width = "600px" color = "navy">
			<select id="choice">
				<option value = "1">1절</option>
				<option value = "2">2절</option>
				<option value = "3">3절</option>
				<option value = "4">4절</option>
			</select>
			<input type="button" value="보기" onclick="send();">
			<hr width = "600px" color = "navy">
			<div id="content">
			</div>
		</div>
	</body>
</html>