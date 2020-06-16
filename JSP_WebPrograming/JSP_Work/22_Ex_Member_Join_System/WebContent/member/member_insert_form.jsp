<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>회원가입 폼</title>
		<script type = "text/javascript" src = "../js/httpRequest.js"></script>
		<script>
			var b_idCheck = false; //아이디 중복여부 체크
			
			//가입완료 메서드. db에 데이터 추가
			function send(f){
				var id = f.id.value.trim();
				var pwd = f.pwd.value.trim();
				var name = f.name.value.trim();
				var email = f.email.value.trim();
				var addr = f.addr.value.trim();
				
				if(id == ""){
					alert("아이디를 입력하세요");
					return;
				}
				if(pwd == ""){
					alert("비밀번호를 입력하세요");
					return;
				}
				if(name == ""){
					alert("이름을 입력하세요");
					return;
				}
				if(!b_idCheck){
					alert("아이디 중복체크를 해주세요");
					return;
				}
				
				f.action = "insert.do";
				f.method = "post"; /* 개인정보 보호 */
				f.submit();
			}
			
			//아이디 중복체크 메서드
			function check_id(){
				var id = document.getElementById("id").value.trim();
				if(id == ""){
					alert("아이디를 입력하세요");
					return;
				}
				
				//아이디를 Ajax를 통해서 서버로 전송(브라우저가 새로고침 되지 않고 DB접근 후 콜백메서드 호출)
				var url = "check_id.do";
				var param = "id="+id;
				sendRequest(url, param, resultFn, "GET");
			}
			
			//중복체크 콜백메서드
			function resultFn(){
				if(xhr.readyState == 4 && xhr.status == 200){
					var data = xhr.responseText;
					//[{'result : 'no'}, {'id' : 'aaa'}] JSON형태의 문자열이 넘어옴.
					
					//문자열을 실제 JSON타입으로 변경시킴.
					var json = eval(data);
					if(json[0].result == 'no'){
						alert(json[1].id + "는 이미 사용중입니다.")
						return;
					}
					
					alert(json[1].id + "는 사용 가능한 아이디입니다.");
					b_idCheck = true;
					//사용 가능한 아이디라면 변경이 불가능하도록 readOnly처리.
					document.getElementById("id").readOnly = true;
				}	
			}
			
		</script>
	</head>
	<body>
		<form action="">
			<table border="1" align="center">
				<tr>
					<th colspan="2" style="color:white; background-color:black;">회원 가입<th>
				</tr>
				<tr>
					<th>아이디</th>
					<td>
						<input name = "id" id = "id">
						<input type = "button" value = "중복 확인" onclick = "check_id();">
					</td>
				</tr>
				<tr>
					<th>비밀번호</th>
					<td>
						<input type = "password" name = "pwd">
					</td>
				</tr>
				<tr>
					<th>이름</th>
					<td>
						<input name = "name">
					</td>
				</tr>
				<tr>
					<th>이메일</th>
					<td>
						<input name = "email">
					</td>
				</tr>
				<tr>
					<th>주소</th>
					<td>
						<input name = "addr">
					</td>
				</tr>
				
				<tr>
					<td colspan = "2" align = "center">
						<input type = "button" value = "가입" onclick="send(this.form);">
						<input type = "button" value = "취소" onclick="location.href='member_list.do'"> <!-- 취소시 서블릿으로 이동. DB갱신이 필요하기 때문.-->
					</td>
				</tr>
			</table>
		</form>
	</body>
</html>