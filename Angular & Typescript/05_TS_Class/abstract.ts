/* 추상 클래스 (Abstract Class) */
abstract class Person{
    public _name : string;  //접근 제한자 public. 클래스 외부에서 접근 가능하다.
    public _age : number;

    constructor(name : string, age : number){    //생성자
        this._name = name;
        this._age = age;
    }

    public abstract sayHello(); // 추상 메서드는 메서드 원형만을 정의하며 서브 클래스에서 반드시 정의해야 한다.
}

//const person = new Person("David", 23); 추상 클래스이므로 초기화 불가능.

//Person을 상속받은 Korean
class Korean extends Person{
    constructor(name : string, age : number, pnum : string){    //생성자
        super(name, age);
    }
    public sayHello = () : void => {
        console.log("안녕하세요");
    }
}
let koreaPerson : Person;
koreaPerson = new Korean("lee", 26, "980123-1234567");  //Person형을 상속받은 Korean형이므로 초기화 가능
koreaPerson.sayHello();