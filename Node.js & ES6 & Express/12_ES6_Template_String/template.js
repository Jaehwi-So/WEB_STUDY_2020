`use strict`
//Template String
//문자열 템플릿 : ``안에서 표현.
//변수는 ${}로 감싸준다. java에서 %d의 역할
let str = 'hello';
let str2 = `hello node`

str += ` world ${str2}`;
console.log(str);

const person = {
    name : 'kim',
    age : 20
}
let str3 = `이름은 ${person.name}이고 나이는 ${person.age}세이다.`;  
console.log(str3);
