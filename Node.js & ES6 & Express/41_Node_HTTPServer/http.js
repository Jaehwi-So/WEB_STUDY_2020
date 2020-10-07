const fs = require('fs').promises;  //fs모듈의 promises을 가져옴
const http = require('http');

const port = 8081;  //포트 번호

//노드 서버 생성 
//req : 요청에 관한 정보, res : 응답에 관한 정보
const server = http.createServer(async (req, res) => {
    //응답 내용 작성..
    try{
        const view = await fs.readFile('./view1.html'); //fs모듈로 HTTP 파일을 읽는다.
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(view);  //view를 전달
    }
    catch(err){ //예기치 못한 에러 발생 시. 
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });    //에러 
        res.end(err.message);
    }
});
//에러가 발생하더라도 무조건 요청이 마무리되었다는 응답을 보내야 한다.

//서버 연결
server.listen(port);

//연결 완료 시 이벤트 리스너
server.on('listening', () => {
  console.log(`${port}번 포트에서 서버 대기 중입니다!`);
});

//연결 에러시 이벤트 리스너
server.on('error', (error) => {
  console.error(error);
});