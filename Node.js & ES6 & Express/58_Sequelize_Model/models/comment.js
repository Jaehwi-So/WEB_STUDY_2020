/*
CREATE TABLE comments(
id INT NOT NULL AUTO_INCREMENT,
commenter INT NOT NULL,	-- 댓글을 쓴 사용자 아이디
comment VARCHAR(100) NOT NULL,	-- 댓글 내용
created_at DATETIME NOT NULL DEFAULT now(),	-- 로우 생성일
PRIMARY KEY(id),
INDEX commenter_idx (commenter ASC),
CONSTRAINT commenter	-- 제약조건 이름을 설정
FOREIGN KEY (commenter)	-- 외래키로 컬럼을 설정
REFERENCES users (id)	-- 참조하는 테이블과 컬럼(필드)
ON DELETE CASCADE	-- 수정과 삭제 시 연결된 댓글 정보도 수정, 삭제
ON UPDATE CASCADE
)
COMMENT = '댓글'
DEFAULT CHARSET = utf8mb4
ENGINE = InnoDB;
*/
const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
      }
      //users 테이블과 연결된 commenter 컬럼이 없다.
      //모델을 정의할 때 넣어도 되지만 시퀄라이즈 자체에서 관계를 따로 정의할 수 있다.
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    });
  }

  //associate에 관계를 정의한다.
  //사용자와 댓글은 1:N 관계이다.
  //다른 모델의 정보가 들어가는 테이블에 belongsTo를 사용한다.
  //댓글 테이블에서 commenter 컬럼은 사용자 테이블의 id를 참조한다.
  //참조 대상 테이블을 명시하고 
  //외래키로 사용될 foreignKey에 commenter 컬럼을 추가한다. 
  //belongsTo를 사용하면 해당 외래키 컬럼이 자동으로 추가된다.
  //targetKey에는 참조 대상 컬럼을 넣는다.
  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
  }
};
//관계 정의하기
/*
1:N 관계 
부모 associate : db.Parent.hasMany(db.Child, { foreignKey: 'p_id', sourceKey: 'id' });
자식 associate : db.Child.belongsTo(db.Parent, { foreignKey: 'p_id', targetKey: 'id' });

1:1 관계 
부모 associate : db.Parent.hasOne(db.Child, { foreignKey: 'p_id', sourceKey: 'id' });
자식 associate : db.Child.belongsTo(db.Parent, { foreignKey: 'p_id', targetKey: 'id' });

N:M 관계 : 이 관계의 특성 상 자동으로 새로운 모델이 생성된다.
db.Firsttable.belongsToMany(db.Secondtable, { through : 'NMTable'});
db.Secondtable.belongsToMany(db.Firsttable, { through : 'NMTable'});
*/

//모델을 생성했다면 models/index.js와 연결한다.
