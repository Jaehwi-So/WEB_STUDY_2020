-- # UPDATE SET : 레코드의 내용을 수정

-- UPDATE 테이블이름
-- SET 필드이름1=데이터값1, 필드이름2=데이터값2, ...
-- WHERE 필드이름=데이터값

UPDATE Reservation

SET RoomNum = 2002

WHERE Name = '홍길동';