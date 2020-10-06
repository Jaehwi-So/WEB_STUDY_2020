//실제 하드 디스크나 원격 하드 디스크에 접근하는 방법
`use strict`

const fs = require('fs');   //node.js의 Filesystem 모듈

//기본적으로 FileSystem은 비동기 방식이므로 작업이 완료되는 대로 해당 콜백이 실행된다.
//비동기 - non-blocking 방식.
//따라서 text.txt를 먼저 읽어 출력될 수도 있고 text2.txt가 먼저일 수도 있다.

const content = 'hello world';
const content2 = 'hello world2';
//writeFile(파일경로, 입력데이터, 콜백(에러여부))
fs.writeFile('test.txt', content, err => {
    if(err){
        console.error(err, "write fail");
        return;
    }
    console.log('success');
});

fs.writeFile('test2.txt', content2, err => {
    if(err){
        console.error(err, "write fail");
        return;
    }
    console.log('success');
});

//readFile(파일명, 인코딩(생략시 utf-8), 콜백)
//readFile은 버퍼의 형식
//콜백함수의 형식을 따름.
fs.readFile('test.txt', 'utf-8', (err, data) => {
    if(err){    //오류 발생시
        console.error(err);
        return;
    }
    console.log(data);
})
fs.readFile('test2.txt', 'utf-8', (err, data) => {
    if(err){    //오류 발생시
        console.error(err);
        return;
    }
    console.log(data);
})