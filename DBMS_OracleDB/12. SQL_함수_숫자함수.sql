-- # 숫자함수
-- 1) ROUND() : 반올림
-- 2) TRUNC() : 잘라내기
-- 3) POWER() : 제곱
-- 4) MOD() : 나머지

--DUAL 테이블 : 함수나 계산식을 테이블생성 없이 수행하여 확인할 수 있도록 하는 임시 테이블

-- 1) ROUND() : 반올림
SELECT ROUND(0.123, 2) R1, ROUND(2.5678, 2) ROUND2
FROM DUAL;

-- 2) TRUNC() : 잘라내기
SELECT TRUNC(1.56789, 2) T, ROUND(1.56789) R 
FROM DUAL;

-- 3) POWER() : 제곱
SELECT POWER(4,2) P
FROM DUAL;

-- 4) MOD() : 나머지
SELECT MOD(7, 4) M
FROM DUAL;

-- 예제) 사원테이블에서 부서번호가 80번인 부서의 사원들의 급여의 평균을 화면에 출력
-- 단, 소수점 둘째자리 까지만 반올림하여 출력
SELECT ROUND(AVG(SALARY), 2) 
FROM EMPLOYEES
WHERE DEPARTMENT_ID = 80;

-- 예제) 짝수 사번을 가진 사원들의 정보를 조회
SELECT *
FROM EMPLOYEES
WHERE MOD(EMPLOYEE_ID, 2) = 0;