`use strict`
//filter() 메서드는 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
const arr = [1,2,3,4,5];

//배열에서 짝수인 요소들의 집합을 반환
const result = arr.filter(value => value % 2 == 0);
console.log(result);