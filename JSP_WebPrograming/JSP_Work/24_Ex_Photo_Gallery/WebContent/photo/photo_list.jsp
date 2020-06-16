<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>사진 갤러리</title>
		<link rel="stylesheet" href="../css/list_css.css">
		<script src = "../js/httpRequest.js"></script>
		<script>
			function del(f){
				var idx = f.idx.value.trim();	//사진 일련번호
				var pwd_ck = f.pwd_ck.value.trim();	//설정된 비밀번호
				var pwd_input = f.pwd_input.value.trim();	//입력한 비밀번호
				if(pwd_ck != pwd_input){
					alert("비밀번호가 일치하지 않습니다");
					return;
				}
				//ajax를 통해 파라미터 서버로 전송. 비동기 통신
				var url = "photo_del.do"
				var param = "idx=" + idx;
				sendRequest(url, param, resultFn, "GET");
				alert("삭제");
			}
			
			function resultFn(){
				if(xhr.readyState == 4 && xhr.status == 200){
					var data = xhr.responseText;	//xhr.responseText : html 문서 형태로 값이 반환된다.
					var json = eval(data);
					if(json[0].param == "yes"){
						alert("삭제완료");
					}
					else{
						alert("삭제실패. 관리자에게 문의하세요.");
					}			
					//삭제 후 목록 갱신
					location.href = "list.do";	//해당 서블릿 매핑으로 이동			
				}		
			}
		</script>
	</head>
	<body>
		<div id = "main_box">
			<h1> === Photo Gallery===</h1>
			<div align = "center" style="margin:10px">
				<input type = "button" value = "사진등록" onclick="location.href='insert_form.do'">
			</div>
			<div id = "photo_box">
				<!-- 리스트가 비어있을 시 -->
				<c:if test="${ empty list }">
					<div align = "center">등록된 사진이 없습니다</div>
				</c:if>
				<c:forEach var="vo" items="${list}">
					<div class = "photo_type">
						<img src = "../upload/${vo.filename}">
						<div class="title">${vo.title}</div>
						<form>
							<input type = "hidden" name = "idx" value="${vo.idx}">
							<input type = "hidden" name = "pwd_ck" value="${vo.pwd}">
							<div align="center">
								<input type="password" name="pwd_input" size = "10">
								<input type="button" value="삭제" onclick="del(this.form);">
							</div>
						</form>
					</div>
				</c:forEach>
			</div>
		</div>
	</body>
</html>