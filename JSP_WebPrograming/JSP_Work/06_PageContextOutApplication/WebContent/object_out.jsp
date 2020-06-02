<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--
# Out 기본객체
웹 브라우저에 데이터를 전송하는 출력 스트림으로서 사용된다.
JSP 페이지가 생성하는 모든 내용은 out 기본객체를 통해 전송된다.
HTML 코드와 텍스트와 같은 비스크립트 요소들 역시 out 객체에 전달된다. 
JSP가 사용하는 버퍼는 실제로는 out객체가 사용하고 있는 내부 버퍼이다. -->
<html>
	<head>
	<meta charset="UTF-8">
	<title>기본객체 out</title>
	</head>
	<body>
		<!-- Out 객체를 통한 출력 -->
		<% out.print("hello world"); %>
		<% out.newLine(); %>
		<% out.println("hello world"); %>
		
		<!-- Out 객체의 버퍼 관련 메서드 -->
		버퍼 크기 : <%= out.getBufferSize() %><br>
		남은 버퍼 크기 : <%= out.getRemaining() %><br>
		버퍼 플러시 : 버퍼의 내용을 클라이언트에게 전달 <% out.flush(); %><br>
		버퍼의 내용 비움. 버퍼 플러시를 한 경우 IOException 발생 : <% //out.clear();%><br>
		버퍼의 내용 비움. 플러시한 경우에도 예외처리 발생하지 않음 : <% out.clearBuffer(); %><br>
		버퍼가 다 찼을 때 자동으로 플러시 할 경우 true를 return <% out.isAutoFlush(); %><br>
		
	</body>
</html>