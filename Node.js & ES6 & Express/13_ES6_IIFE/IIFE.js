//즉시 실행 함수 표현 IIFE

//괄호 안에 익명 함수 선언 : 전역 스코프에 불필요한 변수를 추가하는 것을 방지
//IIFE 내부 안으로 다른 변수가 접근하는 것을 막을 수 있다.

//함수가 즉시 실행된다.
(function(){
    console.log('terminate');
    var lang = 'js';    //외부에서 접근이 불가능하다.
})();

//console.log(lang); 외부에서 접근이 불가능

var r = (function(){
    var lang = 'js';    //외부에서 접근이 불가능하다.
    return lang;
})();

console.log(r);