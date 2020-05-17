-- # SELECT
-- # ORDER BY (정렬)
-- 질의 결과에 반환되는 행들을 정렬하고자 할 때 사용한다.
-- ORDER BY절은 SELECT절의 가장 마지막에 기술
-- DESC : 내림차순
-- ASC : 오름차순(생략 가능)

-- 예제) 사원테이블에서 급여를 많이 받는 사람 순으로 검색하시오
SELECT FIRST_NAME, SALARY
FROM EMPLOYEES
ORDER BY SALARY DESC; 

-- 예제) 사원테이블에서 급여를 많이 받는 사람 순으로 검색하되, 급여가 같을 경우 입사일이 빠른 사원부터 사번, 이름, 급여, 입사일 순으로 검색
SELECT EMPLOYEE_ID, FIRST_NAME, SALARY, HIRE_DATE
FROM EMPLOYEES
ORDER BY SALARY DESC, HIRE_DATE ASC; 

-- 예제) 급여가 15000달러 이상인 사원들의 모든 정보를 입사일이 빠른 순으로 검색하시오
SELECT *
FROM EMPLOYEES
WHERE SALARY >= 15000
ORDER BY HIRE_DATE ASC;

-- 예제) 사원테이블에서 부서번호가 빠른 순, 부서번호가 같다면 직종이 빠른 순, 직종까지 같다면 급여를 많이 받는 순으로 정렬하여
사번, 이름, 부서번호, 직종, 급여 순으로 검색
SELECT EMPLOYEE_ID, FIRST_NAME, DEPARTMENT_ID, JOB_ID, SALARY
FROM EMPLOYEES
ORDER BY DEPARTMENT_ID ASC, JOB_ID ASC, SALARY DESC;