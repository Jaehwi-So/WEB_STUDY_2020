<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/httpRequest.js"></script>
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
				var url = "modify.do";
															/* 특수문자 인코딩 */
				var param ="idx=" + f.idx.value + "&name=" + encodeURIComponent(name) + "&content=" + encodeURIComponent(content) + "&pwd=" + encodeURIComponent(pwd);
				
				sendRequest(url, param, resultFn, "POST");											
			}//send()

			function resultFn(){			
				if(xhr.readyState == 4 && xhr.status == 200){
					var data = xhr.responseText;
					var json = eval(data);
	
					if(json[0].result == "no"){
						alert("수정실패");
						return;
					}
					alert("수정성공");
					location.href="list.do";
				}		
			}
		</script>
	</head>
	<body>
		<form>
			<input type="hidden" name="idx" value="${vo.idx}">	<!-- 게시글 식별을 위한 idx -->
			<table border="1" align="center">
				<caption>:::방명록 수정:::</caption>
				<tr>
					<th>작성자</th>
					<td><input name="name" value="${vo.name}"></td>
				</tr>
				<tr>
					<th>내용</th>
					<td><textarea name="content" rows="5" cols="50">${vo.content}</textarea></td>
				</tr>
				<tr>
					<th>비밀번호</th>
					<td><input name="pwd" type="password" value="${vo.pwd}"></td>
				</tr>
				<tr>
					<td colspan="2" align="center">
						<input type="button" value="수정하기" onclick="send(this.form)">
						<input type="button" value="목록보기" onclick="location.href='list.do'">
					</td>
				</tr>
			</table>
		</form>
	</body>
</html>