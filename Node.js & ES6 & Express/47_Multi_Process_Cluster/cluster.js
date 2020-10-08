//멀티 스레딩이 아닌 멀티 프로세싱을 위해 사용되는 cluster
//싱글 프로세스로 동작하는 노드가 CPU코어를 추가적으로 사용 가능하도록 하는 모듈이다.
//포트를 공유하는 노드 프로세스를 여러 개 둘 수 있어 요청이 많이 들어올 때 병렬적인 처리가 가능학다.
//성능 개선이라는 장점이 있지만 메모리를 공유하지 못한다는 단점도 있다. 특히 세션을 메모리에 저장할 경우 문제가 될 수 있다.
//이는 Redis등의 서버를 도입하여 해결할 수 있다.
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

//마스터 프로세스 인 경우
if (cluster.isMaster) { 
  console.log(`마스터 프로세스 ID: ${process.pid}`);
  // CPU 개수만큼 워커를 생산
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork(); //워커 프로세스 생산
  }
  // 워커가 종료되었을 때
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.process.pid} Worker exit`);
    console.log('code', code, 'signal', signal);
    cluster.fork(); //워커 프로세스 종료 후 새로운 워커 프로세스 생산
  });
} 

//워커 프로세스인 경우
else {
  // 워커들이 포트에서 대기. 요청이 들어올 때마다 워커 프로세스가 작업을 마치고 종료
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Server Run!!</h1>');
    setTimeout(() => { // 워커 프로세스의 종료
      process.exit(1);
    }, 1000);
  }).listen(8081);

  console.log(`${process.pid} Worker Run..`);
}
