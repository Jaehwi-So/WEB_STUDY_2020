-- # 서브 쿼리
-- 서브쿼리(subquery)란 다른 쿼리 내부에 포함되어 있는 SELECT 문을 의미

-- 학생의 학교번호와 학교의 일련번호가 일치하고 성이 박씨인 학생들의 이름과 학교 이름을 출력
SELECT STD.stu_name, SCH.name
FROM SCHOOL AS SCH, STUDENT AS STD
WHERE SCH.idx = STD.school_idx AND STD.stu_name LIKE '박%';

-- '유재석'이라는 이름의 학생이 다니는 학교들의 이름 목록을 출력
SELECT NAME
FROM school 
WHERE idx = (
	SELECT school_idx
	FROM STUDENT
	WHERE stu_name = '유재석' );