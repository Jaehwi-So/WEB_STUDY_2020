<%@page import="vo.MemberVO"%>
<%@page import="java.util.List"%>
<%@page import="dao.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<% 
	//회원목록 가져오기
	MemberDAO dao = MemberDAO.getInstance();
	List<MemberVO> member_list = dao.selectList();
%>    
    
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<style>
		caption{
			font-size: 20px;
			font-weight : 10px;
			color : white;
			background-color : white;
			border-color : black;
			margin : 3px;
			padding : 3px;
			border-style : solid;
			text-align : center;
			text-shadow : 3px 3px 3px black;
		}
	</style>
	<script type="text/javascript">
		function send( f ){
			
			var name = f.name.value.trim();
			var id = f.id.value.trim();
			var pwd = f.pwd.value.trim();
			var email = f.email.value.trim();
			var addr = f.addr.value.trim();
			
			
			if( name == '' ){
				alert("이름은 필수항목입니다");
				return;
			}
			
			var id_pattern = /^[0-9a-z]+$/;
			if( !id_pattern.test( id ) ){
				alert("아이디 형식이 올바르지 않습니다");
				return;
			}
			
			var em_pattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
			if( !em_pattern.test(email) ){
				alert("이메일을 다시한번 확인해 주십시오");
				return;
			}
			
			f.submit();
			
		}
		
		//삭제메서드
		function del( idx ){
			if( !confirm("정말로 삭제 하시겠습니까?") ){
				return;
			}
			
			location.href="member_del.jsp?idx=" + idx;
		}
		
	</script>
	</head>
	<body>
		<table border="1" align="center"> 
			<caption>:::회원목록:::</caption>
			
			<tr>
				<th>회원번호</th>
				<th>이름</th>
				<th>아이디</th>
				<th>비밀번호</th>
				<th>이메일</th>
				<th>주소</th>
				<th>비고</th>
			</tr>
			
			<% 
			for( int i = 0; i < member_list.size(); i++ ){
				MemberVO vo = member_list.get(i);
			%>
			
				<tr>
					<td><%= vo.getIdx() %></td>
					<td><%= vo.getName() %></td>
					<td><%= vo.getId() %></td>
					<td><%= vo.getPwd() %></td>
					<td><%= vo.getEmail() %></td>
					<td><%= vo.getAddr() %></td>
					
					<td>
						<input type="button" value="삭제" onclick="del('<%=vo.getIdx()%>');">
					</td>
				</tr>
			
			<% } %>
		</table>
		
		<div>
			<form action="member_register.jsp" method="post">
				
				<table border="1" align = "center">
					<caption>회원 가입</caption>
					
					<tr>
						<th>이름</th>
						<td><input name="name"></td>
					</tr>
					
					<tr>
						<th>아이디</th>
						<td><input name="id"></td>
					</tr>
					
					<tr>
						<th>비밀번호</th>
						<td><input name="pwd" type="password"></td>
					</tr>
					
					<tr>
						<th>이메일</th>
						<td><input name="email"></td>
					</tr>
					
					<tr>
						<th>주소</th>
						<td><input name="addr"></td>
					</tr>
					
					<tr>
						<td colspan="2" align="center">
							<input type="button" value="가입"
							       onclick="send( this.form );">
							       
							<input type="reset" value="취소">        
						</td>
					</tr>
					
				</table>
				
			</form>
		</div>	
	</body>
</html>











