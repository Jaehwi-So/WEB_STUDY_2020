# ALTER
-- 테이블 수정하기

-- # ADD 
-- 테이블에 컬럼 추가

--예제) 앞서 만든 MEMBER_T 테이블에 가입한 날짜와 나이를 저장하기 위한 REG_DATE, AGE 속성명을 추가해보자.
ALTER TABLE MEMBER_T 
ADD REG_DATE DATE;	--날짜 타입 DATE형 속성 추가
ALTER TABLE MEMBER_T
ADD AGE NUMBER;		--숫자 타입 NUMBER형 속성 추가

-- # MODIFY
-- 테이블의 컬럼 수정

--예제) MEMBER_T의 EMAIL의 저장공간을 50BYTE에서 100BYTE로 수정
ALTER TABLE MEMBER_T 
MODIFY EMAIL VARCHAR2(100);

-- #DROP COLUMN
-- 테이블의 컬럼 삭제

--예제) MEMBER_T 테이블의 전화번호를 저장하는 컬럼을 삭제해보자
ALTER TABLE MEMBER_T
DROP COLUMN PHONE;
