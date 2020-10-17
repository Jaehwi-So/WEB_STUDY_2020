// # Create
use test	//test 데이터베이스를 사용

//db.[컬렉션명].save({json})
//users 컬렉션에 다큐먼트 추가
db.users.save({name: 'sjh', age: 24, married: false, comment: '안녕하세요', createdAt: new Date() });
db.users.save({name: 'kim', age: 38, married: true, comment: '저도 안녕하세요', createdAt: new Date() });

//MongoDB에는 다큐먼트마다 ObjectID가 부여되며 필드 이름은 _id로 표현된다.
db.users.find({name: 'sjh'}, {_id: 1}); -- id를 얻어 옴
// > ObjectId("5f8b55205e58e452ba001549")

//comments 컬렉션에 다큐먼트 추가
db.comments.save( { commenter: ObjectId("5f8b55205e58e452ba001549"), comment: '댓글입니다.', createdAt: new Date() } );

//Compass를 이용해서 다큐먼트를 쉽게 조작할 수 있다.