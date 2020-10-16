/*
CREATE TABLE USER (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
age INT UNSIGNED NOT NULL,
married TINYINT NOT NULL,
comment TEXT NULL,
created_at DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY(ID),
UNIQUE INDEX name_UNIQUE (name ASC))
COMMENT = '사용자 정보'
DEFAULT CHARACTER SET = utf8
ENGINE = InnoDB;
*/

//User 모델을 만들어 users 테이블에 연결, 그리고 모듈로 exports
//User 모델은 Sequelize.Model을 확장한 클래스로 선언
const Sequelize = require('sequelize');
module.exports = class User extends Sequelize.Model{
    //1. static init 메서드 : 테이블에 대한 설정
    //첫 번째 인수가 테이블 컬럼에 대한 설정, 두 번째 인수는 테이블 자체에 대한 설정
    static init(sequelize){
        return super.init({
            //id INT NOT NULL AUTO_INCREMENT
            //시퀄라이즈는 알아서 ID 컬럼을 생성하고 기본 키로 설정한다. 
            //따라서 id컬럼을 적어줄 필요는 없다.
            name : {    //name VARCHAR(20) NOT NULL
                type : Sequelize.STRING(20),
                allowNull : false,
                unique : true
            },
            age : { //age INT UNSIGNED NOT NULL
                type : Sequelize.INTEGER.UNSIGNED,
                allowNull : false
            },
            married : { //married TINYINT NOT NULL
                type : Sequelize.BOOLEAN,
                allowNull : false
            },
            comment : { //comment TEXT NULL
                type : Sequelize.TEXT,
                allowNull : true
            },
            created_at : {  //created_at DATETIME NOT NULL DEFAULT NOW()
                type : Sequelize.DATE,
                allowNull : false,
                defaultValue : Sequelize.NOW
            }
        },{
            //두 번째 매개변수 : 테이블 옵션

            //sequelize : static init 메서드의 매개변수와 연결되는 옵션 
            sequelize,  //나중에 model.index.js에서 db.sequelize객체와 연결한다.
            //timestamps : true이면 createdAt와 updatedAt 컬럼을 추가한다.
            timestamps : false, //true이면 로우가 생성될 때와 수정될 때의 시간이 자동으로 입력된다.
            //modelName : 모델의 이름을 설정한다. 노드 프로젝트에서 사용
            modelName : 'User',
            //tableName : 실제 데이터베이스의 테이블 이름이 된다. 기본적으로 모델 이름을 소문자 및 복수형으로 만든다.
            tableName : 'users',
            //paranoid : true이면 deletedAt 컬럼을 추가한다. 로우를 삭제할 때 완전히 지워지지 않고
            //deletedAt에 지운 시각이 기록된다. Select시에는 deletedAt의 값이 null인 로우만 조회한다.
            paranoid : false,  //로우를 복원해야 하는 상황이 생길것 같을 때 true로 설정한다.
            //기본 인코딩과 콜레이션을 설정한다. utf8로 설정해야 한글이 입력된다.
            charset : 'utf8',
            collate : 'utf8_general_ci'
        });
    }
    //2. associate 메서드 : 다른 모델과의 관계를 적는다.
    //user와 comment는 1:n 관계이므로 hasMany를 사용한다.
    //Comment의 외래키인 commenter에 sourceKey인 id 컬럼을 전달한다.
    static associate(db){
        db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
    }
}

/*
MySQL 자료형            Sequelize 자료형
VARCHAR(100)            STRING(100)
INT                      INTEGER
TINYINT(부울값 용도)      BOOLEAN
DATETIME                   DATE
INT UNSIGNED            INTEGER.UNSIGNED
NOT NULL                allowNull : false
UNIQUE                  unique : true
DEFAULT now()           defaultValue : Sequelize.NOW
*/