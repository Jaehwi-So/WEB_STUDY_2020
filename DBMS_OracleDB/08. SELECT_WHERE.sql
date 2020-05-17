--  # SELECT
-- WHERE : 조건절
-- 사용자가 원하는 자원들을 조건을 기술하여 검색할 수 있도록 하는 키워드

-- # 비교 연산

--예제) 사원테이블에서 급여가 10000이상인 사원들의 정보를 사번, 이름, 급여순으로 검색해보자.
SELECT EMPLOYEE_ID, FIRST_NAME, SALARY
FROM EMPLOYEES
WHERE SALARY >= 10000;

--예제) 사원테이블에서 직종이 IT_PROG인 사원들의 정보를 사번, 이름, 직종, 급여 순으로 검색해보자.
SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID, SALARY
FROM EMPLOYEES
WHERE JOB_ID = 'IT_PROG'; -- 문자, 문자열 VALUE의 경우 대소문자를 구분해야 하며 ('')를 사용한다.

--예제) 사원테이블에서 입사일이 2006년 1월 3일에 입사한 사원의 정보를 사번, 이름, 입사일, 급여 순으로 검색해보자.
SELECT EMPLOYEE_ID, FIRST_NAME, HIRE_DAY, SALARY
FROM EMPLOYEES
WHERE HIRE_DAY = '01/03/2006';

--예제) 사원테이블에서 입사일이 2006년 1월 3일 이후에 입사한 사원의 정보를 사번, 이름, 입사일, 급여 순으로 검색해보자.
SELECT EMPLOYEE_ID, FIRST_NAME, HIRE_DATE, SALARY
FROM EMPLOYEES
WHERE HIRE_DATE >= '01/03/2006'; 
--날짜는 문자열이지만 부등호를 통해 크기 비교가 가능하다.

--예제) 사원테이블에서 2006년도에 입사한 사원의 정보를 사번, 이름, 직종, 입사일 순으로 출력
SELECT EMPLOYEE_ID, FIRST_NAME, JOB_ID, HIRE_DATE
FROM EMPLOYEES
WHERE HIRE_DATE >= '01/01/2006' AND HIRE_DATE <= '12/31/2006';

--예제) 사원테이블에서 직종이 SA_MAN이거나 IT_PROG인 사원들의 모든 정보를 출력
SELECT *
FROM EMPLOYEES
WHERE JOB_ID = 'SA_MAN' OR JOB_ID = 'IT_PROG';

--예제) 이름의 맨 앞글자가 H보다 사전순으로 뒤에 위치한 사원의 이름을 출력
SELECT FIRST_NAME
FROM EMPLOYEES
WHERE FIRST_NAME > 'H';


-- # AND 연산
예제) 사원테이블에서 급여가 10000이상이고 사번이 200번 이상인 사원들의 정보를 사번, 이름, 급여순으로 검색해보자.
SELECT EMPLOYEE_ID, FIRST_NAME, SALARY
FROM EMPLOYEES
WHERE SALARY >= 10000 AND EMPLOYEE_ID >= 200;

-- # OR 연산
예제) 사원테이블에서 급여가 10000이상이거나 사번이 200번 이상인 사원들의 정보를 사번, 이름, 급여순으로 검색해보자.
SELECT EMPLOYEE_ID, FIRST_NAME, SALARY
FROM EMPLOYEES
WHERE SALARY >= 10000 OR EMPLOYEE_ID >= 200;

-- # NOT 연산
예제) 사원테이블에서 급여가 10000이상이 아닌 사원들의 정보를 사번, 이름, 급여순으로 검색해보자.
SELECT EMPLOYEE_ID, FIRST_NAME, SALARY
FROM EMPLOYEES
WHERE NOT SALARY >= 10000;