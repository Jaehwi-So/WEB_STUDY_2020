//템플릿 엔진 :템플릿 양식과 특정 데이터 모델에 따른 입력 자료를 합성하여 결과 문서를 출력하는 기능을 한다.
//HTML은 정적인 언어이다. 따라서 템플릿 엔진을 이용하여 서버측의 데이터 모델을 사용하여 사용자들에게 보여줘야 할 필요성이 있다.
//넌적스(Nunjucks) : 파이어폭스를 제작한 모질라에서 만듬, HTML문법을 그대로 사용하되 추가로 자바스크립트 문법을 사용가능하다.
//넌적스 설치 : npm i nunjucks
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const expressHtmlRouter = require('./routes/expHtml');
const expressValueRouter = require('./routes/value');
const controlStateRouter = require('./routes/control');

const app = express();
app.set('port', process.env.PORT || 8081);

//넌적스 연결 방법
const nunjucks = require('nunjucks'); 
nunjucks.configure('views', { //첫번째 인수로 views의 폴더 경로를 넣고 두번째 인수에 옵션을 넣는다.
  express: app, //express 속성에 app 객체를 연결한다.
  watch: true //true이면 HTML파일이 변경될 때 템플릿 엔진을 다시 렌더링한다.
})
//view engine은 어떠한 종류의 템플릿 엔진을 사용할 지를 나타낸다. 
//nunjucks는 html 확장자를 그대로 사용해도 되며 njk를 사용해도 된다. njk확장자 사용시 확장자를 njk로 변경
app.set('view engine', 'html'); 
 

//app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

app.use('/exphtml', expressHtmlRouter);
app.use('/expvar', expressValueRouter);
app.use('/control', controlStateRouter);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
