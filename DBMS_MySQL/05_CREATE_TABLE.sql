-- # CREATE : 테이블을 생성한다.
-- 테이블을 생성하기 위해서는 테이블 이름, 필드 목록과 각 필드의 타입을 명시
-- 필드는 필드 타입과 더불어 제약 조건을 설정할 수 있다.

-- CREATE TABLE 테이블이름(
--     필드이름1 필드타입1,
--     필드이름2 필드타입2,
--     ...
-- );

CREATE TABLE member(
 ID INT NOT NULL,
 NAME VARCHAR(30),
 REGDATE DATE	
);	

