--메모 정보를 관리하는 테이블 생성
CREATE TABLE MEMO_T(
	IDX NUMBER(3) PRIMARY KEY, -- 일련번호
	TITLE VARCHAR2(100) NOT NULL, -- 제목
	CONTENT VARCHAR2(4000), -- 내용
	PWD VARCHAR2(20) UNIQUE NOT NULL, -- 비밀번호
	IP VARCHAR2(30) NOT NULL, -- IP주소	
	WRITE_DATE DATE --작성일
);

-- # INSERT : 테이블에 튜플 추가 
(Autocommit : 자동커밋. 테이블의 갱신이 필요할 때 COMMIT을 하는데 이것을 끄고 한다. 한번 run한 후 commit부분을 추가하여 한번 더 run)
INSERT INTO MEMO_T
VALUES('1111', 'TITLE1', 'CONTENT1', '1234', '255.255.254.0', SYSDATE);
COMMIT;	-- 테이블에 물리적으로 자원을 기록하는 키워드. SELECT를 제외하고 COMMIT을 해주어야 한다.

INSERT INTO MEMO_T
VALUES('1112', 'TITLE2', 'CONTENT2', '234saa', 192.255.254.255', SYSDATE);
COMMIT;

-- # 시퀀스 : 테이블에 순차적인 숫자가 자동으로 저장되도록 하는 객체.
CREATE SEQUENCE MEMO_SEQ;

--시퀀스를 통해 MEMO_T에 데이터 추가하기
INSERT INTO MEMO_T
VALUES(MEMO_SEQ.NEXTVAL, '제목1', '내용', '1357', '192.1.12.1', SYSDATE);

INSERT INTO MEMO_T
VALUES(MEMO_SEQ.NEXTVAL, '제목2', '내용2', '2345', '192.1.12.1', SYSDATE);