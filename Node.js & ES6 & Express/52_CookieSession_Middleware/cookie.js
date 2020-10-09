const express = require('express'); //익스프레스 모듈
const path = require('path');   //path 모듈


const dotenv = require('dotenv'); //1)dotenv : process.env를 관리하기 위한 모듈
const morgan = require('morgan');   //2)morgan 미들웨어
const cookieParser = require('cookie-parser');  //3)cookie-parser 미들웨어
const session = require('express-session'); //4)express-session 미들웨어

const app = express();
app.set('port', process.env.PORT || 8082);  
dotenv.config();   

app.use(morgan('dev')); 
app.use('/', express.static(path.join(__dirname, 'public')));

//body parser의 기능 사용
app.use(express.json());    
app.use(express.urlencoded({extended : false}));    


//# cookie-parser
//요청에 동봉되어 있는 쿠키를 해석하여 req.cookies 객체로 만든다. 
//쿠키는 cookie1=value와 같은 문자열. 이를 자바스크립트 객체로 변환하여 {mycookie : 'test'}로 변환함
//첫번째 인수로 비밀키를 넣어줄 수 있다. 서명된 쿠키가 있을 경우 제공한 비밀 키를 통해서 해당 쿠키가 내 서버가 만든 쿠키임을 검증할 수 있다.
app.use(cookieParser(process.env.COOKIE_SECRET));  
//1) dotenv를 이용하여 .env파일을 읽어서 process.env로 만든다. process.env.COOKIE_SECRET에 cookiesecret값이 할당된다.
//2).env파일에 중요 데이터가 보관되므로 보안상 유리하다.

//# 쿠키 사용법
/* 쿠키의 옵션
maxAge : 현재 시간으로부터 만료 시간을 밀리초(millisecond) 단위로 설정
expires : Cookie의 만료 날짜를 GMT 시간으로 설정. 지정되어 있지 않거나 0으로 지정되어 있는 경우 session cookie를 생성
path :Cookie의 경로. 기본 경로는 "/"
domain : Cookie의 domain name. 기본 domain name은 loaded
secure : HTTPS에서만 cookie를 사용 가능하도록 설정
httpOnly : 웹 서버를 통해서만 cookie에 접근할 수 있도록 함
signed : cookie가 서명되어야 할 지를 결정
*/

app.get('/visit', function(req, res) {
    var visit_number = req.cookies.visit_num || 0;
    visit_number++;
    res.cookie('visit_num', visit_number, {
        maxAge: 10000,
        signed: true    //서명된 쿠키 사용
   });
   res.send('방문수: ' + visit_number); 
});

app.get('/readvisit', function(req, res) {
    var visit_number = req.cookies.visit_num || 0;
    res.send('방문수: ' + visit_number); 
});

app.get('/updatevisit', function(req, res) {
    var new_value = 0;
    res.cookie('visit_num', new_value,{
        maxAge: 10000,
        signed: true
    });
    res.send('방문수 초기화');
});

app.get('/deletevisit', function(req, res) {
    res.clearCookie('visit_num');
    res.send('방문수 삭제');
});

//서버와 포트 연결
app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 대기 중`);
})

