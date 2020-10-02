//Garbage Collection의 작동 원리와
//Memory Leaks(메모리 누수)의 원인
//1. 불필요한 데이터를 메모리상에서 보존하여 시스템 자원상의 문제 초래
//2. 메모리가 할당되었지만 후에 비할당 과정을 거치지 않아 메모리상에 잔류하는 문제

function test(value1, value2){
    this.value1 = value1;
    this.value2 = value2;


    //문제. 
    //프로토타입 없이 접근할 시 함수가 메모리에 그대로 남아있다.
    //request마다 프로토타이핑된 현재와 같은 클로저 함수가 호출됨
    //내부에 있는 클로저 함수를 가지고 있으면 클로저 안에 또 다른 클로저를 호출하게 된다.
    //arrow function이 아니면 this에 대한 접근이 안된다.
    this.func = () => {
        console.log;
    }
    //this.prototype.func => () => {}
}

const problem = new test(undefined, undefined);
console.log(problem.func());