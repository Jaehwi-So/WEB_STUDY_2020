//비동기 패턴 async와 awake가 가지지 않는 장점을 가진 Generator
//Gerenerator : 생성자. 클래스의 Constructor와는 다른 개념
`use strict`

// yield : 함수 로직을 종료하지 않고 
// return : 해당하는 함수 로직를 종료하고 값 반환

//Generator에서는 Arrow Function을 사용 X
//Generator Function는 사용자의 요구에 따라 다른 시간 간격으로 여러 값을 반환할 수 있으며
//내부 상태를 관리할 수 있는 함수 yield와 next를 통해 정지와 시작이 될 수 있다.
//*을 붙여 Generator 함수임을 명시
function* log(){
    //함수 실행 도중 yield가 있는 라인을 만나면 중지.
    //다시 next()했을 때 해당 라인부터 실행
    console.log('hello');   //a
    console.log(0, yield);   //b
    console.log(1, yield);  //c
    console.log(2, yield);  //d
    console.log('fin'); //e
}

const gen = log();

//()안의 파라미터는 yield로 넘어간다.
console.log(gen.next('start')); //a 실행, b의 yield를 만나 중지
console.log(gen.next('zero'));  //b 실행, c의 yield를 만나 중지
console.log(gen.next('one'));   //c 실행, d의 yield를 만나 중지
console.log(gen.next('two'));   //d, e실행, done이 true가 됨.

console.log('==========')

const obj = {
    *gen(){
        let cnt = 0;
        yield ++ cnt;
        yield ++ cnt;
        yield ++ cnt;
    }
}

const g = obj.gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
