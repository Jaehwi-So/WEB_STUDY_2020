const pkg = require("./d_exports");
console.log(pkg.var1);
console.log(pkg.var2);
pkg.func();
console.log(this === module.exports);   
//최상위 스코프에 존재하는 this는 module.exports(exports객체)
//함수 선언문 내부의 this는 global 객체