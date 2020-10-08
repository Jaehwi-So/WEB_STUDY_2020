const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

//쿠키는 cookie1=value와 같은 문자열. 이를 자바스크립트 객체로 변환하여 {mycookie : 'test'}로 변환함
const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie); //쿠키 문자열을 객체 형태로 변환
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 1);
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  } 
  //로그아웃 할 경우
  if (req.url.startsWith('/logout')) {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 1);
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `HttpOnly; Path=/`,
    });
    res.end();
  }
   // name이라는 쿠키가 있는 경우
  else if (cookies.name) {
    try {
      const data = await fs.readFile('./cookie2_join.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write(`<h1>${cookies.name}님 환영합니다!</h1>`)
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  } 
  // 쿠키가 없는 경우
  else {
    try {
      const data = await fs.readFile('./cookie2_login.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  });
