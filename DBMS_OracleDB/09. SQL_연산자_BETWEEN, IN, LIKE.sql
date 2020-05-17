 -- # SQL 연산자
-- 1) BETWEEN : A와 B 사이의 값을 검색할 때 사용. AND를 대체
-- 2) IN : 주어진 목록에서 찾고자 하는 값이 있는 경우를 검색, OR를 대체
-- 3) LIKE : 지정한 문자형태와 일치하는, 혹은 지정한 문자열을 포함하고 있는 자원을 검색. 유사검색

-- # BETWEEN
--예제) 2006년에 입사한 사원의 사번, 이름, 입사일 출력

SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID, HIRE_DATE
FROM EMPLOYEES
WHERE HIRE_DATE >= '01/01/2006' AND HIRE_DATE <= '12/31/2006';

SELECT EMPLOYEE_ID, FIRST_NAME, HIRE_DATE, SALARY
FROM EMPLOYEES
WHERE HIRE_DATE BETWEEN '01/01/2006' AND '12/31/2006';

-- # IN
--예제) 사원테이블에서 급여가 2200, 3200, 5000, 6800인 사원들의 정보를 사번, 이름, 급여 순으로 검색

SELECT EMPLOYEE_ID, FIRST_NAME, SALARY
FROM EMPLOYEES
WHERE SALARY = 2200 OR SALARY = 3200 OR SALARY = 5000 OR SALARY = 6800;

SELECT EMPLOYEE_ID, FIRST_NAME, SALARY
FROM EMPLOYEES
WHERE SALARY IN ( 2200, 3200, 5000, 6800 );

--예제) 사원테이블에서 직종이 'SA_MAN', 'IT_PROG', 'HR_REP'인 사원들의 모든 정보를 검색
SELECT * 
FROM EMPLOYEES
WHERE JOB_ID IN ( 'SA_MAN', 'IT_PROG', 'HR_REP' );

--예제) 사원테이블에서 사번이 100, 102, 104, 106번인 사원의 이름, 사번을 검색
SELECT FIRST_NAME, EMPLOYEE_ID
FROM EMPLOYEES
WHERE EMPLOYEE_ID IN ( 100, 102, 104, 106 );

-- # LIKE
--1. % : 모든 값 검색
--2. _ : 하나의 값 검색

예제) 사원테이블에서 사원들의 이름 중 M으로 시작하는 사원의 정보를 사번, 이름, 직종 순으로 검색
SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID
FROM EMPLOYEES
WHERE FIRST_NAME LIKE 'M%';

예제) 사원테이블에서 이름이 'd'로 끝나는 사원의 사번, 이름을 검색
SELECT EMPLOYEE_ID, FIRST_NAME
FROM EMPLOYEES
WHERE FIRST_NAME LIKE '%d';

예제) 사원테이블에서 M으로 시작하는 이름 중, 7글자의 이름을 가진 사람의 이름을 검색
SELECT FIRST_NAME
FROM EMPLOYEES
WHERE FIRST_NAME LIKE 'M______';

예제) 사원테이블에서 이름의 세번째 글자에 a가 들어가는 사원의 사번, 이름을 검색
SELECT EMPLOYEE_ID, FIRST_NAME
FROM EMPLOYEES
WHERE FIRST_NAME LIKE '__a%';

예제) 사원테이블에서 이름의 어디든 e가 들어가는 사원의 사번, 이름을 검색
SELECT EMPLOYEE_ID, FIRST_NAME
FROM EMPLOYEES
WHERE FIRST_NAME LIKE '%e%';

예제) 사원테이블에서 이름에 소문자 'o'가 들어가면서 'a'로 끝나는 사원의 모든 정보를 검색
SELECT *
FROM EMPLOYEES
WHERE FIRST_NAME LIKE '%o%a';

예제) 사원테이블에서 휴대폰번호가 011로 시작하는 사원의 모든 정보를 검색
SELECT *
FROM EMPLOYEES
WHERE PHONE_NUMBER LIKE '011%';