/* 클래스 (Class) */
class Person{
    public _name : string;  //접근 제한자 public. 클래스 외부에서 접근 가능하다.
    public _age : number;

    constructor(name : string, age : number){    //생성자
        this._name = name;
        this._age = age;
    }

    public getInfo = () : void => {
        console.log(this._name + "/" + this._age);
    }
}

const person = new Person("David", 23);
person.getInfo();

//Person을 상속받은 Korean
class Korean extends Person{
    private _personal_num : string; // 접근 제한자 private : 클래스 외부에서 접근 불가능하다.
    public readonly _birth_year : number;   // 읽기 전용 속성 : 생성자나 속성 선언 시 값이 지정, 그 이후 읽기 전용이 된다.
    public static CountryId = 82; //static 속성 : 클래스명.속성명을 통하여 엑세스.

    constructor(name : string, age : number, pnum : string){    //생성자
        super(name, age);
        this._personal_num = pnum;
        this._birth_year = 2021 - age + 1;
    }

    get personal_num() : string {   //getter
        return this._personal_num;
    }
    set personal_num(value : string){   //setter
        this._personal_num = value;
    }

    //method override
    public getInfo = () : void => {
        console.log(this._name + "/" + this._age + "/" + this._personal_num + "/" + this._birth_year);
    }
}
let koreaPerson : Person;
koreaPerson = new Korean("lee", 26, "980123-1234567");  //Person형을 상속받은 Korean형이므로 초기화 가능
koreaPerson.getInfo();
console.log(Korean.CountryId);

export const num = 1;