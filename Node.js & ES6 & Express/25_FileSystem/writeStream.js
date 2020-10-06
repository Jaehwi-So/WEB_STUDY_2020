const fs = require('fs');

const ws = fs.createWriteStream('./test.txt');  //인수 : 출력 파일명, 옵션

//완료시 이벤트 리스너
ws.on('finish', () => {  
    console.log("파일 쓰기 완료");
});

ws.write("1. 이 글을 추가합니다. \n");
ws.write("2. 이 글도 추가합니다. \n");
ws.end(); 


