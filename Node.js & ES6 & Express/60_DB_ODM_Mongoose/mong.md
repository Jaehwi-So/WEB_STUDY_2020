# 몽구스
1. 몽구스는 시퀄라이즈와 달리 RRM(Object Relational Mapping)이 아닌 ODM(Object Document Mapping)으로 불림
2. 릴레이션을 사용하는 것 대신 다큐먼트를 사용한다.
3. 자바스크립트 객체와의 매핑으로 스키마(schema) 기능을 지원한다.
    - 몽고디비에 데이터를 넣기 전에 정해진 틀에 따라 데이터를 서버단에서 필터링하는 역할
4. JOIN기능을 populate 메서드로 보완한다. 이를 통해 관계가 있는 데이터를 가져올 수 있다.

패키지 설치 : npm i mongoose

# 쿼리

## CREATE
db.comments.save({commenter: 'reqid', comment: 'reqcomment' });
```
const comment = await Comment.create({  
      commenter: req.body.id,
      comment: req.body.comment,
    });
```

## READ

### ReadAll
```
const users = await User.find({});  //User 전체 조회
```

### ReadOne
```
const user = await User.findById(req.params.id);    //아이디로 찾기
const user = await User.findOne({ _id: req.params.id });    //필드로 검색하기
```

### Where
```
const user = await User.find({ name: 'kim' })
```

### 일부 필드 Read
```
const user = await User.find({ name: 'kim' }, {_id: 0, name: 1, married: true});
```

### 정렬
```
const user = await User.find({age : {$gte: 20}}, {_id: false, name: 1, age: true}).sort({age: -1});
```

## UPDATE
db.users.update({ id: 'paramid'}, { $set: { comment: 'paramcomment'} });
```
const result = await Comment.update({
    _id: req.params.id,
}, {
    comment: req.body.comment,
});

const result = await Comment.findByIdAndUpdate(req.params.id, { 
$set: { 
       'comment':req.body.comment      
    }
});
```

## DELETE
```
const result = await User.remove({id: req.params.id});
const result = await User.findByIdAndDelete(req.params.id);
```

## POPULATE

```
//댓글 Insert
const comment = await Comment.create({  
      commenter: req.body.id,
      comment: req.body.comment,
});
//프로미스로 반환된 comment 객체에 path에 명시된 필드의 ref인 조건에 맞는 User를 추가한다.
const result = await Comment.populate(comment, { path: 'commenter' });
```

```
//찾은 comment 객체에 populate을 통해 commenter 필드의 ref인 User 객체의 정보를 추가하여 반환한다.
const comments = await Comment.find({ commenter: req.params.id }).populate('commenter'); 
```