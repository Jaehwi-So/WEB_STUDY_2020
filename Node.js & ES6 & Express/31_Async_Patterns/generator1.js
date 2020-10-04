//노드js 비동기 패턴
//Promise, Generator, Async/Await
//객체지향 프로그래밍

//기본적으로 클래스의 생성자 내부에서는 기본적으로는 비동기 함수를 호출할 수 없다.
//Constructor은 최초 한 번만 이루어지며 콜백을 확인할 수 없음.
`use strict`

//클래스에 대해서 비동기 코드의 적용
class Sample {
    *gen() { //클래스의 메서드로서 Generator 적용
        let cnt = 0;
        yield ++cnt;
        yield ++cnt;
    }
    
    //Computed Property 계산되어지는 속성의 프로퍼티
    //호출되는 시점에서 유동적으로 생성자를 정의할 수 있다.
    *[Symbol.iterator] () {
        let cnt2 = 3;
        yield ++cnt2;
        yield ++cnt2;
        yield ++cnt2;
        yield ++cnt2;
    }
}

const fn = new Sample();
const gen = fn.gen();

console.log(gen.next());
console.log(gen.next()); //순서에 따라서 yield함수가 return한 값

console.log(Array.from(fn));
console.log(Array.from(fn));