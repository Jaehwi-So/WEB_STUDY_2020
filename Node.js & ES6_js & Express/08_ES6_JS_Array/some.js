`use strict`

//some() : 해당 판별문에 일치하는 엘리먼트가 하나라도 존재할 시 true 반환
const arr = [1, 0, -1, -2];
const res = arr.some(value => value < 0)
console.log(res);   //true

const res2 = arr.some(value => value < -2)
console.log(res2);  //false