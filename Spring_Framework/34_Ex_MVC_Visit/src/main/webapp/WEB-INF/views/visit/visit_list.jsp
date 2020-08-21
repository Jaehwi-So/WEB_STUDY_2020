<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
     
    
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/visit.css"></link>	<!-- 외부 css참조 -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/httpRequest.js"></script>	<!-- Ajax사용위한 js참조 -->
		<!-- pageContext를 통해 webapp 경로 참조 -->
		<script type="text/javascript">
			//삭제 메서드
			function del(f){
				var pwd = f.pwd.value;	//원본 비밀번호
				var c_pwd = f.c_pwd.value;	//사용자가 입력받은 비밀번호
				if(pwd != c_pwd){
					alert("비밀번호 불일치");
					return;
				}
				if(!confirm("정말로 삭제하시겠습니까?")){
					return;
				}
				
				//삭제를 원하는 게시물의 idx를 서버로 전달
				var idx = f.idx.value;
				var url = "delete.do";
				var param = "idx=" + idx;
				sendRequest(url, param, resultFn, "GET");
				
			}
			//삭제 후 돌아오는 콜백 메서드
			function resultFn(){
				if(xhr.readyState == 4 && xhr.status == 200){
					var data = xhr.responseText;
					var json = eval(data);
					
					if(json[0].result == "no"){
						alert("삭제실패");
						return;
					}
					alert("삭제성공");
					location.href="list.do";
				}
			}
			//수정
			function modify(f){
				var pwd = f.pwd.value;	//원본 비밀번호
				var c_pwd = f.c_pwd.value; //사용자 입력비밀번호
				if(pwd != c_pwd){
					alert("비밀번호를 확인하세요");
					return;
				}
				f.method = "post";
				f.action = "modify_form.do";
				f.submit();
			}
			
		</script>
	</head>
	<body>
		<div id="main_box">
			<h1>:::방명록 리스트:::</h1>
			
			<div align="center">
				<input type="button" value="글쓰기" 
				       onclick="location.href='insert_form.do'">
			</div>
			
			<c:forEach var="vo" items="${list}">
				
				<div class="visit_box">
					<div class="type_content">
						${ vo.content }<br>
						<c:if test="${vo.filename ne 'no_file'}">
							<img src="${pageContext.request.contextPath}/resources/upload/${vo.filename}" width="200px">
						</c:if>
					</div>
					<div class="type_name">작성자:${ vo.name }</div>
					<div class="type_regdate">작성일:${ vo.regdate }</div>			
					<div>
						<form>
							<input type="hidden" name="idx" value="${vo.idx}">
							<input type="hidden" name="pwd" value="${vo.pwd }">
							비밀번호 <input type="password" name="c_pwd">
							<input type="button" value="수정" onclick="modify(this.form);">
							<input type="button" value="삭제" onclick="del(this.form);">
						</form>
					</div>
				</div>
				
			</c:forEach>
			
		</div>
	</body>
</html>










