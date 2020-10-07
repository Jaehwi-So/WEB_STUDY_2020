const http = require('http');

const port = 8081;  //포트 번호

//노드 서버 생성 
//req : 요청에 관한 정보, res : 응답에 관한 정보
const server = http.createServer((req, res) => {
    //응답 내용 작성..
    try{
        //Header 작성 : writeHead(HTTP 상태 코드, 응답에 대한 정보)
        //HTTP 상태 코드 : 200(성공), 201(작성됨), 3XX(리다이렉션을 알리는 코드), 4XX(요청 오류), 5XX(서버 오류)
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        //Body 작성 : write() : 클라이언트로 보낼 데이터, 문자열, 버퍼 등을 보낼 수 있다. 
        res.write('<h1>Hello World</h1>');
        res.write('<h1>Hello Node</h1>');
        //end() : 응답을 종료하는 메서드. 인수가 있다면 해당 데이터도 클라이언트 측으로 보낸 후 응답을 종료한다.
        res.end('<p>Hello Server!</p>');
    }
    catch(err){ //예기치 못한 에러 발생 시
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });    //에러 
        res.end(err.message);
    }
});

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