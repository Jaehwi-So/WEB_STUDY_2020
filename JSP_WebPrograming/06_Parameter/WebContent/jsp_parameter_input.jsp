<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>한 JSP에서 다른 JSP로 parameter 전달하기</title>
		<script type="text/javascript">
			function send( f ){
				var name = f.m_name.value; /* 이름 입력상자 안에 있는 값 */
				var age = f.age.value;
				var tel = f.tel.value;
				
				//유효성 체크
				if( name == "" ){
					alert("이름을 입력하세요");
					f.m_name.focus(); /* focus() : m_name 입력창에 커서를 넘김 */
					return;
				}
				
				var pattern = /^[0-9]+$/;	//나이 정규식
				if(!pattern.test(age)){
					alert("나이는 정수로 입력하세요");
					f.age.focus(); 
					return;
				}
					
				if ( tel == "" ){
					alert("전화번호를 입력하세요");
					f.tel.focus(); 
					return;
				}
				
				f.action = "jsp_parameter_output.jsp";
				f.method = "GET"; /* 전달방식설정 */
				f.submit(); /* 폼 데이터를 action에서 지정한 JSP로 전송 */
			}
		</script>
	</head>
	<body>
		<form>
			이름 : <input name = "m_name"><br>
			나이 : <input name = "age"><br>
			전화 : <input name = "tel"><br>
			<input type = "button" value = "전송" onclick = "send(this.form);"> <!-- 클릭시 send 메서드에 parameter로 폼의 정보를 넘김 -->
		</form>
	</body>
</html>