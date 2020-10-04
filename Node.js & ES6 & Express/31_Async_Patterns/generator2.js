const co = require("co");

//co 패키지를 활용해서 Generator들을 매핑하여 활용할 수 있다.
co(function *(){
    const a = Promise.resolve(10);  
    const b = Promise.resolve(20);
    const c = Promise.resolve(30);
    const res = yield [a, b, c];  //각각의 promise가 resolve된 결과가 출력
    console.log(res);
})

