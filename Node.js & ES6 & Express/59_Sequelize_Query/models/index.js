const Sequelize = require('sequelize'); 
const User = require('./user');
const Comment = require('./comment');
const env = process.env.NODE_ENV || 'development';
//db 정보를 가져온다.
const config = require('../config/config')[env];  
const db = {};

//MySQL 연결 객체를 생성한다.
const sequelize = new Sequelize(config.database, config.username, config.password, config);
//생성된 연결 객체를 나중에 재사용하기 위해서 db.sequelize에 넣어둔다.
db.sequelize = sequelize;

//db 객체에 User와 Comment 모델을 담아두었다.
//앞으로 db객체를 require하여 User와 Comment모델을 사용할 수 있다.
db.User = User;
db.Comment = Comment;

//init 메서드를 호출해야 테이블과 모델이 연결된다.
User.init(sequelize);
Comment.init(sequelize);

//다른 테이블과의 관계를 연결하는 associate 메서드도 호출한다.
User.associate(db);
Comment.associate(db);

module.exports = db;
