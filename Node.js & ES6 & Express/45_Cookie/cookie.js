//보통 쿠키와 세션은 모듈을 통해 사용되는 것이 좋다.
//해당 실습에서는 모듈을 사용하지 않았다.

const http = require('http');

http.createServer((req, res) => {
  console.log(req.url, req.headers.cookie); 
  //요청이 두 개가 기록된다.
  ///name=sqsq
  ///favicon.ico name=sqsq; mycookie=test

  //favicon(파비콘) : 웹 사이트 탭에 보이는 아이콘 이미지를 뜻한다.
  //HTML에 파비콘에 대한 정보를 넣어두지 않았으므로 브라우저가 파비콘에 대한 정보를 유추할 수 없으면 추가로 favicon.ico에 요청을 한다.
  //쿠키는 요청의 헤더에 담겨 전송된다. 브라우저는 응답의 헤더에 따라서 쿠키를 저장한다.
  //서버는 응답의 헤더에 쿠키를 심으라고 브라우저에게 명령을 하였다. 그리고 두 번재 요청 헤더에 쿠키가 있음을 확인할 수 있다.
  res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });  //mycoockie라는 쿠키에 test라는 데이터를 가지게 하여 심는다.
  res.end('Hello Cookie');
})
  .listen(8083, () => {
    console.log('8083번 포트에서 서버 대기 중입니다!');
  });
