`use strict`
//Set : 중복된 엘리멘트를 허용하지 않는 집합 자료구조
function print_set(){
    for(const item of mySet){
        console.log(item, 'set');
    }
}
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
print_set();
mySet.add(4);
mySet.delete(2);
mySet.add(1);    //중복된 엘리멘트는 add되지 않음.
print_set();

