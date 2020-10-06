const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const min = 2;
let primes = [];

function getNumberOfPrime(start, end) {
  let isPrime = true;
  for (let i = start; i <= end; i++) {
    for (let j = min; j <= Math.sqrt(end); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

//메인스레드인 경우
if (isMainThread) {
  const max = 10000000;
  const threadCount = 8;
  const threads = new Set();  //스레드의 집합
  const range = Math.ceil((max - min) / threadCount); //업무 분할 범위 설정
  let start = min;
  console.time('prime');
  for (let i = 0; i < threadCount - 1; i++) {
    //Worker 스레드 8개를 추가하고 분할한 연산 범위 데이터를 전달
    const wStart = start;
    threads.add(new Worker(__filename, { workerData: { start: wStart, range } }));
    start += range;
  }
  threads.add(new Worker(__filename, { workerData: { start, range: range + ((max - min + 1) % threadCount) } }));
  //모든 worker들에 대해서
  for (let worker of threads) {
    //에러 메시지가 worker로부터 온 경우
    worker.on('error', (err) => {
      throw err;
    });
    //종료 메시지가 worker로부터 온 경우
    worker.on('exit', () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.timeEnd('prime');
        console.log(primes.length);
      }
    });
    //완료 메시지가 worker로부터 온 경우
    worker.on('message', (msg) => {
      primes = primes.concat(msg);  //결과 배열에 추가
    });
  }
} else {
  getNumberOfPrime(workerData.start, workerData.range);
  parentPort.postMessage(primes);
}