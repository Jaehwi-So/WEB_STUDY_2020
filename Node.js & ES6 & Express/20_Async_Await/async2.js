//error의 전파
function p(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ms <= 3000){
                resolve(ms / 1000);
            }
            else{
                reject(new Error(ms / 1000));
            }
        }, ms)
    })
}

//async function에서 return되는 값은 Promise.resolve 함수로 감싸져서 반환된다.
async function asyncP(ms){
    const sec = await p(ms);  //비동기 작업. async function이므로 await을 통해 다른 async함수 호출 가능
    return `Hello world ${sec}`;
}

(async function func3(){
    try {
    const str = await asyncP(5000);
    console.log(str);
    } catch(error){ //asyncP에서 발생한 rejct(error)가 그대로 전파된다.
        console.log(error);
    } finally{
        console.log('finally end'); //catch문에 들어가더라도 계속 실행됨
    }
})();   //즉시 실행 함수 IIFE