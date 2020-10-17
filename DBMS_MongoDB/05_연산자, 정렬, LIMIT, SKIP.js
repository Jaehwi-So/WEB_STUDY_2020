//# 연산자 
//$gt, $gte, $lt, $lte, $ne, $or, $in(배열 요소 중 하나)
//SELECT name, married FROM users WHERE age > 30 OR married = true;
//user 컬렉션의 age가 30 초과이거나 married가 true인 다큐먼트에서 필드 name, married를 조회
db.users.find( {$or: [ { age: {$gt: 30} }, {married: true} ]}, {_id: 0, name: 1, married: true});	

//# 정렬 : -1(내림차순), 1(오름차순)
//SELECT name, age FROM users WHERE age >= 20 ORDER BY age DESC;
//user 컬렉션의 age가 20 이상인 다큐먼트에서 필드 name, age를 조회 age 내림차순으로 조회
db.users.find({age : {$gte: 20}}, {_id: false, name: 1, age: true}).sort({age: -1});

//# 조회할 다큐먼트 개수 설정(LIMIT, OFFSET)
//limit, skip 메서드를 이용하여 설정
//user 컬렉션의 age가 20 이상인 다큐먼트에서 age 내림차순으로 한 개의 다큐먼트 필드 name, age를 조회
db.users.find({age : {$gte: 20}}, {_id: false, name: 1, age: true}).sort({age: -1}).limit(1);

////user 컬렉션의 age가 20 이상인 다큐먼트에서 age 내림차순으로 11번째 다큐먼트부터 5개의 다큐먼트의 필드 name, age를 조회
db.users.find({age : {$gte: 20}}, {_id: false, name: 1, age: true}).sort({age: -1}).limit(5).skip(10);