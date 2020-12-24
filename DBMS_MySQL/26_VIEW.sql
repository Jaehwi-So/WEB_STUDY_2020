-- # VIEW
-- View는 하나의 테이블로부터 특정 컬럼들만을 보여주거나 특정 조건에 맞는 레코드들만을 보여줄 때 사용될 수 있다.
-- 두 개 이상의 테이블을 JOIN하여 하나의 뷰로 사용자에게 보여주는 데 이용될 수도 있다.
-- View 자체는 실제 데이터를 가지고 있지는 않으며 SELECT문의 정의만을 가진다.

-- # 한 테이블의 뷰
-- Student 테이블에서 학교 번호가 10인 학생들의 이름과 나이만을 선택하여 VIEW를 생성한다. 
CREATE VIEW StudentView AS
SELECT Name, Age FROM Student WHERE SchoolIdx = 10;

-- 뷰 사용법
SELECT * FROM StudentView;

-- # 복수 테이블을 조인하여 만든 뷰
CREATE VIEW NotebookProduct AS
SELECT p.Idx, p.Name, p.Price, p.Stock, n.SSD, n.RAM
FROM Products p Notebook n
WHERE p.Idx = n.Idx

-- 뷰 사용법
SELECT * FROM NotebookProduct;
