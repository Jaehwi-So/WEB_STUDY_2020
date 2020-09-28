`use strict`
// every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
// 판별 메서드를 모든 인덱스에 반복시켜 하나라도 false가 나오면 false 반환
const arr = [1,2,3];
const isBiggerThenOne = arr.every(key => key > 1)
console.log(isBiggerThenOne);

function isBigEnough(element, index, array) {
    return element >= 10;
}
const res = [1,11,12,13,14].every(isBigEnough);   // false
const res2 = [11,12,13,14,15].every(isBigEnough); // true

const arr2 = [1,2,3,4,5];

//배열의 짝수번째 요소가 1보다 커야 한다. -> true
const res3 = arr2.every((value, index, array) => {
    if(index % 2 == 1){
        return array[index] > 1;
    }
    return true;
})
console.log(res);
console.log(res2);
console.log(res3);