-- # 트랜잭션
-- 일련의 과정들을 하나의 처리과정으로 묶는 기능을 제공한다.
-- 해당 처리 과정이 모두 성공할 시 commit하고 아닐 시 rollback을 하여 취소한다.

BEGIN
	DECLARE bigger_num INT DEFAULT 0;
	DECLARE smaller_num INT DEFAULT 0;
	DECLARE i INT DEFAULT 0; 
	
	SET smaller_num = _number;
	SET bigger_num = _number + 1;
	
	START TRANSACTION;	-- 트랜잭션 시작. rollback이나 commit을 만날 때 까지 트랜잭션
	number_loop : LOOP	-- 반복문 시작.
			INSERT INTO test(NAME, num1, num2)
			VALUES("TEST", bigger_num, smaller_num);
			
			SET i = i + 1; 
			SET bigger_num = bigger_num + 1; 
			SET smaller_num = smaller_num + 1;		
			
			IF i = 10 THEN
				LEAVE number_loop;
			END IF;	
			
			IF bigger_num > 20 THEN	-- 값이 20을 초과할 경우 commit하지 않고 rollback한다.
					ROLLBACK;
					LEAVE number_loop;
			END IF;
			
	END LOOP number_loop;
	COMMIT;		-- 트랜잭션 성공
	
END