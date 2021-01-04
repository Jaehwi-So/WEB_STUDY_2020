/* 인터페이스 */
// 클래스, 객체가 가지는 구조를 표현하는 일련의 약속을 정의. 멤버로 속성이나 메서드 원형을 가진다.
// 타입스크립트에서의 인터페이스는 js로 변환되지 않으며 타입 체킹을 위해 사용된다.
interface Person{
    name : string;
    age : number;
    hello() : string;
}

const person1 : Person = {name : "david", age : 20, hello : () : string => {
    return "Hello";
}};
console.log(person1.hello());

// 클래스에서의 인터페이스 구현
class Korean implements Person{
    name: string;
    age: number;
    hello() : string {
        return "안녕하세요";
    }
    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
}
class American implements Person{
    name: string;
    age: number;
    hello() : string {
        return "Hello";
    }
    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
}
console.log(new Korean("kim", 20).hello());
console.log(new American("Marry", 23).hello());

export const exp = 1;