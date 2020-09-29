try{
    //let a = 1;
    let b = 2;
    let c = a + b;  //오류 발생
    console.log(c);
}catch(e){  //오류 발생 시 catch!
    console.log('error!', e)
}finally{
    console.log('finally'); //에러 발생으로 catch문에 들어가게 되더라도 수행
}

//오류 발생시에도 계속 수행
console.log('next');

