-- # 제약 조건과 옵션
-- 제약조건 설정 시 CONSTRAINT를 이용하여 제약 조건의 이름을 설정할 수 있다.
-- 이름을 설정해야 수정이나 삭제 시 용이하다.
-- ===========================================================
-- # PRIMARY KEY : 해당 필드를 기본키로 설정. NOT NULL과 UNIQUE의 제약조건을 모두 가짐.

-- 1) PRIMARY KEY 설정하기

CREATE TABLE parent (
  id INT NOT NULL,
  PRIMARY KEY(ID)
);

-- 2) ALTER를 이용해 필드에 PRIMARY KEY 추가하기
-- ALTER TABLE 테이블이름
-- MODIFY COLUMN [CONSTRAINT 제약조건이름] PRIMARY KEY (필드이름) 
-- (CONSTRAINT에는 제약조건의 이름을 짓는다.)
-- 혹은
-- ALTER TABLE 테이블이름
-- MODIFY COLUMN 필드이름 필드타입 PRIMARY KEY

ALTER TABLE parent
CONSTRAINT uniqueID ADD PRIMARY KEY (ID);

-- 3) PRIMARY KEY 제약 조건 삭제하기
ALTER TABLE parent
DROP PRIMARY KEY;

-- ===========================================================
-- # FOREIGN KEY : 해당 필드를 외래키로 설정한다. 이로서 하나의 테이블을 다른 테이블에 의존하게 만든다.

-- 1) FOREIGN KEY 설정하기
CREATE TABLE child(
    id INT,
    parentID INT,
    CONSTRAINT uniqueID
    FOREIGN KEY (parentID)	-- 외래키로 parentID 설정
    REFERENCES parent(id) ON UPDATE CASCADE	-- 참조할 테이블과 필드를 명시한다. 의존하는 테이블이 변경되면 해당 테이블도 변경된다.
);

-- 2) ALTER를 통해 FOREIGN KEY 설정하기
-- ALTER TABLE 테이블이름
-- ADD [CONSTRAINT 제약조건이름]
-- FOREIGN KEY (필드이름)
-- REFERENCES 테이블이름 (필드이름)

ALTER TABLE child
ADD CONSTRAINT uniqueID	-- 제약조건 이름 설정
FOREIGN KEY (parentID)	-- parentID를 외래키로 설정
REFERENCES parent(id);	-- 참조할 테이블과 필드 명시

-- 3) DROP을 통해 FOREIGN KEY 설정 삭제하기
-- ALTER TABLE 테이블이름
-- DROP FOREIGN KEY 제약조건이름

ALTER TABLE child
DROP FOREIGN KEY uniqueID;

-- 4) ON DELETE, ON UPDATE
-- 참조되는 테이블에서 데이터의 수정이나 삭제가 발생하면 참조하고 있는 테이블의 데이터도 같이 영향을 받는다.
-- 참조하고 있는 테이블의 동작을 FOREIGN KEY 제약 조건에서 미리 설정할 수 있습니다.
-- 1. ON DELETE : 참조되는 테이블의 값이 삭제될 경우
-- 2. ON UPDATE : 참조되는 테이블의 값이 수정될 경우
-- 이때 설정할 수 있는 동작
-- 1. CASCADE : 참조되는 테이블에서 데이터가 변경되면, 참조하는 테이블에서도 삭제와 수정이 같이 변경된다.
-- 2. SET NULL : 참조되는 테이블에서 데이터가 변경되면, 참조하는 테이블의 데이터는 NULL로 변경된다.
-- 3. NO ACTION : 참조되는 테이블에서 데이터가 변경되면, 참조하는 테이블의 데이터는 변경되지 않는다.
-- 4. SET DEFAULT : 참조되는 테이블에서 데이터가 변경되면, 참조하는 테이블의 데이터는 필드의 기본값으로 설정한다.
-- 5. RESTRICT : 참조하는 테이블에 데이터가 남아 있으면, 참조되는 테이블의 데이터를 삭제하거나 수정할 수 없게 한다.

CREATE TABLE child(
    id INT,
    parentID INT,
    CONSTRAINT uniqueID
    FOREIGN KEY (parentID)	-- 외래키로 parentID 설정
    REFERENCES parent(id) ON UPDATE CASCADE	--참조되는 테이블에서 데이터가 수정되면 참조하는 테이블에서도 수정된다.
);

-- ===========================================================
-- # NULL, NOT NULL : 빈칸을 허용할지의 여부를 묻는 제약 조건
CREATE TABLE TEST(
 name VARCHAR(20) NOT NULL
);

-- # UNIQUE : 중복을 허용할 것인지의 여부를 묻는 제약 조건
CREATE TABLE TEST(
 name VARCHAR(20) NOT NULL
 password VARCHAR(20) NOT NULL UNIQUE  --password를 unique 설정
 password2 VARCHAR(20) NOT NULL 
 UNIQUE (password2) -- password2도 unique 설정
);

-- # UNSIGNED : 숫자 자료형에서 음수를 허용하지 않음. INT라면 0~4294967295까지 저장 가능, FLOAT와 DOUBLE에는 적용 불가능
-- # ZEROFILL : 숫자의 자릿수가 고정되어 있을 때 사용. INT(자릿수) 형태일 때 비어있는 자리에 모두 0을 넣는다.


-- # AUTO_INCREMENT : 데이터를 넣을 시 숫자를 순차적으로 1번부터 부여한다. SEQUENCE의 역할
-- AUTO_INCREMENT 키워드 다음에 대입 연산자(=)를 사용하여 시작값을 변경할 수 있다.
CREATE TABLE TEST(
 idx INT NOT NULL AUTO_INCREMENT
);