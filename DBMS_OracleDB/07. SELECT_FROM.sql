-- # SELECT
-- 데이터베이스에 저장되어 있는 자원들을 검색할 때 사용하는 SQL 문장

SELECT *
FROM EMPLOYEES; 
--EMPLOYEES 테이블로부터 모든 내용을 검색. *은 테이블의 모든 속성 검색

SELECT DISTINCT *
FROM EMPLOYEES;
--DISTINCT 키워드로 결과가 중복되는 레코드는 검색 시 한번만 표시됨.

-- 예제) 사원테이블(EMPLOYEES)에서 사번, 이름, 입사일, 급여를 검색해보자
SELECT EMPLOYEE_ID, FIRST_NAME, HIRE_DATE, SALARY 
FROM EMPLOYEES;

-- 예제) 사원테이블(EMPLOYEES)에서 사번, 이름, 직종, 급여, 보너스, 보너스의 금액을 계산
SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID, SALARY, COMMISSION_PCT, SALARY*COMMISION_PCT AS COMN 
FROM EMPLOYEES;
--SALARY*COMMISION_PCT : 보너스의 금액을 계산하는 것과 같이 간단한 연산이 가능하며 검색 결과로 컬럼명이 
--임의 계산식으로 그대로 노출된다.
--AS  : 컬럼 별칭을 COMN으로 지정할 수 있다.

SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID, SALARY, COMMISSION_PCT, SALARY*COMMISION_PCT COMN 
FROM EMPLOYEES;
--별칭은 생략 가능하다.