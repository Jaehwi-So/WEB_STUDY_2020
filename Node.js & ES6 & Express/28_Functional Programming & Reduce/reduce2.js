`use strict`

//reduce 디자인 패턴을 통해 분기별 로직을 강화할 수 있다.
const numbers = [0, 1, 2, 3, 4, 5, 6];

//매 iteration마다의 변수를 저장할 변수
//두번째 파라미터는 순회 시 total에 해당하는 값
const res = numbers.reduce((total, amount) => {
    if(amount > 0) total.push(amount);
    return total;
}, [])  //push로 받는 배열

console.log(res);

//파일 타입의 중복을 명시적인 객체로 반환하는 로직
const arr = ['pdf', 'html', 'html', 'gif', 'gif', 'gif']
const res2 = arr.reduce((cnt, fileType) => {
    console.log(cnt, cnt[fileType]);
    cnt[fileType] = (cnt[fileType] || 0) + 1   //undefined일 경우 0으로 초기화된 후 +1.
    return cnt;
}, {});

console.log(res2);

//+)객체에 멤버 추가하기
let obj = {};
obj.name = 'kim';
obj['age'] = 14;
console.log(obj);

