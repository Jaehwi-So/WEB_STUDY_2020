-- # 정수
-- TINYINT 1바이트	
-- SMALLINT 2바이트	
-- MEDIUMINT 3바이트	
-- INT 4바이트	
-- BIGINT 8바이트

-- # 실수

-- 1)고정 소수점 방식
-- 소수부의 자릿수를 미리 정해 놓고, 고정된 자릿수로만 소수 부분을 표현하는 방식
-- M은 소수 부분을 포함한 실수의 총 자릿수, D는 소수 부분의 자릿수를 나타낸다.
-- DECIMAL(M,D)

-- 2)부동 소수점 방식
-- FLOAT 4바이트
-- DOUBLE 8바이트

-- 3)FLOAT(P)
-- FLOAT는 정밀도에 필요한 최소 비트 수(P)를 명시할 수 있다.
-- P가 0부터 24까지의 값을 가질 때는 FLOAT 값으로 취급, 25부터 53까지의 값을 가질 때는 DOUBLE 값으로 취급됩


--고정 소수점 방식으로 FLOAT과 DOUBLE 사용 가능
-- FLOAT(M,D)
-- DOUBLE(M,D)

-- # 문자열 
-- CHAR(자릿수) : 고정 길이. 반드시 길이가 자릿수만큼인 문자열을 넣어여 함
-- VARCHAR(자릿수) : 가변 길이. 길이가 0부터 자릿수만큼인 문자열을 넣을 수 있음

-- BINARY(자릿수) : CHAR과 유사하나 바이너리 파일을 저장할 때 사용
-- VARBINARY(자릿수) : VARCHAR과 유사하나 바이너리 파일을 저장할 때 사용

-- BLOB : 다양한 바이너리 파일을 저장할 때 사용
-- TEXT : 긴 글을 저장할 때 사용

-- ENUM('male','female',...) : 미리 정의한 집합 안의 값 중 하나를 가진다. 최대 65535개의 집합을 가질 수 있음
-- SET('데이터값1', '데이터값2', ...) : 미리 정의한 집합 안의 값 중 여러개를 가질 수 있다. 최대 64개의 집합을 가질 수 있다.
ALTER TABLE test
ADD COLUMN color SET('RED', 'BLUE', 'GREEN');
INSERT INTO test (color) VALUES ('RED,BLUE');

-- # 날짜
-- DATETIME : 날짜와 시간에 대한 정보
-- DATE : 날짜에 대한 정보
-- TIME : 시간에 대한 정보
-- TIMESTAMP : 사용자가 별다른 입력을 주지 않으면, 데이터가 마지막으로 입력되거나 변경된 날짜와 시간이 저장
-- YEAR : 년도에 대한 정보

CREATE TABLE EXAM(
  regdate DATETIME DEFAULT NOW()
);

-- DEFAULT now() : 해당 컬럼에 값이 없다면 디폴트값으로 현재 시각을 넣는다.
-- DEFAULT CURRENT_TIMESTAMP : 해당 컬럼에 값이 없다면 디폴트값으로 현재 시각을 넣는다.
