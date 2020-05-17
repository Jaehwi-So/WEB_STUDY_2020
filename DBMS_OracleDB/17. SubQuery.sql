-- # SubQuery : 특정 SQL 문장 안에 또 다른 SQL문장이 포함되어 있는 것
-- DB에 여러번 접속해야 하는 상황을 줄여 검색속도를 증가시킬 수 있다.

--서브쿼리를 사용할 수 있는 곳
--1) WHERE, HAVING절
--2) SELECT, DELETE절의 FROM 뒤
--3) UPDATE절의 SET 뒤
--4) INSERT절의 INTO 뒤

-- 예제) 사원테이블에서 이름이 'Michael'이고, 직종이 MK_MAN인 사원의 급여보다 더 많이 받는 사원들의 정보를 
-- 사번, 이름, 직종, 급여 순으로 검색

-- 문제접근1) 이름이 Michael이고 직종이 MK_MAN인 사원의 급여
SELECT SALARY
FROM EMPLOYEES
WHERE FIRST_NAME = 'Michael' AND JOB_ID = 'MK_MAN'; 	
--13000

-- 문제접근2) 13000보다 급여를 많이 받는 사원들을 조회
SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID, SALARY
FROM EMPLOYEES
WHERE SALARY > 13000;

-- 위의 두 쿼리문을 서브쿼리를 사용하여 합쳐보자.
SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID, SALARY
FROM EMPLOYEES
WHERE SALARY > (
	SELECT SALARY 
	FROM EMPLOYEES
	WHERE FIRST_NAME = 'Michael' AND JOB_ID = 'MK_MAN' );

-- 예제) 사원테이블에서 사번이 111번인 사원의 직종과 같고, 사번이 159번인 사원의 급여보다 많이받는 사원들의 정보를 
-- 사번, 이름, 직종, 급여 순으로 출력

SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID, SALARY
FROM EMPLOYEES
WHERE JOB_ID = ( SELECT JOB_ID
                          FROM EMPLOYEES
                          WHERE EMPLOYEE_ID = 111 ) 
AND SALARY > ( SELECT SALARY
                        FROM EMPLOYEES
                        WHERE EMPLOYEE_ID = 159 );