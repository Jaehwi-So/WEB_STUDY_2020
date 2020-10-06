//module.exports 대신 exports 객체를 사용하여 하나씩 넣을 수 있다.
//어떤 값이든 대입해도 되는 module.exports와 달리
//반드시 객체처럼 속성명과 속성값을 대입해야 한다.
//exports와 module.exports에는 참조 관계가 존재하므로 동시에 사용하지 않는 것이 좋다.
exports.var1 = 10;
exports.var2 = 20;

const logging = () => {
    console.log('func');
}

exports.func = logging;

