-- # DECLARE
-- 로컬 변수 선언.
-- DECLARE @변수명 변수타입
-- 로컬 변수는 GO 이전에 사용하면 유효하다.
-- SET문은 로컬 변수를 초기화하기 위해서 사용한다.

-- 로컬 변수 선언
DECLARE @Group nvarchar(50)
DECLARE @Name nvarchar(50)
-- 로컬 변수 초기화
SET @Group = 'SMU';
SET @Name = '소재휘';
-- 로컬 변수 사용
SELECT * 
FROM STUDENT
WHERE Group = @Group
AND Name = @Name;
GO

