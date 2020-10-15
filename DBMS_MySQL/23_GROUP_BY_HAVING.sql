-- # GROUP BY 절
-- 특정 컬럼이나 값을 기준으로 ROW를 묶어서 자료관리를 할 때 사용
-- GROUP BY절은 그룹함수와 함께 사용하면 효과적이다.

-- SELECT 필드이름, 그룹함수(필드이름)
-- FROM 테이블이름
-- [WHERE 조건]
-- GROUP BY 필드이름;

-- 근로자들 중 직종별로 인원수를 계산하여 출력
SELECT JOB_ID, COUNT(*) 
FROM EMPLOYEES 
GROUP BY JOB_ID;

-- # HAVING
-- 그룹화 상태에서의 조건부여
-- 조건식에서 그룹함수를 사용해야 한다면 WHERE절이 아닌 HAVING절에 기술해야 한다

-- 근로자들 중 인원이 10명 이상인 직종일 경우 직종별로 인원수를 계산하여 출력

SELECT JOB_ID, COUNT(*) 
FROM EMPLOYEES 
GROUP BY JOB_ID
HAVING COUNT(*) > 10;
