function p(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ms <= 5000){
                resolve(ms / 1000);
            }
            else{
                reject(new Error(ms / 1000));
            }
        }, ms)
    })
}

//Promise : 리턴해서 체이닝 느낌
p(1000)
.then(() => p(1000)) //비동기 작업 진행
.then(() => p(1000))
.then(() => {
    console.log('3000ms 후 실행');
});

//async await
(async function func(){
    await p(1000);  //비동기 작업 진행
    await p(1000);
    await p(1000);
    console.log('3000ms 후 실행')
})();

//Promise.all
(async function func2(){
    const result = await Promise.all([p(1000), p(4000), p(5000)]);  //p(7000)이면 error
    console.log(result, 'promise all');
})();

//Promise.race
(async function func2(){
    const result = await Promise.race([p(1000), p(4000), p(5000)]);
    console.log(result, 'promise race');
})();