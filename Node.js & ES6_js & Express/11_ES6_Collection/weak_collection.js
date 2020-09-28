//Map과 Set이 참조하는 객체들은 강한 결합으로 인해 가비지 컬렉션이 메모리 수거를 못하게 막는 원인이 됨.
//더이상 사용하지 않는 크기가 큰 Map과 Set을 가비지 컬렉션이 처리할 때의 비용문제를 고려할 필요성이 있음.
//이를 보완하기 위해 Weak Collection이 나오게 되었다.
//Weak Collection은 메모리에서 쉽게 삭제 되기 위해 약한 결합을 유지한다.

//WeakMap : Map과 비슷하나 메서드의 수가 적으며 key값이 반드시 객체여야 한다.
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

//WeakSet : Set과 비슷하나 메서드의 수가 적으며 값은 반드시 객체여야 한다.
const weakSet = new WeakSet();
const value_obj1 = {name : 'james'};
const value_obj2 = {name : 'kim'};
weakSet.add(value_obj1);
weakSet.add(value_obj2);
weakSet.has(value_obj1); // true
weakSet.delete(value_obj1) // 삭제