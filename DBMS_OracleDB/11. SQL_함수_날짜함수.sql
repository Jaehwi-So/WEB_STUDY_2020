-- # 날짜함수
-- SYSDATE라는 키워드가 오늘 날짜를 [세기, 년, 월, 일, 시, 분, 초]형식으로 7byte내에서 기억하고 있다.

SELECT SYSDATE 
FROM DUAL;

-- # 1) MONTHS_BETWEEN() : 두 날짜 사이의 개월 수를 구한다
-- 사원테이블에서 사원들의 근무 월수를 출력해보자!!
SELECT FIRST_NAME, HIRE_DATE, TRUNC(MONTHS_BETWEEN(SYSDATE, HIRE_DATE), 0) MONTH
FROM EMPLOYEES;

-- # 2) ADD_MONTHS() : 특정 날짜에 개월을 더한다
-- 오늘 날짜로부터 2개월 후의 날짜가 궁금하다면..
SELECT SYSDATE, ADD_MONTHS(SYSDATE, 2) AFTER2MONTH
FROM DUAL;

--예제) 사번이 120번인 사원이 입사후 3년 6개월이 되는 날 파티를 해주려고 한다. 이 사원의 파티 날짜를 구하시오
SELECT HIRE_DATE, ADD_MONTHS(HIRE_DATE, 12*3 + 6) PARTY_DATE
FROM EMPLOYEES
WHERE EMPLOYEE_ID = 120;

-- # 3) NEXT_DAY : 특정 날짜에서 다가오는 요일을 구한다
-- ( 일요일 -> 1, 월요일 -> 2..... )

--오늘 날짜로부터 가장 빨리 찾아오는 월요일을 구하자
SELECT NEXT_DAY(SYSDATE, 2)
FROM DUAL;

-- # 4) TO_CHAR() : 형식에 맞게 날짜를 변경해주는 함수
-- CC : 세기 YY(YYYY) : 년도 MM :  월 DD : 일 DAY : 요일

SELECT TO_CHAR(SYSDATE, 'CC/YYYY/MM/DD/DAY')
FROM DUAL;

SELECT TO_CHAR(SYSDATE, 'YYYY/MM/DD')
FROM DUAL;

SELECT TO_CHAR(SYSDATE, 'YY/MM/DD')
FROM DUAL;

-- 예제) 사원테이블에서 사원의 이름과 입사일을 07-06-12 monday(년,월,일,요일) 형식으로 조회
SELECT FIRST_NAME, TO_CHAR(HIRE_DATE, 'YY-MM-DD DAY')
FROM EMPLOYEES;

