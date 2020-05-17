-- # OracleDB의 자료형
-- 1) NUMBER : 숫자형 데이터를 저장하기 위해 제공되는 자료형
-- 2) DATE : 날짜와 시간 데이터를 저장하기 위한 자료형
-- 3) VARCHAR : 문자, 문자열 데이터를 저장하기 위한 자료형, VARCHAR(20)으로 할당할 경우 무조건 20BYTE를 할당한다. 거의 사용 안함
-- 4) VARCHAR2 : 문자, 문자열 데이터를 저장하기 위한 자료형, VARCHAR2(20)으로 할당할 경우 메모리를 사용량만큼만, 최대 20바이트 할당한다-- 5) CLOB : 문자, 문자열 데이터를 저장하기 위한 자료형(1GB 이상 저장 가능)

-- # 회원정보를 저장하는 테이블 생성
CREATE TABLE PERSON(
	IDX NUMBER(3) PRIMARY KEY,
	ID VARCHAR2(20), -- ID를 저장하는 20BYTE까지 저장 가능한 컬럼 생성
	NAME VARCHAR2(50),
	AGE NUMBER(3),
);