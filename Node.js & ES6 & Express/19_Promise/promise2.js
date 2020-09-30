function p(){
    return new Promise((resolve, reject) => {
        //...비동기 코드 실행...
        resolve('success');
    });
}
function p2(){
    return new Promise((resolve, reject) => {
        //...비동기 코드 실행...
        reject(new Error('bad error'));
    });
}
function p3(){
    return new Promise((resolve, reject) => {
        //...비동기 코드 실행...
        reject(new Error('bad error'));
    });
}

p().then((message) => {
    console.log('callback !!', message);
})

p2().then((message) => {
    console.log('callback !!', message);
}).catch(message => {
    console.log('callback !!', message);
})

p3().then((message) => {
    console.log('callback !!', message);
}).catch(message => {
    console.log('callback !!', message);
}).finally(() => {
    console.log('finally end');
})


p();
p2();
p3();
