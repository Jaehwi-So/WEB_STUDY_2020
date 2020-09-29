//for in 반복문 : 객체의 모든 열거 가능한 속성에 대해 반복
//for of 반복문 : Symbol.iterator 속성을 가지는 컬렉션 전용
const arr = [1, 2, 3, 4, 5];
const obj = {
    a : 1,
    b : 2, 
    c : 3
}
for(let pr in obj){
    console.log(pr, obj[pr]);
}
for(let item in arr){
    console.log(item, arr[item]);
}

const arr2 = [10, 20, 30];
arr2.name = '배열의 이름';

for(let item in arr2){
    console.log(item, 'in');    //0, 1, 2, name
}
for(let item of arr2){
    console.log(item, 'of');    //10, 20, 30
}