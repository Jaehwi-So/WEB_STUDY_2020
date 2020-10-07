const http = require('http');
const fs = require('fs').promises;

const memo_db = {}; // 데이터베이스 대용 객체
const port = 8081
//req와 res도 내부적으로 스트림으로 되어있어 요청과 응답의 데이터가 스트림 형식으로 전달된다.
http.createServer(async (req, res) => {
  try {
    //## GET 메서드인 경우(read)
    if (req.method === 'GET') { 
      if (req.url === '/') {  //초기 화면으로 이동
        const data = await fs.readFile('./restFront.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data); //view데이터를 응답하며 종료, return을 통해 함수를 종료
      } 
      else if (req.url === '/about') {  //about 화면으로 이동
        const data = await fs.readFile('./about.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } 
      else if (req.url === '/memo') { //메모 목록을 얻어냄
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify(memo_db));  //객체 -> JSON 문자열로 변환하여 응답
      }
      // /도 /about도 /users도 아니면
      try {
        const data = await fs.readFile(`.${req.url}`);
        return res.end(data);
      } catch (err) {
        // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
      }
    } 
    //## POST 메서드인 경우(create)
    else if (req.method === 'POST') { 
      if (req.url === '/memo') {
        let body = '';
        //== 요청의 데이터를 꺼냄==
        //req와 res도 내부적으로 스트림으로 되어있어 요청과 응답의 데이터가 스트림 형식으로 전달된다.
        req.on('data', (data) => {
          body += data;
        });
        // 요청의 body를 다 받은 후 실행됨
        return req.on('end', () => {
          console.log('POST 본문(Body):', body);
          const obj = JSON.parse(body);
          console.log(obj);
          const { content } = JSON.parse(body); //받은 문자열 형태의 body를 JSON형태로 변형
          console.log('parse', body, content);
          const id = Date.now();  //key값으로 Date.now() 사용
          memo_db[id] = content;  //{'key' : 'value', 'key2' : 'value2'}의 형태로 저장
          res.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('ok');
        });
      }
    } 
    //## PUT 메서드인경우(update)
    //localhost:8081/memo/key
    else if (req.method === 'PUT') {  
      if (req.url.startsWith('/memo/')) {
        const key = req.url.split('/')[2];  //split() : 기준 문자('/')를 기준으로 문자열을 쪼개 배열에 저장, 
        console.log(key); //[2] : 저장된 배열에서 2번째 요소(key값)
        let body = '';
        req.on('data', (data) => {
          body += data;
        });
        return req.on('end', () => {
          console.log('PUT 본문(Body):', body);
          memo_db[key] = JSON.parse(body).content;  //JSON을 객체 형태로 변경 후 content에 해당하는 value를 저장
          res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
          return res.end('ok');
        });
      }
    } 
    //## DELETE 메서드인경우(delete)
    else if (req.method === 'DELETE') { 
      if (req.url.startsWith('/memo/')) {
        const key = req.url.split('/')[2];
        delete memo_db[key];
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('ok');
      }
    }
    res.writeHead(404);
    return res.end('NOT FOUND');
  } 
  catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.message);
  }
})
  .listen(port, () => {
    console.log(`${port}번 포트에서 서버 대기 중입니다`);
  });