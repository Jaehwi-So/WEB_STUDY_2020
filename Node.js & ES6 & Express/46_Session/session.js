//보통 쿠키와 세션은 모듈을 통해 사용되는 것이 좋다.
//해당 실습에서는 모듈을 사용하지 않았다.

const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

//쿠키 문자열을 객체 형태로 변경
const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const session = {};

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);
    //쿠키와 달리 세션은 서버측에 사용자 정보를 저장해두고 클라이언트와 세션 아이디를 통해 소통함
    const uniqueInt = Date.now(); //세션 ID 부여
    session[uniqueInt] = {  //해당 ID의 세션에 이름과 소멸시간 부여
      name,
      expires,
    };
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`, //세션 ID에 해당하는 쿠키를 set함
    });
    res.end();
  } 
  // 세션쿠키가 존재하고, 만료 기간이 지나지 않았다면
  else if (cookies.session && session[cookies.session].expires > new Date()) {
    try {
      const data = await fs.readFile('./session_join.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write(`<h1>${session[cookies.session].name}님 환영합니다!</h1>`)
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  } 
  else {
    try {
      const data = await fs.readFile('./session_login.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8085, () => {
    console.log('8085번 포트에서 서버 대기 중입니다!');
  });
