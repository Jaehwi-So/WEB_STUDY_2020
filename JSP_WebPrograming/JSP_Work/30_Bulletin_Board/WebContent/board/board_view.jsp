<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<script type="text/javascript" src="../js/httpRequest.js"></script>

	<script type="text/javascript">
		function reply() {
			location.href="reply_form.do?idx=${vo.idx}&page=${param.page}";
		}
		
		function del() {
			if( confirm("게시글을 삭제 하시겠습니까?") ){
				var pwd = document.getElementById("c_pwd").value;
				
				//location.href는 get방식만 지원하므로 비밀번호를 그대로 노출하는것이
				//부담스러우므로 Ajax를 통해 post방식으로 파라미터를 전달하자!
				//location.href = "del.do?idx=${vo.idx}&pwd="+pwd;
				var url = "del.do?idx=${vo.idx}&pwd="+pwd;
				sendRequest(url, null, resultFn, "post");
				
			}
		}//del()
		
		function resultFn() {
			
			if( xhr.readyState == 4 && xhr.status == 200 ){
				var data = xhr.responseText;
				
				var json = eval(data);
				
				if( json[0].result == 'yes' ){
					alert("글을 삭제했습니다");
					location.href = "list.do?page=${param.page}";
				}else{
					alert("비밀번호 불일치");
					return;
				}
				
			}
			
		}
		
	</script>

</head>
<body>
	<form name="f" method="post">
		<table width="690" border="1" style="border-collapse:collapse;">
			<tr>
				<td width="120" height="25">제목</td>
				<td>${ vo.subject }</td>
			</tr>
			
			<tr>
				<td width="120" height="25">작성자</td>
				<td>${ vo.name }</td>
			</tr>
			
			<tr>
				<td width="120" height="25">작성일</td>
				<td>${ vo.regdate }</td>
			</tr>
			
			<tr>
				<td width="120">내용</td>
				<td style="padding:5px" width="570">
					<!-- 화면의 내용을 엔터값까지 그대로 표기 -->
					<pre>${ vo.content }</pre>
				</td>
			</tr>
			
			<tr>
				<td width="120">IP</td>
				<td>${ vo.ip }</td>
			</tr>
			
			<tr>
				<td width="120" height="25">비밀번호</td>
				<td>
					<input type="password" id="c_pwd">
				</td>
			</tr>
			
		</table>
		
		<table width="690">
			<tr>
				<td height="10"></td>
			</tr>
			
			<tr>
				<td>
					<!-- 목록보기 -->
					<img src="../img/btn_list.gif" 
						onclick="location.href='list.do?page=${param.page}'">
							
					<!-- 이 글에 댓글달기 -->
					<img src="../img/btn_reply.gif"
						onclick="reply();">
					     
					<!-- 수정 -->
					<img src="../img/btn_modify.gif"
						 onclick="modify();">  
						 
					<!-- 삭제 -->
					<img src="../img/btn_delete.gif"
					     onclick="del();">	    	
				</td>
			</tr>
		</table>
		
	</form>
</body>
</html>



















