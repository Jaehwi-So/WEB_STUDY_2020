const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');  //models폴더 안의 index.js에서 생성한 db 연결 객체

const app = express();
app.set('port', process.env.PORT || 3001);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
});

//sync 메서드를 통해 서버 실행 시 db 연결 객체가 MySql과 연동하도록 설정
//force를 true로 두면 서버 실행시마다 테이블을 재생성한다. 테이블을 잘못 만든 경우 true로 설정
sequelize.sync({ force: false })    
.then(() => {
    console.log('데이터베이스 연결 성공');
})
.catch(err => {
    console.log('연결 실패');
    console.error(err);
})

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));    //?

//404 오류처리 미들웨어
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 존재하지 않습니다.`);
    err.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
})
