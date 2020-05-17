-- # 문자함수
-- 1) INITCAP() : 첫 문자를 대문자로 변환
-- 2) LOWER() : 대문자 -> 소문자로 변환
-- 3) UPPER() : 소문자 -> 대문자로 변환
-- 4) SUBSTR() : 특정 문자를 잘라내는 함수
-- 5) REPLACE() : 특정 문자를 교체하는 함수
-- 6) LENGTH() : 문자열의 길이를 가져오는 함수

-- # 1) INITCAP() : 첫 문자를 대문자로 변환
-- 공백, / , _ , - , .등을 구분자로 인지
SELECT INITCAP('helloworld') STR
FROM DUAL;

SELECT INITCAP('hello world') STR
FROM DUAL;

SELECT INITCAP('hello/world') STR
FROM DUAL;

-- # 2) LOWER() : 대문자 -> 소문자로 변환
SELECT LOWER('HELLO WORLD') STR
FROM DUAL;

-- 예제)사원테이블에서 'Michael'이라는 이름을 가진 사원의 사번, 이름을 검색
SELECT EMPLOYEE_ID, FIRST_NAME
FROM EMPLOYEES
WHERE LOWER(FIRST_NAME) = 'michael';

-- # 3) UPPER() : 소문자 -> 대문자로 변환
SELECT UPPER('hello world') STR
FROM DUAL;

-- # 4) SUBSTR() : 특정 문자를 잘라내는 함수
--SUBSTR(String, 시작 index, 잘라낼 문자 수)
--사원테이블에서 전화번호의 마지막 4자리를 조회
SELECT SUBSTR(PHONE_NUMBER, -4, 4) 
FROM EMPLOYEES;

SELECT SUBSTR('HELLO WORLD', 1, 5) 
FROM DUAL;

SELECT SUBSTR('HELLO WORLD', -3, 3) 
FROM DUAL;

-- # 5) REPLACE() : 특정 문자를 교체하는 함수
--REPLACE(String, 잘라낼 문자열, 대체할 문자열)

SELECT REPLACE('HELLO WORLD', 'WORLD', 'SQL')
FROM DUAL;

-- 예제)사원테이블의 50번 부서에서 이름에 el이 들어가는 사원의 사번, 이름을 출력하되 el대신 **로 대체하시오
SELECT EMPLOYEE_ID, FIRST_NAME, REPLACE(FIRST_NAME, 'el', '**')
FROM EMPLOYEES
WHERE DEPARTMENT_ID = 50 AND FIRST_NAME LIKE '%el%';

-- 예제)사원테이블의 모든 사원의 이름과 성을 붙여서 출력해보자
SELECT FIRST_NAME || LAST_NAME
FROM EMPLOYEES;

-- # 6) LENGTH() : 문자열의 길이를 가져오는 함수
SELECT LENGTH('HELLO WORLD')
FROM DUAL;

-- 예제)사원테이블에서 이름의 길이가 6글자 이상인 사원의 사번과 이름을 출력
SELECT EMPLOYEE_ID, FIRST_NAME
FROM EMPLOYEES
WHERE LENGTH(FIRST_NAME) >= 6;
