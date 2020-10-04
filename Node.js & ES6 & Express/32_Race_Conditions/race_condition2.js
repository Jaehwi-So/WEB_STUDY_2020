//async, await을 사용할 때 발생할 수 있는 Race Condition

let total = 0;
async function getTotal(){
    return total;
}
async function setTotal(value){
    total = value;
    console.log('set', total);
}
async function increment(value, incr){
    console.log('incr', value, incr);
    return value + incr;
}
async function add(value){
    let current, newValue;
    current = await getTotal();
    newValue = await increment(current, value);
    console.log('cur/new', current, newValue);
    console.log('add', value, total);
    await setTotal(newValue);
}
//트랜잭션 : Race Condition이 발생해서는 안되는 일관적인 데이터 교환 과정
async function test(){
    const transaction1 = add(10);   //add()는 Promise 반환
    const transaction2 = add(20);   
    //두개 이상의 input(트랜잭션)이 하나의 add()함수에 대해 호출되고 있음.
    await transaction1;
    await transaction2; 
    //임의의 순서로 실행되며 점유하는 자원의 문제가 발생할 수 있다.
    //결과로 30을 기대하지만 20이 나온다.
    console.log(await getTotal(), 'fin');
}
test();
console.log(total, 'total?');

//콘솔 결과
/*
0 total?
incr 0 10
incr 0 20
cur/new 0 10
add 10 0
set 10
cur/new 0 20
add 20 10
set 20
20 fin
*/
