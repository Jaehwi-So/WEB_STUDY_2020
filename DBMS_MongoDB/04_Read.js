// # Read

//SELECT * FROM users
//users 컬렉션의 모든 다큐먼트 필드 전체 조회
db.users.find({});	

//find 메서드의 두 번째 인수로 조회할 필드를 선택.
//1또는 true로 표시한 필드만 가져온다. 
//기본적으로 _id를 가져오게 되어있으므로 가져오지 않도록 하기 위해서는 false나 0을 넣어야 한다.

//SELECT name, married FROM users;
//users 컬렉션의 모든 다큐먼트에서 필드 name, married를 조회
db.users.find({}, {_id: 0, name: 1, married: true});	

//# WHERE
//SELECT name, married FROM users WHERE age > 30 AND married = true;
//user 컬렉션의 age가 30 초과이고 married가 true인 다큐먼트에서 필드 name, married를 조회
db.users.find({age : {$gt: 30}, married: true}, {_id: 0, name: 1, married: true});	


