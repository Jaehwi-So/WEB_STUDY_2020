//Promise 객체는 비동기 작업을 실행한 후 결과를 resolve와 reject로 돌려준다.

console.log(Promise);

//생성자를 통해 프로미스 객체를 만듬
//생성자의 인자로 executor라는 함수를 이용한다.

//new Promise(executor)
//executor(resolve, reject)
//resolve와 reject는 함수이다.
new Promise((resolve, reject) => {
    //pending
    setTimeout(() => {
        resolve();
    }, 1000);   //1초 후 이행상태 돌입
    //..
    //..
    setTimeout(() => {
        reject();
    }, 4000);  //4초 후 거부상태 돌입
});

//1. Pending(대기상태) : 생성자를 통해 프로미스 객체를 만드는 순간
//2. Fulfilled(이행상태) : resolve 함수를 실행한 상태
//3. Rejected(거부상태) : reject 함수를 실행한 상태

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000); 
})

//p가 Fulfilled상태일 경우의 콜백 작성
p.then(() => {
    console.log('callback');
})