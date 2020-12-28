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

-- # 프로시져 실행(입력 파라미터 사용)

CALL test_proc2(10, 25, "TEST1");
SELECT @result;


-- # 프로시저를 통한 INSERT 수행
CREATE DEFINER=`root`@`%` PROCEDURE `test_proc3`(
	IN `_num1` INT,	-- 입력 파라미터
	IN `_num2` INT,
	IN `_name` VARCHAR(30)

)
LANGUAGE SQL
NOT DETERMINISTIC
CONTAINS SQL
SQL SECURITY DEFINER
COMMENT ''
BEGIN
	DECLARE bigger_num INT DEFAULT 0;
	DECLARE smaller_num INT DEFAULT 0;
	
	IF _num2 < _num1 THEN
	SET bigger_num = _num1; 
	SET smaller_num = _num2;
	
	ELSE 
	SET bigger_num = _num2; 
	SET smaller_num = _num1;
	
	END IF;
	
	INSERT INTO test(NAME, num1, num2)
	VALUES(_name, bigger_num, smaller_num);
END

-- # 프로시져 실행(출력 파라미터 사용)

CALL test_proc3(8, 10, "TEST3", @result);
SELECT @result;