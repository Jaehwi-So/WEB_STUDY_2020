import Person, {number, plus} from './export/default_export'    //default export는 바로 사용 가능
import {number as number3, Person as Person3, plus as plus3} from './export/export' //as를 통해 별칭 지정 가능
import * as Ex2 from './export/export2' //모듈의 모든 것을 import
import { Helper }  from './export/namespace_exam' //namespace import

const p1 = new Person();
const p2 = new Ex2.Person2();
const p3 = new Person3();
console.log(plus(1, 2));
console.log(Ex2.plus2(1, 2));
console.log(plus3(1, 2));

const cvt = new Helper.Converter();


