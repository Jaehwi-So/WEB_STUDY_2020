-- # 저장 프로시져 (Stored Procedure, SP)
- 경우에 따라 여러 SQL문장을 수행하여 복잡한 로직을 구성할 필요가 있다. 
- 이렇게 여러 SQL문장들을 SQL서버에서 단위로 저장해서 편리하게 호출할 수 있게 만든 것이 저장 프로시져이다.
- 프로시져는 복잡한 비지니스 로직을 넣을 수도 있고, 복잡한 데이타 처리를 수행할 수 있다.

-- # 사용 방법
-- CREATE PROCEDURE(CREATE PROC)문을 통해 프로시져를 생성한다.
-- AS 뒤에 저장할 SQL 문장들을 적어준다.
-- 프로시져 안에서 사용할 입력 파라미터를 받아들이고 출력 파라미터를 내보낼 수 있다.
-- 입력 파라미터는 프로시져명과 AS절 사이에 @로 시작하는 파라미터명과 파라미터 타입을 콤마로 구분하여 적는다.
-- 출력 파라미터의 경우 OUTPUT 키워드를 뒤에 붙이며 프로시져 내에서 출력 파라미터에 값을 할당해 준다.


-- # 기본적인 프로시저 생성하기
CREATE DEFINER=`root`@`%` PROCEDURE `test_proc`()
LANGUAGE SQL
NOT DETERMINISTIC
CONTAINS SQL
SQL SECURITY DEFINER
COMMENT ''
BEGIN
	SELECT * FROM test;
END


-- # 프로시저를 통한 SELECT 수행

-- 두개의 파라미터 중 더 작은 값을 최대값으로 하여 test 테이블의 num1과 num2가 둘 다 최대값을 넘지 않는 레코드들의 num1과 num2들의 합을 출력

CREATE DEFINER=`root`@`%` PROCEDURE `test_proc2`(
	IN `_max_num1` INT,	-- 입력 파라미터
	IN `_max_num2` INT	-- 입력 파라미터
)
LANGUAGE SQL
NOT DETERMINISTIC
CONTAINS SQL
SQL SECURITY DEFINER
COMMENT ''
BEGIN
 DECLARE `_max_num` INT;	-- 내부 변수 선언
 SET _max_num = IF(_max_num1 < _max_num2, _max_num1, _max_num2);	-- 입력 파라미터들 중 더 작은 값을 최대값으로 설정
 SELECT SUM(t.NUM1) AS SUM_NUM1 , SUM(t.NUM2) AS SUM_NUM2,  _max_num AS MAX
 FROM test t
 WHERE t.NUM1 <= _max_num AND t.NUM2 <= _max_num;
END