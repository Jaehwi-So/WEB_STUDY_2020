//Process 객체는 현재 실행되고 있는 노드 프로세스에 대한 정보를 담는다.
console.log(process.version);   //노드의 버전
console.log(process.arch);  //프로세서 아키텍쳐 정보
console.log(process.pid);   //현재 프로세스의 아이디
console.log(process.uptime()); //프로세스가 시작된 후 흐른 시간
console.log(process.execPath); //노드의 경로
console.log(process.cwd()); //현재 프로세스의 실행 위치
console.log(process.cpuUsage());    //현재 cpu 사용량
console.log('env', process.env);    //시스템의 환경 변수들

setImmediate(() => {
    console.log("즉시 실행");
})
process.nextTick(() => {    //이벤트 루프가 다른 콜백 함수들보다 nextTick 콜백함수를 우선적으로 처리하게 함
    console.log("nextTick");
})