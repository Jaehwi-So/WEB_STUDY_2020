/* const, let */
let a = 10;
const b = 10;
a = 20;
//b = 20; 
console.log(a);

/* number, string, boolean */
const num : number = 1;
const str : string = "hello";
const ok : boolean = true;
console.log(num, str, ok);

/* null, undefined */
// undefined : 변수가 정의되었지만 값이 할당되지 않음.
// null : 'nothing'을 의미하는 null이 변수에 할당됨.
let undef : undefined;
let nul : null = null;
//위와 같이 타입을 정의할 수 있지만 큰 의미가 없다. 일반적으로 다른 타입에 값이 할당되지 않은 상태나 null 상태를 표현하기 위해 사용한다.
console.log(undef, nul);

/* symbol */
//symbol은 ES6에서 도입된 Primitive 타입.
//한번 생성된 symbol값은 변경할 수 없으며 유일무이한 값을 가지게 된다. 
const sym1 = Symbol();
let sym2 = Symbol("key");
let sym3 = Symbol("key");
console.log(sym2 === sym3); //동일한 문자열 키를 사용하더라도 유일성을 가진다.

//Symbol은 주로 유일성을 가지는 객체 속성 key나 클래스 멤버를 만들기 위해 사용된다.
const objAttr = Symbol();
let obj : {name : string, [objAttr] : number }= {
    name : "name",
    [objAttr] : 12345
}
console.log(obj[objAttr]);

export const i = 1;
