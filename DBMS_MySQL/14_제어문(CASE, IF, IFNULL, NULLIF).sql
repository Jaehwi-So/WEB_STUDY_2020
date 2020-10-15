-- # 흐름 제어
-- 순차적인 흐름을 제어해야 할 때 사용할 수 있는 다양한 연산자와 함수가 있다.

-- # 1. CASE
-- 홍길동의 ID가 0이면 00, 5면 50, 그 외의 것이면 10 반환
SELECT ID,
CASE 
    WHEN 0 THEN 00
    WHEN 5 THEN 50
    ELSE 10
END
FROM member
WHERE NAME = '홍길동';


-- # 2. IF()
-- score가 70점 이상이면 pass, 아니면 fail을 grade로 출력
SELECT score,
IF(score >= 70, 'P', 'F') AS grade
FROM member;

-- score가 90, 80, 70 이상일 때 A, B, C, 그 외 D로 점수를 매김
SELECT score,
IF(score >= 90, 'A', IF(score >=80, 'B', IF(score >= 70), 'C', 'D')) AS grade
FROM member;

-- # 3. IFNULL()
-- member의 email이 null이면 null email 반환, 아니면 원래 이메일 반환
SELECT email,
IFNULL(email, 'null email');
FROM member;

-- 4. NULLIF()
-- NULLIF() 함수는 인수로 전달받은 두 값이 서로 같은지를 검사하여 같다면 null을 반환
-- member의 id를 전체 조회에서 5와 같은 id는 null로 반환한다.
SELECT id,
NULLIF(id, 5);
FROM member;
