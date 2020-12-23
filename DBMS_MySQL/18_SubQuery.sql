-- # 서브 쿼리
-- 서브쿼리(subquery)란 다른 쿼리 내부에 포함되어 있는 SELECT 문을 의미

-- 복수의 테이블에서 데이터 가져오기
-- 학생의 학교번호와 학교의 일련번호가 일치하고 성이 박씨인 학생들의 이름과 학교 이름을 출력
SELECT STD.stu_name, SCH.name
FROM SCHOOL AS SCH, STUDENT AS STD
WHERE SCH.idx = STD.school_idx AND STD.stu_name LIKE '박%';


-- WHERE 절에서의 서브쿼리
-- '유재석'이라는 이름의 학생이 다니는 학교들의 학생 이름 목록을 출력
SELECT NAME
FROM school 
WHERE idx = (
	SELECT school_idx
	FROM STUDENT
	WHERE stu_name = '유재석' );

-- 계산 필드 서브쿼리
-- 가게에서 판매하는 물건 중 1번 상품의 이름과 현재 주문량을 출력
SELECT product_name, (SELECT COUNT(*) FROM Orders o WHERE o.product_idx = 1)
FROM Products p
WHERE p.product_idx = 1;

-- FROM 절에서의 서브쿼리
-- 장부(Accounts)에 100명 이상의 고객에게 판매한 상품의 product_idx와 total_sales(총 매출액)을 담은 테이블 ac와 상품(Products) 테이블에서 
-- 상품 테이블과 ac 테이블의 상품번호가 일치하는 상품 테이블과 ac 테이블의 컬럼들을 출력
SELECT p.*,ac.* 
FROM Products p, (SELECT product_idx, total_sales FROM Accounts WHERE total_customers_number >= 100) ac
WHERE p.product_idx=ac.product_idx;
