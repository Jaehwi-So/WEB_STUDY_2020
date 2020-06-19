<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<script type="text/javascript" src="js/httpRequest.js"></script>
	<script type="text/javascript">
		function send( f ){
			
			var id = f.id.value.trim();
			var pwd = f.pwd.value.trim();
			
			if( id == '' ){
				alert("아이디를 입력하세요");
				return;
			}
			
			if( pwd == '' ){
				alert("비밀번호를 입력하세요");
				return;
			}
			
			var url = "login.do";
			//encodeURIComponent() : 특수문자가 포함되어 있는경우라도
			//파라미터로 정상전달 할수 있도록 하는 메서드
			var param = "id=" + encodeURIComponent(id) + 
						"&pwd=" + encodeURIComponent(pwd);
			sendRequest( url, param, resultFn, "POST" );
		}
		
		function resultFn(){
			if( xhr.readyState == 4 && xhr.status == 200){
				
				var data = xhr.responseText;
				var json = eval(data);
				
				if( json[0].param == 'no_id' ){
					alert("아이디가 존재하지 않습니다");
					
				}else if( json[0].param == 'no_pwd'){
					alert("비밀번호가 일치하지 않습니다");
					
				}else if( json[0].param == 'clear' ){
					location.href = "main_content.jsp";
				}
				
			}
		}
	</script>
</head>
<body>
	<form>
		<table border="1" align="center">
			<caption>:::로그인:::</caption>
			
			<tr>
				<th>아이디</th>
				<td><input name="id"></td>
			</tr>
			
			<tr>
				<th>비밀번호</th>
				<td><input name="pwd" type="password"></td>
			</tr>
			
			<tr>
				<td colspan="2" align="center">
					<input type="button" value="로그인"
					              onclick="send(this.form);">
					
					<!-- 하나의 form태그에 있는 input의 모든 value를 초기화 -->              
					<input type="reset" value="취소">              
				</td>
			</tr>
		</table>
	</form>
</body>
</html>




















