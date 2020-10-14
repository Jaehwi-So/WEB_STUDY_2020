-- https://dev.mysql.com/downloads/installer/
-- 용량이 작은 mysql-installer-web-community 다운로드
-- - Choosing a setup type -> custom

-- - Select Products and Features
-- Available products에서
-- Mysql Server과 workbench만 설치

-- Configure에서 비밀번호 설정(1111)로 했음

-- MySQL 접속
-- 프롬프트창에서 
--C:\Program Files\MySQL\MySQL Server 8.0\bin 경로로 이동 후
-- mysql -h localhost -u root -p 명령어 입력.
-- -h 뒤에는 접속할 주소를, -u 뒤에는 사용자명을 입력한다. -p는 비밀번호를 사용하겠다는 뜻이다.
-- 비밀번호까지 입력하면 mysql 접속완료.

-- 워크벤치 : 데이터베이스 내부에 저장된 데이터를 시각적으로 관리할 수 있다.
-- 커넥션 생성
-- MySql Connections에 +버튼 클릭
-- Connection Name에 localhost 로 설정
-- Password에 Store in Vault.. 클릭 후 설정했던 비밀번호 입력