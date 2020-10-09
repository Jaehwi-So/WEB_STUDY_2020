/*
미들웨어 간의 데이터 전달하기
*/ 
const express = require('express'); 
const path = require('path');   
const dotenv = require('dotenv'); 
const morgan = require('morgan');   

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

//요청이 끝날 때 까지만 데이터를 유지하고 싶다면 req 객체에 데이터를 넣어두어 미들웨어간에 데이터를 전달할 수 있다.
//cf)session 객체에 데이터를 넣는 경우에는 세션이 유지되는 동안 데이터가 계속 유지된다.
app.use('/data', (req, res, next) => {
    console.log('throw');
    req.myData = "data throw";  //req 객체에 데이터를 저장하여 다음 미들웨어에게 전달할 수 있다.
    next('route');
}, (req, res, next) => {
    req.myData = "no";
    next();
});

app.use('/data', (req, res, next) => {
    console.log('data get', req.myData);
    res.send(req.myData);
});



//서버와 포트 연결
app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 대기 중`);
})

//에러 처리 미들웨어. 에러처리 미들웨어는 아래에 위치시키는 것이 좋다.
app.use((err, req, res, next) => {
    console.eroor(err);
    res.status(500).send(err.message);
});