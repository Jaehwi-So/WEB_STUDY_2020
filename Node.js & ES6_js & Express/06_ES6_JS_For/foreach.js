//foreach
//오직 Array 객체에서만 사용가능한 메서드 (ES6부터 Map, Set 지원)
//배열 요소의 순회 목적
//인자로 callback함수를 등록, 배열의 각 요소들이 반복될 떄 이 callback 함수가 호출
//forEach 내부에서 실행되는 코드들은 비동기적으로 실행되지 않는다.
`use strict`

const arr = [1,2,3,4,5];

//배열 요소를 순회한다.
arr.forEach(value => console.log(value));

//forEach를 이용해 array를 클론하는 방법
const resArr = [];
arr.forEach(value =>{
    resArr.push(value);
});

console.log(resArr);

let sum = 0;

//홀수번째 index의 엘리멘트들의 합 구하기
arr.forEach((value, index, array) => {
    if(index % 2 == 0){
        sum += value;
    }
})
console.log(sum);

const obj = {
    name : "kim",
    age : "23"
}
obj.forEach()