-- # 계산 필드에서의 쿼리
-- SQL 문에서는 경우에 따라 컬럼들을 연산하거나 문자열을 서로 연결할 필요가 있을 수 있다.
-- 계산 및 연결을 통해 만들어진 컬럼들은 Alias(AS)를 지정하여 새 컬럼명으로 인식하도록 할 수 있다.

-- 20세 이상인 사람들의 NAME과 AGE 컬럼 문자열을 결합하여 새로운 컬럼명인 Info로 반환한다.
SELECT Name + ' ' + Age AS Info
FROM Person;
WHERE AGE >= 20; 

-- 상품 테이블에서 Price와 Price와 Salerate를 계산한 할인가격 Saleprice를 SELECT.
SELECT Price, Price * Salerate AS Saleprice
FROM Product;