//router 객체를 사용한 모듈화
//라우터를 분리할 수 있는 방법을 제공하여 가독성 있는 코드를 쓸 수 있도록 한다.
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

//require를 통해 분리되어 있는 라우터 모듈들을 가져온다.
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const pageRouter = require('./routes/page');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
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

//
//app.use로 라우터를 연결할 때 요청 주소가 합쳐진다.
app.use('/', indexRouter);  //요청이 /로 시작할 때 indexRouter의 라우터들을 사용한다. -> GET /
app.use('/user', userRouter); //요청이 /user로 시작할 때 userRouter의 라우터들을 사용한다. -> GET /user , POST /user
app.use('/test', pageRouter); //요청이 /test로 시작할 때 pageRouter의 라우터들을 사용한다. -> GET /test , GET /test/page



//에러처리 미들웨어
app.use((req, res, next) => { 
  res.status(404).send('Not Found!'); 
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
