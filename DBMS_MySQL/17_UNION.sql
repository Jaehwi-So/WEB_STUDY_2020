-- # UNION
-- 여러 개의 SELECT 문의 결과를 하나의 테이블이나 결과 집합으로 표현할 때 사용

-- 학생들과 선생들 중 생일이 8월생인 사람들의 이름을 출력
SELECT name
FROM student
WHERE birth LIKE '%.08.%';
UNION
SELECT name
FROM teacher;
WHERE birth LIKE '%.08.%';

-- 중복되는 레코드까지 모두 출력하고 싶다면, ALL 키워드를 사용한다.
SELECT name
FROM student
WHERE birth LIKE '%.08.%';
UNION LIKE
SELECT name
FROM teacher;
WHERE birth LIKE '%.08.%';