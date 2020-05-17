-- # DECODE 함수
-- 자바의 IF문과 유사한 기능
-- [DECODE의 구성]
-- 1. DECODE(참조값, 조건식, 참일경우 값, 거짓일 경우 값)
-- 2. DECODE(참조값, 조건식1, 조건식1의 참값, 
--  	                조건식2, 조건식2의 참값, 위의 조건에 거짓일 경우 값)

-- 예제) 각 부서별 인원수가 45명이면 "인원 조정", 34명이면 "검토중", 6명이면 "적정인원", 그 이외에는 "대기" 출력

SELECT DEPARTMENT_ID, COUNT(*),
DECODE(COUNT(*), 45, '인원조정',
                 34, '검토중',
                 6, '적정인원', '대기')ETC
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID;
