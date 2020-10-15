-- # 패턴 매칭 연산자
-- 데이터의 특정 패턴을 검색할 수 있다.

-- # 1. LIKE
-- 멤버 테이블에서 김씨성을 가진 이름의 멤버 목록을 조회
SELECT * FROM member
WHERE name LIKE '김%';

-- 멤버 테이블에서 이름이 철수인 멤버 목록을 조회
SELECT * FROM member
WHERE name LIKE '_철수';

-- # 와일드카드 : %(0개 이상의 문자 대체), _(1개의 문자 대체)

-- # 2. REGEXP
-- 정규 표현식 사용 가능

-- 멤버 테이블에서 김으로 시작하거나 수로 끝나는 이름의 멤버 목록 조회
SELECT * FROM member
WHERE name REGEXP '^김|수$';