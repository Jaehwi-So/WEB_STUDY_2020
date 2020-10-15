-- # 문자 함수
-- # 1) 문자열 결합
-- CONCAT() : 전달받은 문자열을 모두 결합하여 하나의 문자열로 반환합니다.
-- 전달받은 인수 중 하나라도 NULL이 존재하면, NULL을 반환

SELECT CONCAT('Hello', ' World');	-- 'Hello World'
SELECT CONCAT('Hello', NULL, 'World);	-- NULL

-- # 2) 문자열의 위치 검색
-- LOCATE() : 문자열에서 특정 문자열이 처음으로 나타나는 위치를 반환, 존재하지 않는다면 0 반환
-- MySQL에서는 첫 번째 문자의 인덱스가 1이다.

SELECT LOCATE('llo', 'Hello World');	-- 3

-- # 3) 문자열 추출
-- LEFT() : 문자열의 왼쪽부터 명시한 개수만큼의 문자를 반환
-- RIGHT() : 문자열의 오른쪽부터 명시한 개수만큼의 문자를 반환

SELECT LEFT('Hello World', 3);	-- 'Hel'
SELECT RIGHT('Hello World', 3);  --'rld'

 
-- # 4) 문자열 대소문자 변경
-- LOWER() : 문자열을 모두 소문자로 변경
-- UPPER() :  문자열을 모두 대문자로 변경

SELECT LOWER('Hello World');	-- 'hello world'
SELECT UPPER('Hello World');  --'HELLO WORLD'


-- # 5) 문자열 대체
-- REPLACE() : 문자열에서 특정 문자열을 찾은 후에, 찾은 문자열을 대체 문자열로 교체함

SELECT REPLACE('Hello World', 'World', 'SQL');  --'HELLO SQL'
 


-- 6) 문자열 다듬기
-- TRIM() : 전달받은 문자열의 앞이나 뒤, 또는 양쪽 모두에 있는 특정 문자를 제거합니다. 지정자에 따라 제거 범위가 달라진다.
-- 지정자를 명시하지 않으면 BOTH로 설정되며 제거할 문자를 명시하지 않으면 자동으로 공백을 제거한다.
-- (지정자 '특정 문자' FROM '문자열') 형태

-- # 지정자
-- 1. BOTH : 문자열의 양 끝에 존재하는 특정 문자를 제거. (기본 설정)
-- 2. LEADING : 문자열 앞에 존재하는 특정 문자를 제거
-- 3. TRAILING : 문자열 뒤에 존재하는 특정 문자를 제거

SELECT 
TRIM(BOTH '@' FROM '@@@Hello World@@@'), -- Hello World
TRIM(BOTH '@' FROM '  @@@Hello World@@@  '), -- @@@Hello World@@@
TRIM(LEADING '@' FROM '@@@Hello World@@@'), -- Hello World@@@
TRIM(TRAILING '@' FROM '@@@Hello World@@@'), -- @@@Hello World
TRIM('  @@@Hello World@@@  '); -- @@@Hello World@@@


 



 