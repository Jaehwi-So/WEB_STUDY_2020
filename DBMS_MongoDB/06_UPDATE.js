// # UPDATE

//이름이 kim인 다큐먼트의 comment 필드 변경
db.users.update({ name: 'kim'}, { $set: { comment: '이 필드를 바꿉니다'} });

//해당 id 다큐먼트의 name 필드 변경
db.users.update({_id: ObjectId("5f8b55205e58e452ba001549")}, {$set: {name: 'lee'}});