`use strict`

//Destructuring : 비구조화
//배열이나 객체를 선언하는 과정 : 구조화
//선언된 데이터에서 자료값을 가져오는 과정 : 비구조화
//대상 : 객체, Array

const obj = {
  title : 'this is title',
  value : 'this is value',
  info : {
    name : 'this is name',
    age : 'this is age'
  }
}

//Origin
const title2 = obj.title;
const value2 = obj.value;
const name2 = obj.info.name;
console.log(title2, value2, name2);

//ES6 객체 비구조화
//객체의 멤버변수 이름과 {} 안의 변수명이 일치해야 한다.
const {title, value, info : {name}} = obj;
console.log(title, value, name); 

//배열의 비구조화
const arr = [1, 2, 3];
const [, a, b] = arr;
console.log(a,b);


