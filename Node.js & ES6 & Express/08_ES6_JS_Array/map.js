`use strict`

const arr = [1,2,3];

//map() : 배열의 모든 요소를 순회하며 변화된 요소들을 새로운 배열로 반환
const b = arr.map(x => x + 1);
console.log(b);