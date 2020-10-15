-- # 그룹 함수
-- 여러 행 또는 테이블 전체에 대하여 함수가 적용되어 하나의 결과를 가져오는 함수

-- 그룹함수는 다음과 같이 일반 컬럼과 함께 사용할 수 없다.
-- SELECT COUNT(*), FIRST NAME 
-- FROM EMPLOYEES;

--1) COUNT() : 행(row)의 갯수
--2) AVG() : 평균값
--3) MAX() : 최대값
--4) MIN() : 최소값
--5) SUM() : 총 합

-- 예제) 사원테이블에 존재하는 모든 사원의 수(모든 row수)
SELECT COUNT(*) 
FROM EMPLOYEES;

SELECT COUNT(EMPLOYEE_ID)
FROM EMPLOYEES;

-- 예제) 사원테이블에서 보너스를 받는 사원의 수만 화면에 출력
SELECT COUNT(COMMISSION_PCT) AS COMM
FROM EMPLOYEES;

-- 예제) 사원테이블에서 관리자 id의 수를 화면에 출력
-- # DINSTINCT : 중복을 제거하는 키워드

SELECT COUNT(DISTINCT MANAGER_ID) MGR
FROM EMPLOYEES;

-- 예제) 사원테이블에서 직종이 SA_REP인 사원들의 급여의 평균과 급여의 최고액, 급여의 최저액 급여의 합계를 계산하여 화면에 출력
SELECT AVG(SALARY), MAX(SALARY), MIN(SALARY), SUM(SALARY)
FROM EMPLOYEES
WHERE JOB_ID = 'SA_REP';

-- 예제) 사원테이블에서 부서번호가 80번인 부서의 사원들의 급여의 평균을 화면에 출력
SELECT AVG(SALARY) 
FROM EMPLOYEES
WHERE DEPARTMENT_ID = 80;

 