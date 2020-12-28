-- # 에러 핸들링

BEGIN
    -- SQLEXCEPTION이 발생했을 시 BEGIN-END 블럭의 내용을 실행시키고 프로시저를 종료시킨다. MSSQL의 TRY-CATCH에 해당.
    DECLARE EXIT HANDLER FOR SQLEXCEPTION	 
    BEGIN
      ROLLBACK;
    	SET _Result = -1;
	-- GET DIAGNOSTICS 구문을 통해 - RETURNED_SQLSTATE, MYSQL_ERRNO, MESSAGE_TEXT의 정보를 가져온다.
    	GET DIAGNOSTICS CONDITION 1 @sqlstate = RETURNED_SQLSTATE, @errno = MYSQL_ERRNO, @text = MESSAGE_TEXT;
      SET _ERR_Message = @text;
      EXIT;
    END;
    
    SET @currTime = current_timestamp();
    
    START TRANSACTION;
	UPDATE test
	SET NAME = _name
	WHERE IDX = (SELECT IDX FROM test WHERE IDX = _idx);
    COMMIT;
    -- SELECT LAST_INSERT_ID() INTO _Result;
    SET _Result = 1;
END