`use strict`
//Map : key와 value 쌍의 entry를 가진 자료구조. key는 중복이 불가능하다.
const myMap = new Map();
myMap.set('key1', 'value1');    //key값과 value값의 entry set
myMap.set('key2', 'value2');

const data  = { age: '20', gender: 'male'};
myMap.set('kim' , data); // object 또한 key와 value로 설정가능

// key값을 통해 value를 가져옴
var res = myMap.get('key1');
var res2 = myMap.get('kim');
console.log(res, 'get key1');
console.log(res2, 'get kim');

//for of문에서 destructuring을 통해 map의 key와 value를 가져올 수 있음.
for(const [key, value] of myMap) { 
	console.log(`${key} = ${value}`);  
}

//forEach를 통한 map 전체 순회
myMap.forEach((value, key) => { 
	console.log(`${key} = ${value}`); 
}, myMap);

myMap.clear(); //map의 엔트리 전체 삭제
console.log(myMap.size); 

//Map과 Set이 참조하는 객체들은 강한 결합으로 인해 가비지 컬렉션이 메모리 수거를 못하게 막는 원인이 됨.
//더이상 사용하지 않는 크기가 큰 Map과 Set을 가비지 컬렉션이 처리할 때의 비용문제를 고려할 필요성이 있음.
//이를 보완하기 위해 Weak Collection이 나오게 되었다.
//Weak Collection은 메모리에서 쉽게 삭제 되기 위해 약한 결합을 유지한다.

//WeakMap : Map과 동일하나 메서드의 수가 적으며 key값이 반드시 객체여야 한다.
const weakMap = new WeakMap();
const key_obj = {};
weakMap.set(key_obj, 'weakMap_value');  //key값은 객체여야함
var res4 = weakMap.get(key_obj);
console.log(res4);  

function print_set(){
    for(const item in weakSet){
        console.log(item, 'set');
    }
}
const weakSet = new WeakSet();
const value_obj1 = {name : 'james'};
const value_obj2 = {name : 'kim'};
weakSet.add(value_obj1);
weakSet.add(value_obj2);
weakSet.has(value_obj1); // true
weakSet.delete(value_obj1) // 삭제