# Microsoft SQL Server Database (MSSQL) 사용

## MSSQL 환경

### 데이터베이스 서버와 클라이언트
- RDMS의 클라이언트의 종류에는 개발한 웹 애플리케이션, 또 다른 각종 서버 애플리케이션이 운영되는 또 다른 서버 등이 될 수 있다.
- MSSQL 서버에서는 데이터를 영구적이고 안정적으로 보관하는 목적.
- MSSQL 서버는 개발자를 위한 Microsoft SQL Server Management Studio라는 전문적인 DB 서버 관리 클라이언트 툴을 제공한다.

### 개발 환경 설정
- SSMS(Microsoft SQL Server Management Studio) Client 툴이 설치된 버전 설치
- MSSQL 보안 서버 인증 방식 : SQL Server 및 윈도 인증 모드
- SSMS 옵션 설정 : 상단 도구 -> 옵션 -> 디자이너 -> 테이블을 다시 만들어야 하는 변경 내용 저장 안 함 해제.(테이블 최초 생성 이후 구조를 재변경 가능하도록)

## MSSQL 다루기

### 데이터 형식
- 비트 
	+ bit : 1, 0, null
- 기본 문자형(기본 1byte)
	+ char(10) : 고정길이 문자형
	+ varchar(40) : 가변길이 문자형
	+ text : 텍스트
- 유니코드 문자형(기본 2byte, 다국어 지원)
	+ nchar(10) : 고정길이 문자형
	+ nvarchar(40) : 가변길이 문자형
	+ ntext : 텍스트
- 정수형
	+ tinyint : 1byte
	+ smallint : 2byte
	+ int : 4byte
	+ bigint : 8byte
- 실수형
	+ decimal(p,s) : 8byte, 고정형 실수. 정확한 숫자형 표기가 가능하며 주로 금융권에서 사용
	+ numeric(p,s) : 5-17byte, decimal과 용처 동일
	+ float(n) : 4-8byte, 부동형 실수-근사치 사용, 소수점 이하 반올림
	+ real : 4byte, 부동형 실수-근사치 사용
- 날짜형
	+ datetime : 8byte, yyyy-mm-dd tt-mm-ss ms
	+ smalldatetime : 4byte, yyyy-mm-dd tt-mm-ss
	+ Date : 3byte, yyyy-mm-dd
- 기타
	+ Binary : 8000byte
	+ image : 2G

### 테이블 생성
- 테이블 이름은 복수형(Members, Articles..)
- 데이터베이스 생성 : 소유자는 기본값
- 테이블 생성 : 테이블 폴더에서 테이블 생성.
- 열 속성에서 ID 사양 기능을 통해 자동으로 인덱스가 증가하도록 할 수 있다.

## 새 계정 등록
- SQL Server 인증 방식으로 계정을 등록한다.
- 아이디와 암호를 입력하고 암호 정책 강제 적용 체크박스를 해제한다.
- 좌측 메뉴 사용자 매핑 탭에서 해당 계정에 대한 사용자 권한을 선택한다.
	+ 로그인 매핑된 사용자를 서택하고 데이터베이스 역할 멤버 자격에서 db_owner 체크박스를 체크한다.

## 쿼리 질의문 사용
   
### SELECT FROM
```
select * from members;
select * from members where MemberID='Customer' and MemberName='김철수';
```
### INSERT INTO
```
insert into members(MemberID, MemberPWD, MemberName, Email, Telephone, EntryDate)
values('Customer1', '1111', '김철수', 'test1@gmail.com', '010-1111-1111', GETDATE());
```
### UPDATE SET
```
update members set MemberName='김길동' where MemberID='Customer1';
```
### DELETE FROM
```
delete from members where MemberID='Customer1'
```