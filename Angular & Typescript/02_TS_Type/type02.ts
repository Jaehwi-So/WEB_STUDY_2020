/* any */
//어떤 타입이라도 받아들일 수 있는 값. TS를 사용한다면 웬만하면 지양하자.
let value1 : any = 1;
value1 = "hello world";
console.log(value1);

/* object */
//object 타입은 Primitive 타입(string, number, symbol 등과 같이 정해진 타입)이 아닌 Non-primitive 타입을 가리킨다.
//따라서 object 타입의 변수 혹은 파라미터에는 Primitive 타입의 값을 할당하거나 전달할 수 없다.
let obj : object;
//obj = 1;
obj = {id : 1};
console.log(obj);
//Object는 인터페이스 타입으로 모든 자바스크립트 객체들의 인터페이스를 가리킨다.
//toString(), valueOf() 등의 메서드를 가진다.

/* void */
//void 타입은 어떠한 타입도 가지지 않는 것을 의미하며 리턴값이 없는 경우 사용된다. 
//void 타입에는 undefined 혹은 null 만 할당될 수 있다.
const func = () : void => console.log('print');
func();

/* never */
//주로 함수의 리턴값으로 사용되며 함수가 항상 예외를 throw하거나 무한루프 등에 의해 절대 리턴하지 않는 경우 사용된다.
const func2 = (msg : string) : never => {
    throw new Error(msg);
}; 
//func2("err");

/* Union */
//여러 타입들을 OR(||)를 통해 묶어서 타입을 지정. 지정된 타입들 중 하나를 사용할 수 있다.
const func3 = (typ : string | number) : void => {
    if(typeof typ == "string"){
        console.log("string" + typ);
    }
    else if(typeof typ == "number"){
        console.log("number" + typ);
    }
} 
func3("10");
func3(10);

/* Type Alias 지원 */
//타입스크립트는 타입에 별명을 붙이는 Type Alias를 지원한다.
type AgeParam = number | string;
const func4 = (age : AgeParam) : void => {
    console.log("나이 : " + age);
}
func4(10);
func4("20");

/* Generic type */
type FuncParam<T> = string | T;
const func5 = (param : FuncParam<boolean>) : void => {
    console.log(typeof param);
}
func5(true);
func5("hello");
//func5(10);