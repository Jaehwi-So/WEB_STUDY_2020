//템플릿 엔진 :템플릿 양식과 특정 데이터 모델에 따른 입력 자료를 합성하여 결과 문서를 출력하는 기능을 한다.
//HTML은 정적인 언어이다. 따라서 템플릿 엔진을 이용하여 서버측의 데이터 모델을 사용하여 사용자들에게 보여줘야 할 필요성이 있다.
//퍼그(Pug) : 구 명칭은 Jade로 문법이 간단하고 Ruby와 문법이 유사하나 HTML과는 문법이 많이 다르다.
//퍼그 설치 : npm i pug
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
app.set('views', path.join(__dirname, 'views'));    //템플릿 파일들이 위치한 폴더를 지정, res.render 메서드가 해당 폴더를 기준으로 템플릿 엔진을 찾아 렌더링한다.
app.set('view engine', 'pug');  //view engine은 어떠한 종류의 템플릿 엔진을 사용할 지를 나타낸다.

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
