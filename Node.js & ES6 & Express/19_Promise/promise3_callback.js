// # 콜백지옥 함수를 Promise를 통해 해결하기
// 콜백함수 남용 시 가독성 문제를 Promise를 통해
// 가독성 있고 명확한 코드 작성을 할 수 있다.

// ======= 콜백 지옥 함수 =============
function add(x, callback){
    let sum = x + x;
    console.log(sum);
    callback(sum);
}

add(3, function(result){
    add(result, function(result2){
        add(result2, function(result3){
            add(result3, function(result4){
                console.log("fin")
            })//4) result3 + result3, callback으로 fin log 출력
        })//3) result2 + result2 (= result3), callback으로 4) 수행
    })//2) result + result  (= result2), callback으로 3) 수행
}) //1) 3 + 3 (= result), callback으로 2) 수행

console.log('=============='); 

//==== 콜백 지옥 함수를 Promise를 이용하여 구현하기 ====

function add2(x){
    let sum = x + x;
    console.log(sum);
    return new Promise((resolve, reject) => {
        resolve(sum);
    })
}

add2(3) //1) 3 + 3 (= result), callback으로 2) 수행
.then((result) => add2(result)) //2) result + result  (= result2), callback으로 3) 수행
.then((result2) => add2(result2)) //3) result2 + result2 (= result3), callback으로 4) 수행
.then((result3) => add2(result3)) //4) result3 + result3 
.then((result4) => {    //4) callback으로 fin log 출력
    console.log('fin');
})