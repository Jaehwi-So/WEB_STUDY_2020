//노드 js 핵심 모듈, Timer
//이벤트 루프가 노드 js의 핵심. 이 이벤트 루프의 기반이 되는 Timer
//특정한 이벤트 조건(시간에 대한 조건) : 몇 초 뒤에 시작되는 코드. 해당되는 코드가 비동기.
//굉장한 연산을 요구할 때 setTimeout을 사용해봣을거다.
//일부러 시간차를 두고 해당하는 로직을 수행하고자 할 때 Timer를 사용할 수 있다.
//Timer은 global 자바 내장 객체에 존재한다.

//timehandler가 실행되는 조건. 
//시간을 설정할 때 대량의 타이머가 하나의 스레드 내에서 비동기 코드로 작동하는 타이머 내부의 코드를 실행할 순서는 이벤트 루프에서 결정
//해당하는 실행 순서는 내부적으로 정확하게 작동하는 순서는 코드에도 영향을 받지만
//런타임 환경에서 몇개의 타이머가 있는지, 영향이 되는 변수들이 있다.
//일반적으로 타이머 안에 비동기 코드를 작성할 것이다. 
//그 비동기 코드가 완료되는 시점은 node process 안에서 해당하는 로직이 완료되는 시점을 주기적으로 폴링 방식으로 이벤트를 검사하여 결정한다.
//내 코드뿐만 아니라 cpu 자원, 메모리 상태, 네트워크 상태 등의 외부 환경에 의해 setTimeout의 조건에 영향을 미친다.


//setTimeout의 timeout이 0으로 setImmediate의 조건이 같아도 
//외부 환경 변수에 의해 그때그때 작동 순서가 다르다.

`use strict`

//setTimeout(handler, timeout, [...arguments])
//handler : TimerHandler, 최소 지연 시간(ms, 1000ms == 1)
//최소 지연 시간 : 1000으로 설정 시 최소 1초, 1초 이상이 걸릴 수 있음

//메모리 누수를 방지하기 위해 객체를 상수로 선언

//setTimeout() : 몇 초 뒤 timeout 시점에서 실행
const timeoutObj = setTimeout(() =>{
    console.log('2000 timeout');
}, 2000);

//setImmediate() : 타이머 기반 즉시 실행
const immediateObj = setImmediate(() => {
    console.log('immediate');
});

//setInterval() : 초 단위 실행
let a = 0;
const intervalObj = setInterval(() => {
    console.log('terminate', a+=1000);
}, 1000)


//clearTimeout() : 타이머 초기화
const timeout = setTimeout(() => {
    clearTimeout(timeoutObj);
    clearImmediate(immediateObj);
    clearInterval(intervalObj);
    console.log('clear');
}, 5000)
