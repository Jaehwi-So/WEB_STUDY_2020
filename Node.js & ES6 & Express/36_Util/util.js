//Util 모듈
//각종 편의 기능을 모아둔 모듈
const fs = require('fs');   //node.js의 Filesystem 모듈
const {deprecate, promisify} = require('util'); //{promisfy} : 비구조화.

//# deprecate() : 중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될 메서드에 처리.
//사용자를 위해 기능을 제거하지 않지만 곧 없앨 예정이므로 사용하지 말라는 경고
const depFunc = deprecate(() => {
  console.log('hello world');
}, 'deprecate 처리된 함수입니다.');

depFunc(1, 2);

//# Promisify
//메서드를 Promise 형태로 변형할 수 있다.
//다음은 앞에서 다룬 파일 입출력 예제

const read = promisify(fs.readFile); //fs.readFile()를 Promise 객체 형태로 변경
const write = promisify(fs.writeFile);

/*
fs.readFile('test.txt', 'utf-8', (err, data) => {
  if(err){    //오류 발생시
      console.error(err);
      return;
  }
  console.log(data);
})

const content = 'hello world';
//writeFile(파일경로, 입력데이터, 콜백(에러여부))
fs.writeFile('test2.txt', content, err => {
  if(err){
      console.error(err, "write fail");
      return;
  }
  console.log('success');
});
*/
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