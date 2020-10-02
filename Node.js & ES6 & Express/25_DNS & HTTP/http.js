//HTTP 모듈 사용법
//low level의 관점, http 트랜젝션, 비즈니스 로직 처리 시 소켓 에러 체크
`use strict`

const http = require('http');   //내장 모듈

//http 서버 생성
const server = http.createServer((request, response) => {
    response.statusCode = 200; //요청 반환 코드
    response.setHeader('Content-Type', 'text/html');   //HTML, JSON, XML등 데이터타입 명시. html코드를 return함.
    response.end('<div>hello world</div>')  //HTML 문서에 반환할 데이터

});  

const port = process.env.PORT;  //명시적으로 포트를 외부에서 받아옴

//서버의 요청을 받는(listen) 메서드
server.listen(port => {
    console.log(`Server running at port ${port}`)   //몇번 포트에서 실행되고 있는가
}) 