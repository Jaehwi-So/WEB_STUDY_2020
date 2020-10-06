//싱글 스레드로 2부터 1,000만까지의 수 중 소수가 몇 개 있는지를 알아내는 코드
const min = 2;
const max = 10000000;
const primes = [];

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

console.time('prime');
getNumberOfPrime(min, max);
console.timeEnd('prime');
console.log(primes.length);