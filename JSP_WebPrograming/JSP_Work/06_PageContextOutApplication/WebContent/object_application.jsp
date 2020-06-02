<%@page import="java.io.IOException"%>
<%@page import="java.io.InputStreamReader"%>
<%@page import="jdk.internal.org.objectweb.asm.tree.TryCatchBlockNode"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!-- 
# Application
특정 웹 어플리케이션에 포함된 모든 JSP 페이지는 하나의 Application객체를 공유한다.
웹 전반에 걸쳐서 사용되는 정보를 담고 있다. 
기능으로는 초기화 파라미터를 읽어오기, 서버 정보 읽어오기, 로그 메시지 기록하기, 자원 접근 등이 있다.
 -->
<html>
	<head>
		<meta charset="UTF-8">
		<title>기본 객체 Application</title>
	</head>
	<body>
		<h1>== 서버 정보 읽어오기 ==</h1>
		<p>
		서버 정보 : <%= application.getServerInfo() %><br>
		서블릿 규약 마이너 버전 : <%= application.getMinorVersion()%><br>
		서블릿 규약 메이저 버전 : <%= application.getMajorVersion()%><br>
		</p>
		
		<h1>== 로그 기록하기 ==</h1>
		<p>
		로그 기록: <% application.log("로그 기록"); %><br>
		</p>
		
		<h1>== 자원 접근하기 ==</h1>
		<p>
		절대 경로 얻기: <%= application.getRealPath("object_application.jsp") %><br>
		경로에 해당하는 자원을 얻을 수 있는 URL 얻기: <%= application.getResource("object_application.jsp")%><br>
		<hr>
		<h1>== 경로에 해당하는 자원으로부터 데이터 읽어오기==</h1>
		<%
			char[] buf = new char[128];
			int len = -1;
			try(InputStreamReader br = new InputStreamReader(
					application.getResourceAsStream("object_out.jsp"), "UTF-8")){	
				//getResourceAsStream()을 통하여 해당 경로의 자원에 접근 가능한 스트림을 연다. 
				while((len = br.read(buf)) != -1){
					out.print(new String(buf, 0, len));
				}
			}catch(IOException e){
				out.println("예외발생");
			}
		%>
		</p>
	</body>
</html>