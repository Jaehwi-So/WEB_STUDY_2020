/*몽고DB

# RDBMS vs NoSQL
RDBMS: 규칙에 맞는 데이터 입력, 테이블 간 JOIN, 안전성,일관성, 테이블,로우,컬럼
NoSQL : 자유로운 데이터 형식 입력, 컬렉션 간 JOIN 불가능, 확장성,가용성, 컬렉션,다큐먼트,필드

빅데이터, 메시징, 세션 관리 등 일관성이 상대적으로 필요하지 않은 데이터는 확장성과 가용성을 고려하여 몽고디비를 사용할 수 있다.

다운로드
https://www.mongodb.com/download-center/community
On-premises
Setup-type : Complete
Service Configuration : 체크해제
캠퍼스 자동설치

C:\data\db 폴더 생성 후 

cmd창에서 경로 C:\Program Files\MongoDB\Server\4.4\bin 에서
서버 실행 : mongod 명령어로 몽고디비 서버 실행, 기본적으로 27017번 포트 사용, mongoDB를 사용할 때 우선 서버를 실행시켜야 한다.
몽고디비 프롬프트 접속 : mongo 명령어로 프롬프트 접속

관리자 계정 추가
use admin
계정 생성 : db.createUser({user: 'sjh', pwd: '1111', roles: ['root'] })

계정 생성 후 
서버 실행 : mongod --auth : 로그인 요구
접속 : mongo admin -u sjh -p 1111

캠퍼스
Fill in connection fields individually에서 이름과 비밀번호를 통해 접속*/