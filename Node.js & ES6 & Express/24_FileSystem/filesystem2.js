`use strict`

const fs = require('fs');   //node.js의 Filesystem 모듈
const { promisify } = require('util'); //{promisfy} : 비구조화.
// == require('util').promisify. 비동기 패턴을 promise로 사용할 수 있도록 하는 모듈

const read = promisify(fs.readFile); //fs.readFile()를 Promise 객체 형태로 변경
const write = promisify(fs.writeFile);

const writeAndRead = async (data = "") => { //await을 사용하기 위해 async선언, data가 없을 경우 ""로 초기화
    try{
        await write('test.txt', data); //write가 resolve될 때 까지 대기, 
        const content = await read('test.txt');
        return content;
    } catch(e){
        console.error(e);
    }
}

writeAndRead('hello world');