-- # SELECT : 테이블의 레코드 선택

-- SELECT 필드이름
-- FROM 테이블이름
-- [WHERE 조건]

-- 멤버 전체 조회
SELECT * FROM member;

-- ID가 5인 멤버 조회
SELECT * FROM member
WHERE ID = 5;

--ID가 3 이상, 5 이하인 멤버 조회
SELECT * FROM member
WHERE ID >= 3 AND ID <= 5;	  -- 여러개의 조건은 AND나 OR연산자를 이용하여 연결

-- ID가 5인 멤버의 이름, 등록일 조회
SELECT name, regdate FROM member
WHERE ID = 5;

-- 멤버들의 생일을 중복없이 조회
SELECT DISTINCT birth FROM member;

-- 이름이 '홍길동'인 멤버들을 ID 내림차순으로 정렬
SELECT * FROM member
WHERE name = '홍길동'
ORDER BY ID DESC;		-- 내림차순 : DESC, 오름차순 : ASC

-- 멤버들의 이름을 필드 별칭을 지정하여 선택
SELECT name AS member_name
FROM MEMBER;
