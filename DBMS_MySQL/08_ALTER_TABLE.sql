-- # ALTER

-- # 데이터베이스 수정
-- 문자집합 변경 : ALTER DATABASE 데이터베이스명 CHARACTER SET=문자집합이름
-- 콜레이션 변경 : ALTER DATABASE 데이터베이스명 COLLATE=콜레이션이름
-- 콜레이션 : 데이터베이스에서 검색이나 정렬과 같은 작업을 할 때 비교에 사용되는 규칙의 집합
ALTER DATABASE Hotel CHARACTER SET=utf-8 COLLATE=utf8_general_ci;

-- # 테이블 수정
-- 1) ADD : 컬럼 추가
-- ALTER TABLE 테이블이름 ADD 필드이름 필드타입
ALTER TABLE test
ADD idx INT;

-- 2) DROP : 컬럼 삭제
-- ALTER TABLE 테이블이름 DROP 필드이름
ALTER TABLE test
DROP idx;

-- 3) MODIFY COLUMN : 컬럼 수정
-- ALTER TABLE 테이블이름 MODIFY COLUMN 필드이름 필드타입
ALTER TABLE TEST
MODIFY COLUMN idx VARCHAR(20);