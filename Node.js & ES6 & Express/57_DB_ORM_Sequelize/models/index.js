//자동으로 생성되는 config index.js 파일 수정
const Sequelize = require('sequelize'); //시퀄라이즈 패키지이자 생성자

const env = process.env.NODE_ENV || 'development';
//config.json 파일에는 데이터베이스 설정 정보가 들어있다.
//development.password와 development.database 등을 현재 MySQL 커넥션과 일치하게 수정
//config.json에서 development 설정은 env파일의 NODE_ENV 속성이 development일 때 적용(개발 모드)
//실제 배포 시에는 production 속성으로 사용됨.
//테스트 환경에서는 test속성으로 사용됨
const config = require('../config/config')[env];  //데이터베이스 설정을 불러온다.
const db = {};

//MySQL 연결 객체를 생성한다.
const sequelize = new Sequelize(config.database, config.username, config.password, config);
//생성된 연결 객체를 나중에 재사용하기 위해서 db.sequelize에 넣어둔다.
db.sequelize = sequelize;

module.exports = db;
