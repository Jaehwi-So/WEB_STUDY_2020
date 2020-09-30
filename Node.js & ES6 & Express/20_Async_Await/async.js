//async

//async function 함수이름 (){}
//const 함수이름 = async() => {}

//Promise 객체를 리턴하는 함수
function p(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ms <= 3000){
                resolve(ms / 1000);
            }
            else{
                reject(new Error(ms / 1000));
            }
        }, ms)
    })
}

//Promise 객체를 이용하여 비동기 로직 수행
p(2000).then((sec) => {
    console.log(`${sec}초 후 실행`);
});

//Promise 객체를 리턴하는 함수를 await으로 호출
//await을 사용하는 경우, 항상 async 함수 안에서 사용되어야 한다.
//비동기 표현식을 작성할 때 순차적 작성을 할 수 있다는 점이 장점이다.
(async function func(){
    const sec = await p(3000);
    console.log(`${sec}초 후 실행`);
})();   //즉시 실행 함수 IIFE

//reject 에러 처리.
(async function func2(){
    try{
        const sec = await p(4000);
        console.log(`${sec}초 후 실행`);
    }
    catch(sec){
        console.log(`${sec}초 후 실행`, 'Timeout');
    }
})();   //즉시 실행 함수 IIFE

//async function에서 return되는 값은 Promise.resolve 함수로 감싸져서 반환된다.
async function asyncP(){
    const sec = await p(1500);  //비동기 작업. async function이므로 await을 통해 다른 async함수 호출 가능
    return `Hello world ${sec}`;
}

/* 프로미스 객체가 아닌 경우 value를 인자로 보낸다.
Promise.resolve(async function asyncP(){
    return "Hello world";
});
*/

(async function func3(){
    const str = await asyncP();
    console.log(str);
})();   //즉시 실행 함수 IIFE


