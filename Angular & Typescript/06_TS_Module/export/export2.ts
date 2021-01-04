// export : 외부 모듈이 사용 가능하도록 키워드를 사용하여 모듈 표시를 한다.
export let number2 : number = 10;
export class Person2 {
    name! : string;
}
export const plus2 = (num1 : number, num2 : number) : number =>{
    return num1 + num2;
}