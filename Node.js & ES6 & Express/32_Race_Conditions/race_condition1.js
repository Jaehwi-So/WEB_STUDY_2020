//Race Conditions : 경쟁 상태
//두 개 이상의 대규모 입력에 대해
//JS 환경은 싱글 스레드이지만 두개 이상의 비동기 처리가 가능하므로 두 개 이상의 작업이 동시 수행이 가능해지므로
//경쟁 상태가 발생할 수 있다.

//공유 자원에 대해 여러 개의 프로세스가 동시에 접근을 시도할 때 
//접근의 타이밍이나 순서 등이 결과값에 영향을 줄 수 있는 상태

//실행 순서나 사용 자원의 점유와 포기를 명확히 명시해 주지 않으면 발생할 수 있는 문제.
//교착 상태에 빠질 수 있는 위험성이 있다.

function pr1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200);
        }, 2000);
    });
}

function pr2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100);
        }, 1000);
    });
}




const promise_arr = [pr1, pr2]; 
//arr.map(item => {
    //비동기 코드로 실행, promise들 중 어느것이 먼저 완료되는지가 명확하지 않음.
    //map은 비동기 코드의 순서를 보장하지 않는다. 
    //map과 forEach에서는 async/await 등 비동기 함수 사용 X
//});
promise_arr.map(item => {
    item().then((data) => {
        console.log(data);
    });
})

for(const item of promise_arr){
    item().then((data) => {
        console.log(data);
    });
}


