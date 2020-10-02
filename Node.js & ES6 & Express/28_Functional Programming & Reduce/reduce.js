//JS 프로그래밍 패러다임(방법론) 중 Functional Programming
//Functional Programming에서 reduce()

`use strict`

const numbers = [10, 20, 30, 40];

//배열을 순회를 하면서 다음 값을 더하는 Iterator 역할 수행
//for문의 역할을 reduce를 통해 한 줄로 작성
const sum = numbers.reduce((total, value) => total + value);
console.log(sum);

//(previousValue, currentValue, currentIndex, array)
//(이전에 콜백된 값(초기화 안할시 0), 현재 값, 현재 인덱스, 배열)
//배열의 요소의 평균값을 구하는 로직
const sum2 = numbers.reduce((total, value, index, array) => {
    total += value;
    if(index === array.length - 1){
        return total / array.length;
    }
    else{
        return total;
    }
});

console.log(sum2);
