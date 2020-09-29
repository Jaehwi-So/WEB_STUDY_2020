`use strict`

const arr = ['apple', 'grape', 'orange'];
//주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다.
`use strict`
//조건에 일치하는 엘리멘트를 찾을 때 까지 메서드를 반복한다.

//# value가 apple인 요소를 찾을 때 까지 반복
const res = arr.find(value => value === 'apple'); 
const res2 = arr.find((value) => {return value === 'apple'}); 
//'==' 연산자를 이용하여 서로 다른 유형의 두 변수의 [값] 비교
//'==='는 엄격한 비교를 하는 것으로 알려져 있다 ([값 & 자료형] -> true).


//# index가 1인 요소를 찾을 때 까지 반복
function isIndexOne(value, index, array) {
    return index == 1;
}
const res3 = arr.find(isIndexOne);

//# 배열에서 orange를 찾을 때 까지 반복
function isGrape(value, index, array) {
    return array[index] == 'orange';
}
const res4 = arr.find(isGrape);


console.log(res);
console.log(res2);
console.log(res3);
console.log(res4);