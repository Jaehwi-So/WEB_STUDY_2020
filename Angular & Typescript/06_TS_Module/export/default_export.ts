// default export : 디폴트 export는 import하는 측에서 해당 값을 바로 사용 가능하도록 한다. 이는 모듈 안에서 단 하나 존재해야 한다.
export let number : number = 10;
export default class Person {
    name! : string;
}
export const plus = (num1 : number, num2 : number) : number =>{
    return num1 + num2;
}