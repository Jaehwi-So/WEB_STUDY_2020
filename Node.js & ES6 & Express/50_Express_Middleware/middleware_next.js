/*
next()의 사용법과 인수
*/ 
const express = require('express'); //익스프레스 모듈
const path = require('path');   //path 모듈

const dotenv = require('dotenv'); //1)dotenv : process.env를 관리하기 위한 모듈
const morgan = require('morgan');   //2)morgan 미들웨어

const app = express();
app.set('port', process.env.PORT || 8085);  
dotenv.config();   

//morgan 
app.use(morgan('dev')); 

//static 
app.use('/', express.static(path.join(__dirname, 'public')));

//# body-parser 
app.use(express.json()); 
app.use(express.urlencoded({extended : false}));    


app.get('/', (req, res, next) => {  
    console.log('middleware1');
    next('route'); //next()의 인수로 'route'가 들어가면 다음 라우터의 미들웨어로 넘어간다.
}, (req, res, next) => {  //실행되지 않는다.
    console.log('middleware2');
    next();
});

app.get('/', (req, res) => {
    console.log('middleware3');
    next('err');    //next()의 인수로 'err'가 들어가면 에러처리 미들웨어로 넘어간다.
})



//서버와 포트 연결
app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 대기 중`);
})

//에러 처리 미들웨어. 
app.use((err, req, res, next) => {
    console.eroor(err);
    res.status(500).send(err.message);
});