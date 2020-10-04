async function gn(number){
    console.log('gn 비동기 작업중..')
    return `${number} complete`;
}

async function fn(num){
    console.log('fn 비동기 작업중..')
    let res = await gn(num);
    console.log('fn 비동기 작업중..')
    return `${res} complete`;
}

async function func(){
    let res = await fn(1200);
    console.log(res);
}

func();