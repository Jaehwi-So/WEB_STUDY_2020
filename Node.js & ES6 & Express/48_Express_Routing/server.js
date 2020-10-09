//1. npm init으로 package.json 생성
//2. npm install express를 통해 모듈 생성, 해당 모듈은 package-lock.json에서 관리됨

const express = require('express'); //익스프레스 모듈
const path = require('path');   //path 모듈

const app = express();


//app.set(key, value)
//데이터를 key, value의 쌍으로 저장할 수 있다. 
//해당 값은 익스프레스 전역에서 공유되므로 개인의 데이터보다는 설정 값을 설정할 때 사용한다.
//app.get(key)를 통해 가져올 수 있음.
app.set('port', process.env.PORT || 3000);  //서버가 실행될 포트 설정, env 포트속성이 없다면 3000번 포트 이용

//라우터(Router)
//웹 페이지에서 url에 따른 처리를 해주는 것을 라우팅이라고 한다.
//app.use, app.get, app.post, route 객체 등을 이용하여 라우터로 등록할 수 있다.

//app.get(주소, 라우터)
//주소에 대한 get요청이 올 때 어떤 동작과 응답을 할지 설정한다.
app.get('/', (req, res) => {
    res.send('Hello Express');  //res.send() : express에서는 res.write나 res.end 대신 res.send()를 사용
})

app.get('/view', (req, res) => {
    //sendFile()을 이용하여 HTML 문서로 응답
    res.sendFile(path.join(__dirname, '/view.html'));    //__dirname : 현재 디렉터리 경로
})

//포트를 연결하고 서버를 실행하는 부분.
//app.get(키) : app.set(키, 값)으로 설정된 데이터를 가져옴
app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 대기 중`);
})