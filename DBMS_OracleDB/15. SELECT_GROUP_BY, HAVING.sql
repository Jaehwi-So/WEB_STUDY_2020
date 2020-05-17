-- # SELECT
-- # GROUP BY
-- 특정 컬럼이나 값을 기준으로 ROW를 묶어서 자료관리를 할 때 사용
-- GROUP BY절은 그룹함수와 함께 사용하면 효과적이다.

-- 예제) JOB_ID 로 그룹화 하여 각 직종별로 인원수를 계산해보자
SELECT JOB_ID, COUNT(*) 
FROM EMPLOYEES 
GROUP BY JOB_ID;

-- 예제) 각 부서별로 그룹화 하여 부서별 인원수 및, 급여의 평균과 총액을 구하시오
SELECT DEPARTMENT_ID, COUNT(*), AVG(SALARY), SUM(SALARY)
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID;

-- 예제) 직종별 급여의 합산을 조회
SELECT JOB_ID, SUM(SALARY)
FROM EMPLOYEES
GROUP BY JOB_ID;

-- 예제) 직종별 급여의 평균을 조회
SELECT JOB_ID, AVG(SALARY)
FROM EMPLOYEES
GROUP BY JOB_ID;

-- 예제) 부서번호, 직종별 급여의 합을 출력하되, 부서번호가 높은순으로 정렬하시오
SELECT DEPARTMENT_ID, JOB_ID, SUM(SALARY)
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID, JOB_ID
ORDER BY DEPARTMENT_ID DESC;

---------------------------------------------
-- # HAVING
-- 그룹화 상태에서의 조건부여
-- 조건식에서 그룹함수를 사용해야 한다면 WHERE절이 아닌 HAVING절에 기술해야 한다

-- 예제) 각 부서별 급여의 최대값, 최소값, 인원수를 출력한다 단, 급여의 최대값이 8000이상인 결과만 출력!!
SELECT DEPARTMENT_ID, MAX(SALARY), MIN(SALARY), COUNT(*)
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID
HAVING MAX(SALARY) >= 8000;

-- 예제) 각 부서별 인원수가 20명 이상인 부서의 정보를
    부서번호, 급여의 합, 급여의 평균, 인원수 순으로 출력
SELECT DEPARTMENT_ID, SUM(SALARY), ROUND(AVG(SALARY), 2), COUNT(*)
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID
HAVING COUNT(*) >= 20;

-- 예제) 사원테이블에서 직종이 'IT_PROG'인 사원들의 급여의 평균, 급여의 합을 구하시오
SELECT JOB_ID, AVG(SALARY), SUM(SALARY)
FROM EMPLOYEES
WHERE JOB_ID = 'IT_PROG'
GROUP BY JOB_ID;


SELECT AVG(SALARY), SUM(SALARY)
FROM EMPLOYEES
WHERE JOB_ID = 'IT_PROG';

-- 예제) 부서, 직종별 그룹화를 한 후, 결과를 부서번호, 직종, 인원수 순으로 출력하시오
단, 직종이 'MAN'으로 끝나는 경우만 출력
SELECT DEPARTMENT_ID, JOB_ID, COUNT(*)
FROM EMPLOYEES
WHERE JOB_ID LIKE '%MAN'
GROUP BY DEPARTMENT_ID, JOB_ID;

-- 예제) 각 부서별로 부서번호, 급여의 합, 급여의 평균, 인원수로 출력
단, 급여의 합이 30000이상인 경우에만 출력해야 하며, 급여의 평균은 소수점
두자리에서 반올림하시오
SELECT DEPARTMENT_ID, SUM(SALARY), ROUND(AVG(SALARY), 2), COUNT(*)
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID
HAVING SUM(SALARY) >= 30000;














