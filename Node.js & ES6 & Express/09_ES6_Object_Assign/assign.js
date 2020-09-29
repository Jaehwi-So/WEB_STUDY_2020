//객체들을 병합해주는 assign();
`use strict`

const obj = {
    title : 'this is title'
}

const obj2= {
    name : 'this is name',
    age : 'this is age'
}

const obj3= {
    tel : 'this is tel',
}

const obj4= {
    email : 'this is email',
}
//assign('병합 대상 객체', 합칠 객체, 합칠 객체..)
const res = Object.assign({}, obj, obj2);
console.log(res);   //obj와 obj2가 빈 객체에 병합됨
const res2 = Object.assign(obj, obj2, obj3, obj4);
console.log(res2);  //obj2, obj3, obj4가 obj에 병합됨
console.log(obj);   //obj는 병합되어 변경되었음