<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page session = "true" %>	<!-- 세션을 사용하기 위하여 디렉티브 설정. 기본값이 true이므로 설정안해도 된다. -->
<!-- 
서버 세션을 사용하면 클라이언트의 상태를 저장할 수 있다. 관련이 없는 페이지들간의 연관성을 설정 가능하다.
쿠키와 다른 점은 웹 브라우저에 저장하는 것이 아닌 서버에 값을 저장한다는 점이다. 
이를 통하여 로그인 등 사용자 정보를 유지하기 위한 목적으로 세션을 사용한다. -->
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>세션</title>
		<script>
		function session_log(){
			location.href="sesslog.do";
		}
		</script>
	</head>
	<body>
		<input type="button" value="세션설정" onclick="session_log();"></button>
		<br>
		<a href="SecondPage.jsp">다음 페이지로 이동</a>
	</body>
</html>