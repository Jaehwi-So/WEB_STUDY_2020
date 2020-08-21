<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<script type="text/javascript">
		function send_check() {
			var f = document.f;//폼태그를 이름으로 검색
			
			//유효성 체크
			if( f.subject.value.trim() == '' ){
				alert("제목은 반드시 입력해야 합니다");
				return;
			}
			
			if( f.name.value.trim() == '' ){
				alert("작성자는 반드시 입력해야 합니다");
				return;
			}
			
			if( f.content.value.trim() == '' ){
				alert("내용은 한글자 이상 입력해야 합니다");
				return;
			}
			
			if( f.pwd.value.trim() == '' ){
				alert("비밀번호는 반드시 입력해야 합니다");
				return;
			}
			
			f.submit();
			
		}
	</script>


</head>
<body>
	<form name="f" method="post" action="insert.do">
		<table width="750" border="1" style="border-collapse: collapse;">
			<caption>:::새글 등록:::</caption>
			
			<tr>
				<td width="120" height="25">제목</td>
				<td colspan="3">
					<input name="subject" style="width:620px;">
				</td>
			</tr>
			
			<tr>
				<td width="120" height="25">작성자</td>
				<td colspan="3">
					<input name="name" style="width:620px;">
				</td>
			</tr>
			
			<tr>
				<td width="120" height="25">내용</td>
				<td colspan="3">
					<textarea name="content" rows="10" cols="84"></textarea>
				</td>
			</tr>
			
			<tr>
				<td width="120" height="25">비밀번호</td>
				<td colspan="3">
					<input name="pwd" type="password" style="width:620px;">
				</td>
			</tr>
			
		</table>
		
		<table width="750">
			<tr>
				<td height="10"></td>
			</tr>
			
			<tr>
				<td align="center">
					<!-- a태그가 아니면 send_check(this.form);사용 못함-->
					<img src="${pageContext.request.contextPath}/resources/img/btn_reg.gif"
						 onclick="send_check();">
						 
					<img src="${pageContext.request.contextPath}/resources/img/btn_back.gif"
						 onclick="location.href='list.do'">	 
				</td>
			</tr>
		
		</table>
	
	</form>
</body>
</html>