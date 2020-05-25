<!-- 
# 웹과 웹 프로그래밍의 개념
1) URL (Uniform Resource Locator) : 웹 브라우저의 주소줄에 표시되는 경로
https://search.naver.com/search.naver?where=post&sm=tab_jum&query=get+post
1-1) 프로토콜 (http) : 웹 브라우저가 서버와 내용을 주고받을 때 사용하는 네트워크 규약
1-2) 서버 이름 : search.naver.com. 웹 페이지를 요청할 서버의 이름. 도메인 이름이나 IP주소를 입력할 수 있다.
1-3) 경로 : /search.naver 웹 페이지의 상세 주소.
1-4) 쿼리 문자열 : ?where=post&sm=tab_jum&query=get+post 추가로 서버로 보내는 데이터에 해당한다. 
넘겨받은 데이터는 where, sm, query 파라미터가 있다.

2) 웹 브라우저와 웹 서버의 통신 과정
a. DNS(Domain name server)에 도메인 이름(www.xxx.xxxx)에 대한 IP주소 요청
b. 웹 서버의 IP주소를 클라이언트에게 응답
c. 알아낸 IP주소에 해당하는 웹 서버에 웹 페이지 요청
d. 웹 브라우저(클라이언트)에 HTML 응답

포트 번호 사용 : 여러개의 서버와의 연결 시 각 서버의 프로그램끼리 구분하기 위함

3) HTTP 프로토콜
클라이언트가 웹 페이지를 요청할 시 서버는 HTML이라고 불리는 웹 표준의 형태로 웹 브라우저에 전송한다.
웹 브라우저가 웹 서버에 HTML을 요청하거나 웹 서버가 웹 브라우저에 HTML과 같은 것을 전송 할 때 사용할 데이터 규약.
웹서버와 웹 브라우저는 HTTP 프로토콜을 이용하여 데이터를 주고받음.
 -->

<!-- # JSP(Java Server Page) # --
클라이언트 웹 기술인 HTML과 자바스크립트 등에서 사용자로부터 데이터를 넘겨받아 서버단에서 사용하는 서버 웹 기술
동적 페이지를 작성하는데 사용되는 자바 표준 기술.



 -->

<!-- jsp 헤더 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 
<!-- 스크립트 릿 -->   
<%
	/*스크립트 릿(Scriptlet) : jsp에서 자바코드를 사용하고자 할 때 지정하는 영역 */
	//JSP에서 서블릿의 내장 객체인 request 사용 가능. request는 서블릿의 객체지만, 실행 구조상 jsp가 서블릿으로 변환되어 출력되기 때문이다.
	String ip = request.getRemoteAddr(); // 접속자의 ip주소
	String name = "홍길동";
	
%>	
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>JSP 시작</title>
	</head>
	<body>
		<p>&lt;%@ 내용 %&gt; = jsp 헤더 : 전송시 인코딩, 페이지 인코딩, import문장등을 설정하기 위해 반드시 필요한 영역</p>
		<p>	&lt;% 자바코드 %&gt; = 스크립트 릿 : JSP에서 자바코드를 사용하고자 할 때 지정하는 영역</p>
		<p>	&lt;%= 변수명 %&gt; = 스크립트릿의 변수를 출력하는 출력코드</p>
		<p>	&lt;%= 변수명; %&gt; 변수명 뒤에 세미콜론(;)을 사용하지 않는다.</p>
		<%= ip %>님 방문을 환영합니다<br>
		<%= name %>님 반갑습니다.
	</body>
</html>