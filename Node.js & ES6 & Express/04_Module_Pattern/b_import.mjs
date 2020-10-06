//ES6부터 import를 사용할 수 있다. 그러나 확장자명이 .mjs여야 한다.
//js 확장자를 사용하려면 package.json에 type:"module"속성을 넣어야 한다.
import pkg from './exports2.js';
const {var1, var2} = pkg;
console.log(var1);
