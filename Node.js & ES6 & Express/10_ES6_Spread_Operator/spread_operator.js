`use strict`
// 스프레드 연산자 (...)
//스프레드 연산자를 사용하면 배열, 문자열, 객체 등 반복 가능한 객체  (Iterable Object)를 
//개별 요소로 분리하는 기능을 한다.
//연결, 복사, 병합 등의 용도로 활용할 수 있다.

//String
var str = "hello";
var str2 = [...str];
console.log(str2);

//Object
const obj = {
    title : 'this is title'
}

const obj2= {
    name : 'this is name',
    age : 'this is age'
}

const obj3= {
    tel : 'this is tel',
}

const res = {   //res(빈값) + obj1 + obj2 + obj3
    ...obj,
    ...obj2,
    ...obj3
}
const res2 = {  //res2 + obj
    ...obj,
    region : 'korea'
}

console.log(res);
console.log(res2);

//Array
const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];

const resArr = [    //resArr(빈값) + arr1 + arr2
    ...arr1,
    ...arr2
]
const resArr2 = [1, 2, 3, ...arr1]  //resArr + arr1
console.log(resArr);
console.log(resArr2);

//메서드
//Variable Argument의 역할을 수행할 수 있다.
function sum(...value) {
    let sum = 0;
    for (let item of value) {
      sum += item;
    }
    return sum;
}
//기존 인자와 스프레드 표현식의 혼용
function sum2(str, ...value) {
    let sum = 0;
    for (let item of value) {
      sum += item;
    }
    return str + sum;
}
 console.log(sum(1,2,3));
 console.log(sum(1,2,3,4));
 console.log(sum2('str',1,2,3,4));