-- 샘플데이터
CREATE TABLE SCHOOL(
 IDX INT AUTO_INCREMENT PRIMARY KEY,
 NAME VARCHAR(50),
 REGION VARCHAR(50)	
);	
INSERT INTO SCHOOL(NAME, REGION)
VALUES('서울대학교', '서울시 관악구');
INSERT INTO SCHOOL(NAME, REGION)
VALUES('연세대학교', '서울시 서대문구');
INSERT INTO SCHOOL(NAME, REGION)
VALUES('고려대학교', '서울시 성북구');
CREATE TABLE STUDENT(
 STUDENT_IDX INT AUTO_INCREMENT PRIMARY KEY,
 SCHOOL_IDX INT NOT NULL,
 STU_NAME VARCHAR(50)
);	
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(1, '유재석', 25);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(1, '강호동', 28);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(1, '이효리', 22);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(2, '김태희', 22);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(2, '정지훈', 26);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(2, '송중기', 27);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(3, '박신혜', 25);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(3, '박보영', 21);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(3, '배수지', 26);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(4, '이광수', 23);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(4, '송지효', 25);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(4, '이수근', 28);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(5, '장동건', 29);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(5, '고소영', 27);
INSERT INTO STUDENT(SCHOOL_IDX, STU_NAME, AGE)
VALUES(5, '신세경', 23);

-- =================================

-- # INNER JOIN
-- JOIN은 여러 테이블에서 가져온 레코드를 조합하여 하나의 테이블이나 결과 집합으로 표현
-- INNER JOIN은 ON 절과 함께 사용되며, ON 절의 조건을 만족하는 데이터만을 가져온다. 첫번째 테이블과 두번째 테이블의 교집합을 가져옴

-- 첫번째테이블이름
-- INNER JOIN 두번째테이블이름
-- ON 조건
-- [WHERE..]

-- 첫번째테이블이름
-- JOIN 두번째테이블이름
-- ON 조건
-- [WHERE..]

-- ex) 학생의 소속학교 번호와 학교번호가 일치하는 경우 학생의 이름과 학교의 이름을 출력
SELECT STUDENT.stu_name, SCHOOL.name
FROM STUDENT
INNER JOIN SCHOOL
ON SCHOOL.idx = STUDENT.school_idx;

SELECT STUDENT.stu_name, SCHOOL.name
FROM STUDENT
JOIN SCHOOL
ON SCHOOL.idx = STUDENT.school_idx;

-- 별칭 지정 가능
SELECT STD.stu_name, SCH.name
FROM STUDENT STD
INNER JOIN SCHOOL SCH
ON SCH.idx = STD.school_idx;

-- =================================

-- # LEFT JOIN
-- LEFT JOIN은 ON 절의 조건을 만족하는 두 번째 테이블을 첫 번째 테이블에 조합하여 결과를 출력한다.

-- ex) 학생의 소속학교 번호와 학교번호가 일치하는 경우 학생 테이블에 학교 테이블의 정보를 붙여 출력.
SELECT *
FROM STUDENT
LEFT JOIN SCHOOL
ON SCHOOL.idx = STUDENT.school_idx;
-- 이 결과로 학교 테이블에 존재하지 않는 학교번호를 가진 학생들은 학교 테이블의 정보가 NULL로 표시된다.

-- # RIGHT JOIN
-- RIGHT JOIN은 ON 절의 조건을 만족하는 첫 번째 테이블을 두 번째 테이블에 조합하여 결과를 출력한다.

-- ex) 학생의 소속학교 번호와 학교번호가 일치하는 경우 학교 테이블에 학생 테이블의 정보를 붙여 출력.
SELECT *
FROM SCHOOL
RIGHT JOIN STUDENT
ON SCHOOL.idx = STUDENT.school_idx;


