//기본적으로 노드는 싱글 스레드 방식이지만 필요에 따라 멀티 스레드 방식으로 동작할 수 있다.
//멀티 스레드 방식으로 동작하기 위해 worker_threads를 사용할 수 있다.

const worker_threads = require('worker_threads'); //worker_threads 모듈

//Worker 스레드 추가
const Worker = worker_threads.Worker;
//현재 코드가 메인 스레드에서 실행되는지, 생성한 워커 스레드에서 실행되는지를 구분
const isMainThread = worker_threads.isMainThread; 
//메인 스레드
const parentPort = worker_threads.parentPort;

if (isMainThread) { // 부모일 때
  const worker = new Worker(__filename);  //현재 파일을 워커 스레드에서 실행
  worker.on('message', message => {
    console.log('워커 스레드로부터 옴', message)});
  worker.on('exit', () => console.log('워커 스레드 종료'));
  worker.postMessage('parent->worker'); //부모가 워커에게 데이터를 보낼 수 있다.
} 
else { // 워커일 때
  //해당 이벤트 리스너로 부모로부터 데이터를 받는다.
  parentPort.on('message', (value) => { 
    console.log('부모 스레드로부터 옴', value);
    parentPort.postMessage('worker->parent'); //워커에서 부모에게 데이터 전달
    parentPort.close(); //워커에서 on메서드 사용시 직접 워커를 종료시켜야 한다.
    //종료될 때 worker.on('exit')가 실행된다.
  });
}