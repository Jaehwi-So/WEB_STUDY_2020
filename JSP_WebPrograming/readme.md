# JSP(Java Server Page)
## JSP를 통한 웹 프로그래밍을 
### 주제별로 상세한 주석을 달아놓은 실습예제 프로젝트를 올려 둔 Repository
-----------------------------

# 웹과 웹 프로그래밍의 개념
### 1. URL (Uniform Resource Locator)
	* 웹 브라우저의 주소줄에 표시되는 경로
	* https://search.naver.com/search.naver?where=post&sm=tab_jum&query=get+post
		- 프로토콜 (http) : 웹 브라우저가 서버와 내용을 주고받을 때 사용하는 네트워크 규약
		- 서버 이름 : search.naver.com. 웹 페이지를 요청할 서버의 이름. 도메인 이름이나 IP주소를 입력할 수 있다.
		- 경로 : /search.naver 웹 페이지의 상세 주소.
		- 쿼리 문자열(파라미터) : ?where=post&sm=tab_jum&query=get+post 추가로 서버로 보내는 데이터에 해당한다. 넘겨받은 데이터는 where, sm, query 파라미터가 있다.

### 2. 웹 브라우저와 웹 서버의 통신 과정
	1. 웹 브라우저는 DNS(Domain name server)에 도메인 이름(www.xxx.xxxx)에 대한 IP주소 요청
	2. 웹 서버의 IP주소를 웹 브라우저에게 응답
	3. 웹 브라우저는 알아낸 IP주소에 해당하는 웹 서버에 웹 페이지 요청
	4. 웹 브라우저(클라이언트)에 HTML 응답
	- 포트 번호 사용 : 여러개의 서버와의 연결 시 각 서버의 프로그램끼리 구분하기 위함

### 3. HTTP 프로토콜
	- 클라이언트가 웹 페이지를 요청할 시 서버는 HTML이라고 불리는 웹 표준의 형태로 웹 브라우저에 전송한다.
	- 웹 브라우저가 웹 서버에 HTML을 요청하거나 웹 서버가 웹 브라우저에 HTML과 같은 것을 전송 할 때 사용할 데이터 규약.
	- 웹서버와 웹 브라우저는 HTTP 프로토콜을 이용하여 데이터를 주고받음.

### 4. JSP란?
	- 클라이언트 웹 기술인 HTML과 자바스크립트 등에서 사용자로부터 데이터를 넘겨받아 서버단에서 사용하는 서버 웹 기술
	- 동적 페이지를 작성하는데 사용되는 자바 표준 기술.
	- WAS(Web Application Server)에 해당하는 Tomcat의 설치가 필요.
	- WAS는 JSP 페이지에 대한 클라이언트의 요청이 들어올 때 
	JSP를 직접 실행하는 것이 아닌 JSP->자바 코드로 *변환* 후 자바 코드->서블릿 클래스로 *컴파일* 하여 생성한 서블릿을 실행한다.
	- JSP 페이지는 응답 결과를 출력 버퍼(buffer)에 임시로 저장해 둔 후 한 번에 웹 브라우저에 전송한다.
	- 데이터 전송 성능 향상과 에러 페이지 처리 기능, 버퍼가 다 차기 전까지 헤더 변경이 가능하다는 장점이 있다.
### 5. 웹 어플리케이션의 구성
WEB-INF : 웹 어플리케이션의 설정 정보를 담고 있는 파일들과 라이브러리 등이 위치한다.
### 6. 서블릿
- Servlet(server + let)
- 서버에서 실행되는 서비스 객체. 사용자의 요구사항을 제공함.
- 웹 응용프로그램을 만드는 JAVA기반의 기술. 실행 결과값을 HTML형식으로 돌려준다.
- HTML의 정적인 문제를 해결할 수 있는 동적인 특징을 가진다.
- 자바언어로 작성되어 자바의 일반적인 특징을 모두 가지고 있다.
- 스레드로 처리된다. 즉 동시다발적인 사용자의 접속과 요구에 대한 응답이 용이하다

-------------------------
## INDEX

1. JSP 웹 프로그래밍의 정의
2. JSP 페이지 요소
	- 페이지 디렉티브
	- 스크립트 요소
		+ 스크립트 릿
		+ 선언부
		+ 표현식
3. JSP 주석, 스크립트 릿 활용
4. 서블릿
	- 서블릿의 URL Mapping
	- 폼 데이터를 서버로 전송하기 
5. Request, Response 기본 객체
	- HTTP method
	- 데이터 교환
6. PageContext, Out, Application 기본 객체
7. 파라미터의 형식과 전달
8. 웹 어플리케이션의 Scope
	- PAGE, REQUEST, SESSION, APPLICATION
	- 바인딩과 포워딩
		+ setAttribute(), getAttribute(), RequestDispatcher
10. VO(Value Object)
11. JDBC, Model1 방식에서의 JDBC
12. DAO(DataAccessObject)
	- Template 활용
- ### 간이 프로젝트 : 12. 회원 관리 웹 시스템
- ### 간이 프로젝트 : 12. 학생 성적관리 웹 시스템
13. EL 표기법
14. EL 표기법
	- 객체
	- 스코프
	- 연산
	- 컬렉션
	- 메서드
	- 람다식
15. JSTL
16. JSTL
- Core c:
	* set, remove
	* forEach
		+ var, begin, end, step, items
	* if
		+ choose, when, otherwise
	* url
	* redirect
- Format fmt:
	* formatDate
	* timeZone
	* formatNumber
	* setLocale
	* requestEncoding
	* setBundle
	* message
17. Ajax
18. JSON
	- XMLHttpRequest
	- Jquery Ajax
21. MVC 패턴
	- Model 2
	- Model, View, Controller
- ### 간이 프로젝트 : 22. 회원 가입, 관리 시스템(Model2 ver)
23. 웹 상에 파일 업로드
	- MultipartRequest
- ### 간이 프로젝트 : 24. 사진 갤러리
25. 쿠키
26. 세션
- ### 간이 프로젝트 : 27. 로그인, 로그아웃
28. MyBatis를 이용한 JDBC
	- DBCP( database connection pool )
	- mapper
- ### 간이 프로젝트 : 29. 쇼핑몰, 장바구니
- ### 간이 프로젝트 : 30. 게시판
	- 페이징 처리
