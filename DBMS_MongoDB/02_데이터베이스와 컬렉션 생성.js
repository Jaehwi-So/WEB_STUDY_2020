//기본적으로 몽고DB는 javascript의 언어를 공유한다.

// # 데이터베이스 생성
// use [데이터베이스명]
use test

// # 데이터베이스 목록 확인. 
// 데이터베이스에 데이터를 최소 한 개 이상 넣어야 목록에 표시된다.
show dbs

// # 현재 사용중인 데이터베이스 확인
db

// # 컬렉션
// 테이블에 대응되는 개념.
// 기본적으로 다큐먼트를 넣는 순간 컬렉션도 자동으로 생성된다.
// 직접 컬렉션을 생성하는 명령어 또한 있다.
db.createCollection('users')
db.createCollection('comments')

// # 현재 사용중인 데이터베이스의 컬렉션 확인
show collections
