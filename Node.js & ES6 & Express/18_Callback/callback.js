//콜백 함수 : 어떤 이벤트가 발생한 후 수행될 함수.
//비동기 실행의 결과값으로 반환되는 함수를 의미한다.
//대부분의 콜백함수는 익명으로 작성된다.
function sum(x, y, callback){
    let res = x + y;
    callback(res);
}

//3, 4를 sum함수에서 더한 후 callback메서드로 * 2된 결과 출력
sum(3, 4, (res) => {
    let callbackRes = res * 2;
    console.log(callbackRes);
});

//콜백함수는 클로저이다.
//클로저는 함수가 선언될 때의 환경을 기억하고 있으므로, 콜백함수는 클로저
var obj = {
    value: "empty",

    setValue : function(value){
        this.value = value;
    }
}
 //obj.setValue를 콜백함수로 사용
function test(value, callback){
    console.log('test');
    //비동기 코드 실행...
    callback(value);    //콜백함수가 선언될 때의 환경 this는 global window 객체
}
function test2(value, callback){
    console.log('test2');
    //비동기 코드 실행...
    callback.call(obj, value);  //this객체를 obj라고 명시
}

test("value1", obj.setValue);   //obj.setValue를 콜백함수 인자로 사용
console.log(obj.value);

test2("value2", obj.setValue);
console.log(obj.value);

function add(x, callback){
    let sum = x + x;
    console.log(sum);
    callback(sum);
}

//# 콜백 지옥
//콜백함수 남용시 들여쓰기로 인한 가독성과 유지보수의 문제가 존재. 이를 보완하기 위해 promise 탄생
add(3, function(result){
    add(result, function(result2){
        add(result2, function(result3){
            add(result3, function(result4){
                console.log("fin")
            })//4) result3 + result3, callback으로 fin log 출력
        })//3) result2 + result2 (= result3), callback으로 4) 수행
    })//2) result + result  (= result2), callback으로 3) 수행
}) //1) 3 + 3 (= result), callback으로 2) 수행

