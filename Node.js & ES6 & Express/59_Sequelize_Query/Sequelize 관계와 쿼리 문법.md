# 관계 정의
### 1. hasMany   
1명의 user가 여러 개의 comment를 가진다. 
```
user.associate = function(models) {
    user.hasMany(models.comment, { foreignKey: 'id' })
}
```
### 2. hasOne   
1명의 user가 한 개의 user_info를 가진다.
```
user.associate = function(models) {
    user.hanOne(models.user_info, { foreignKey: 'id' })
}
```
### 3. belongsTo   
1개의 comment는 user 한 명에게 속해있다. 
```
comment.associate = function(models) {
    comment.belongsTo(models.user, { foreignKey: 'id' })
}
```
### 4. belongsToMany   
1개의 posts가 여러 개의 hashtags를 가질 수도 있고, 1개의 hashtags가 여러 개의 posts에 속해 있을 수 있다.
```
post.assoiciate = function(models) {
    post.belongsToMany(models.hashtag, { through: 'PostHashtag' })
}
hashtag.associate = function(models) {
    hashtag.belongsToMany(models.post, { through: 'PostHashtag' })
}
```

--------------

# 쿼리문
기본적으로 Sequelize를 통한 쿼리 수행 시 반환되는 값은 Model 객체라는 점을 인지하자.

## SELECT
```
//# SELECT ALL
SELECT * FROM users;

models.User.findAll({});

//# SELECT ONE
SELECT * FROM users LIMIT 1;

models.User.findOne({});

//# Attributes 옵션으로 원하는 컬럼만 가져오기
SELECT name, age FROM users;

models.User.findAll({
    attributes: ['name', 'age']
});

```

findOne과 findAll 메서드를 호출할 때의 결과로 Model을 반환한다.
```
const user = await User.findOne({});
console.log(user.name, user.age);
```

## WHERE
```
SELECT name, age FROM users
WHERE age <= 20 AND region = '서울특별시';

models.User.findAll({
    attributes: ['name', 'age'],
    where: {
        age: {lte : 20},
        region: '서울특별시'
    }
});
```

## LIKE
````
SELECT * FROM users
WHERE name LIKE '김%';

models.User.findAll({
    where: ["name like ?", "김%"],
});
models.User.findAll({
    where: { name: { like: "김%" } },
});
````

## 연산자와 날짜 
비교 연산, 대입 연산(=)은 :
lt, gt, lte, gte, between
```
//현재 시간보다 오래된 경우
models.Foo.findAll({
  where: { createdAt: { lt: new Date() } },
})

//2014-01-01보다 최신인 경우
models.Foo.findAll({
  where: { createdAt: { gt: Date.parse("2014-01-01") } },
})

//현재 시간과 2012-01-01일 사이인 경우
models.Foo.findAll({
  where: { createdAt: { between: [new Date(), Date.parse("2012-01-01")] } },
})
```

## Op 객체 이용 연산자 
시퀄라이즈 객체 내부의 Op 객체를 이용하여 연산이 가능하다.
- Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.lte(이하)
- Op.ne(같지 않음), Op.or(또는)
- Op.in(배열 요소 중 하나), Op.notIn(배열 요소와 모두 다름)
```
SELECT id, name FROM users
WHERE region = '서울특별시' OR age > 30;

const { Op } = require('sequelize');
models.User.findAll({
    attributes: ['id', 'name'],
    where: { [Op.or]: [{region: '서울특별시'}, {age : {[Op.gt] : 30} }] },
});
```

## ORDER BY
```
SELECT name, age FROM users
WHERE name LIKE '김%'
ORDER BY age DESC;

models.User.findAll({
    attributes: ['name', 'age'],
    where: ["name like ?", "김%"],
    order: [['age', 'DESC']],   //배열 안에 배열 형태의 인수
});
```

## LIMIT, OFFSET
LIMIT : 출력 행 수를 설정한다.  
OFFSET : 해당 행의 다음 행부터 출력한다.  
페이징 처리 등에서 주로 사용된다.
```
//10행부터 14행까지 5개의 행을 출력한다.
SELECT * FROM users
WHERE name LIKE '김%'
ORDER BY age DESC
LIMIT 5 OFFSET 9;

models.User.findAll({
    attributes: ['name', 'age'],
    where: ["name like ?", "김%"],
    order: [['age', 'DESC']],  
    limit: 5,
    offset: 9,
});
```

---------------

## INSERT   
자료형은 MySQL의 자료형이 아닌 시퀄라이즈 모델에서 정의한 자료형과 일치해야 한다.
```
INSERT INTO users (name, age, region)
VALUES('kim', 23, '서울특별시');

models.User.create({
    name: '김길동',
    age: 23,
    region: '서울특별시'
});
```

## UPDATE
```
UPDATE users 
SET name = "박길동", age = 26
WHERE id = 3;

models.User.update({
    name : '박길동',
    age : 26
},{
    where : {id : 3},
});
```

## DELETE
```
DELETE FROM users
WHERE id = 3;

models.User.destroy({
    where : {id : 3},
});
```
--------------
## INCLUDE(JOIN)
관계가 맺어져 있는 모델들에서의 JOIN 쿼리문을 수행할 수 있다.   
어떤 모델과 관계가 있는지를 include 배열에 넣어준다. 배열인 이유는 다양한 모델과 관계가 있을 수 있기 때문이다.

### 기본 INCLUDE 사용
include를 사용하면 해당 모델 객체에 속성으로 추가로 include한 모델의 객체를 담는다.
```
//특정 사용자를 가져오면서 그 사람의 댓글까지 모두 가져오기
const user = models.User.findOne({
    include[{
        model : Comment,
    }]
});
console.log(user.Comment); //특정 사용자의 댓글 목록
console.log(user.Comment[0].comment);  //특정 사용자의 첫번째 댓글의 comment 속성
```

### INCLUDE에서의 WHERE(ON)
include나 관계 쿼리 메서드에서도 외래키 이외의 JOIN조건이 필요하다면   
JOIN의 ON과 같이 where을 이용해 사용할 수 있다.
```
//댓글 목록을 User 모델 정보와 함께 가져오되 
//User의 기본키와 Comment의 외래키가 일치하고, User의 기본키가 파라미터와 일치해야 하며
//User의 결혼여부는 true이며 댓글에는 '안녕'이라는 문장이 들어간 경우의 댓글들의 목록을 가져온다.
const comments = await Comment.findAll({
    include: {  
        model: User,
        where: { id: req.params.id, married: true},
    },
    where: {
        comment: { like: "%안녕%" },
    }
});
```

### INCLUDE에서의 Attributes
기본적으로 include를 사용하면 해당 모델 객체에 속성으로 추가로 include한 모델의 객체를 담는다.
include되어 추가되는 모델에는 모든 속성이 담는다. 
attributes를 이용해 User 모델 객체에 추가되는 Comment 모델 객체에 담길 일부 속성만을 지정할 수 있다.
```
const user = models.User.findOne({
    include[{
        model : Comment,
        attributes : ['comment'],
    }]
});
```

### AS를 통한 별칭지정
as 옵션을 통해 해당 모델에서 참조 모델 사용 시의 명칭을 지정할 수 있다.
```
db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id', as: 'Answer'});

//include시 추가되는 댓글 객체가 user.Answer로 변경된다.
const user = await Comment.findAll({
    ...
});
console.log(user.Answer[0].comment);
```

### 관계 쿼리 사용
관계를 설정했다면 다음과 같은 메서드들을 지원한다. 동사 뒤에 모델의 이름이 붙는다.   
getComments(조회), setComments(수정), addComment(하나 생성), addComments(여러 개 생성), removeComments(삭제)   
관계가 맺어진 모델들 사이에서 다음과 같이 댓글에 접근할 수도 있다.   
```
const user = models.User.findOne({});   //유저 한 명 조회
const comments = user.getComments({});   //해당 유저의 comment들을 얻어옴
```

### Create, Update, Delete 시의 관계 쿼리 사용
```
const user = await User.findOne({});    //유저 한 명 조회
const comment = await Comment.create(); //댓글 한 개 생성
const comment2 = await Comment.create(); //댓글 한 개 생성
await user.addComment([comment, comment2]);   //댓글들을 조회한 유저 모델에 추가
```
-------------
### SQL 쿼리하기
직접 SQL문을 통해 쿼리할 수 있다. 시퀄라이즈 쿼리로 할 수 없는 경우 사용한다.
```
const [result, metadata] = await sequelize.query('SELECT * FROM comments');
console.log('res', result); 
console.log('res[0].name', result);     //첫번째 사람의 이름
console.log('meta', metadata);
```