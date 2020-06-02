<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		<!-- EL표기법을 이용한 연산. -->
		EL 산술 연산자<br>
		\${1 + 1} : ${ 1 + 1 }<br> <!-- \을 통해 \${ }로 EL표기법을 해제할 수 있음. 주석에도 유효하다. -->
		\${2 - 1} : ${ 2 - 1 }<br>
		\${2 * 3} : ${ 2 * 3 }<br>
		\${10 % 3} : ${ 10 / 3 }<br>	
		\${10 % 3} : ${ 10 % 3 } 또는 ${ 10 mod 3 }<br>	
		
		<hr>
		
		EL 비교 연산자<br>
		 <!-- 비교 연산자의 경우 문자 연산자를 많이 사용하는 편이다.-->
		\${3 > 2} : ${3 > 2} 또는 ${3 gt 2}<br> <!-- greater than -->
		\${3 >= 2} : ${3 >= 2} 또는 ${3 ge 2}<br> <!-- greater or equal -->
		
		\${3 < 2} : ${3 < 2} 또는 ${3 lt 2}<br> <!-- less than -->
		\${3 <= 2} : ${3 <= 2} 또는 ${3 le 2}<br> <!-- less or equal -->
		
		\${3 == 2} : ${3 == 2} 또는 ${3 eq 2}<br> <!-- equals -->
		\${3 != 2} : ${3 != 2} 또는 ${3 ne 2}<br> <!-- not equals -->
		
		<hr>
		EL 삼항 연산자<br>
		파라미터 값 : ${empty param.msg ? "값 없음" : param.msg}<br> <!-- 파라미터 값 판별 -->
		<!-- empty 연산자 
		값이 null이거나 빈 문자열"", 빈 배열,Collecion이면 true를 반환한다.
		-->
		
		<hr>
		EL 논리 연산자<br>
		<!--  msg자체가 존재하지 않는 상태를 null이라고 함, null 혹은 ?msg= 인 상태를 empty라고 함.-->
		${param.msg == null || param.msg =='' ? "값 없음" : param.msg}<br> 
		
		<hr>
		EL 문자열 연결 연산자<br>
		${"Hello" += " World"}
		
		<hr>
		EL 할당 연산자<br>
		${num = 10}
		${num + 10}
		<hr>
		
		
	</body>
</html>