# CREATE
-- 테이블 생성하기
-- 예제) ID, PWD, 이름, 이메일, 연락처를 저장하는 회원관리 테이블을 만들어 보자.
--CREATE TABLE 테이블명(
--	속성 정의
--)
CREATE TABLE MEMBER_T(
	ID VARCHAR2(50) PRIMARY KEY,  -- # PRIMARY KEY : 기본키. 식별자. 반드시 값을 채워야 함
	PWD VARCHAR(50) NOT NULL,  -- # NOT NULL : 반드시 값을 채워야 사용 가능한 속성
	NAME VARCHAR(50) NOT NULL,
	EMAIL VARCHAR(50) UNIQUE, -- # UNIQUE : 중복된 값을 허용하지 않음
	PHONE VARCHAR2(20)	
);