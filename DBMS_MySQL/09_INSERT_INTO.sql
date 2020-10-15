-- # INSERT INTO : 테이블에 레코드 추가

-- 1. INSERT INTO 테이블이름(필드이름1, 필드이름2, 필드이름3, ...)
--    VALUES (데이터값1, 데이터값2, 데이터값3, ...)
-- 2. INSERT INTO 테이블이름
--    VALUES (데이터값1, 데이터값2, 데이터값3, ...)

CREATE TABLE member(
 ID INT NOT NULL,
 NAME VARCHAR(30),
 REGDATE DATE	
);	

INSERT INTO member(ID, NAME, REGDATE)
VALUES(5, '홍길동', CURRENT_TIMESTAMP);