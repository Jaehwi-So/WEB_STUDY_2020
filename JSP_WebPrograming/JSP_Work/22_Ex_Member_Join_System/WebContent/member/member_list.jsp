<!-- 서블릿에서 실행. -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!-- JSTL 라이브러리 등록 -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>회원 관리 브라우저</title>
		<script type = "text/javascript" src = "../js/httpRequest.js"></script> <!-- Ajax사용을 위한 js파일, (../ : 폴더를 빠져나옴) -->
		<script type="text/javascript">
			function del( idx ){
				var c_pwd = prompt("비밀번호를 입력해주세요");
				//member_del.do?idx=1
				var url = "member_del.do";
				var param = "idx=" + idx + "&c_pwd=" + c_pwd;
				sendRequest(url, param, resultFn, "GET");
			}

			function resultFn(){
				if(xhr.readyState == 4 && xhr.status == 200){
					var data = xhr.responseText;	//xhr.responseText : html 문서 형태로 값이 반환된다.
					var json = eval(data);	//실제 json형으로 바꾼다.
					if(json[0].param == "yes"){
						alert("삭제완료");
					}
					else if(json[0].param == "pwd_error"){
						alert("비밀번호 불일치");
					}
					else{
						alert("삭제실패. 관리자에게 문의하세요.");
					}
					
					//삭제 후 목록 갱신
					location.href = "member_list.do";	//해당 서블릿 매핑으로 이동
				}
			}
			
		</script>
	</head>
	<body>
		<table border = "1" align = "center">
			<tr>
				<td colspan = "7" style="text-align: center; background-color:black; color: white;">
					회원 목록
				</td>			
			</tr>
			<tr>
				<td colspan = "7" style="text-align: center">
					<input type = "button" value = "회원가입" onclick = "location.href='member_insert_form.jsp'">
				</td>			
			</tr>
			
			<tr>
				<th>회원번호</th>
				<th>이름</th>
				<th>아이디</th>
				<th>비밀번호</th>
				<th>이메일</th>
				<th>주소</th>
				<th>비고</th>
			</tr>
			
			<c:forEach var = "vo" items = "${list}"> <!-- requestScope에 저장된 list -->
				<tr>
					<td>${vo.idx}</td>
					<td>${vo.name}</td>
					<td>${vo.id}</td>
					<td>${vo.pwd}</td>
					<td>${vo.email}</td>
					<td>${vo.addr}</td>
					<td>
						<input type = "button" value = "삭제" onclick = "del(${vo.idx});">
					</td>
				</tr>
			</c:forEach>
		</table>
	</body>
</html>