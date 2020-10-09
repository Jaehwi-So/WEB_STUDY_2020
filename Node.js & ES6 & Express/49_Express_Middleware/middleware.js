/*
INDEX
미들웨어와 라우터의 정의
미들웨어 등록하기
dotenv, morgan, static, body-parser 사용하기
미들웨어 직접 등록하기
여러개의 미들웨어 등록하기
에러처리 미들웨어
*/ 

//# 미들웨어(Middleware)
//운영체제와 응용 소프트웨어, Express에서는 요청(request)과 응답(response) 사이에 위치하여 조정과 중개를 맡음.
//익스프레스의 핵심. 요청과 응답을 조작하여 기능을 추가하거나 나쁜 요청을 필터링함.
//클라이언트의 요청과 응답에 관한 정보로 필요한 처리들을 할 수 있도록 독립된 함수로 분리된 함수
//다른 사람이 만든 미들웨어는 app.use(path, 미들웨어)로 등록하고 직접 미들웨어를 만들어 사용할 수도 있다.

//# 라우터(Router)
//웹 페이지에서 url에 따른 처리를 해주는 것을 라우팅이라고 한다.
//app.use, app.get, app.post, route 객체 등을 이용하여 라우터로 등록할 수 있다.
//라우터도 일종의 미들웨어라고 볼 수 있다.

//npm install express morgan cookie-parser express-session dotenv
const express = require('express'); //익스프레스 모듈
const path = require('path');   //path 모듈

const dotenv = require('dotenv'); //1)dotenv : process.env를 관리하기 위한 모듈
const morgan = require('morgan');   //2)morgan 미들웨어

const app = express();
app.set('port', process.env.PORT || 8085);  
dotenv.config();   

//# 2) morgan 
//morgan 미들웨어 연결 후 기존 로그 외에 추가적인 로그를 볼 수 있다. 인수에는 모드를 설정할 수 있다.
//dev(개발 환경에서 주로사용), combined(배포 환경에서 주로사용), common, short, tiny 등을 넣을 수 있다.
//요청과 응답에 대한 정보를 콘솔에 기록한다.
app.use(morgan('dev')); //미들웨어 등록, 인수에 경로를 넣지 않으면 모든 요청에서 미들웨어가 실행된다.

//# static 
//static 미들웨어는 기본 제공, 정적인 파일들을 제공하는 라우터 역할을 한다.
//app.use('요청 경로', express.static('실제 경로'))
//1. 함수의 인수로 정적 파일들이 담겨있는 폴더를 지정한다. 해당 폴더에 css나 js, 이미지 파일들을 넣으면 브라우저상에서 접근 가능하게 된다.
//2. 서버의 폴더 경로와 요청 경로가 다르므로 외부인이 서버의 구조를 쉽게 파악할 수 없는 보안성 측면에서 좋다.
//3. 정적 파일들을 알아서 제공해주므로 fs.readFile로 파일을 직접 읽어서 전송할 필요가 없다.
//4. 요청 경로에 해당하는 파일이 없으면 알아서 next()를 호출하여 다음 미들웨어를 실행한다. 
//5. 파일을 발견했다면 응답으로 파일을 보내고 next()를 호출하지 않는다.
app.use('/', express.static(path.join(__dirname, 'public')));

//# body-parser 
//요청의 본문에 있는 데이터를 해석해서 req.body 객체로 만들어주는 미들웨어. 해당 모듈의 일부 기능이 express에 내장되어있다.
//1. 폼 데이터나 Ajax 요청의 데이터를 처리한다. 단, 이미지와 같은 MultipartFile 데이터는 처리하지 못한다.(multer모듈 사용)
//2. JSON, URL-encoded형식(주소 형식으로 데이터를 보냄)의 데이터를 req.body객체로 만들어준다.
//3. body-parser 모듈을 인스톨하면 Raw, Text형식의 데이터를 추가적으로 해석할 수 있다.
//4. 해당 모듈을 통해 req.on('data')로 스트림을 사용하는 것 대신 내부적으로 스트림을 처리하여 req.body에 추가시킨다.

app.use(express.json());    //요청 본문의 데이터를 JSON형식으로 변환한다.(key=value&key2=value2 -> {key:'value', key2:'value2'})
//해당 옵션이 false이면 querystring모듈을 이용하여 쿼리스트링을 해석하고 true이면 qs 모듈(npm 모듈임)을 사용하여 쿼리스트링을 해석한다.
app.use(express.urlencoded({extended : false}));    



//# 미들웨어를 직접 등록하기.

//app.use()에 매개변수가 req, res, next인 콜백함수를 넣어 미들웨어 등록. 
//app.use(미들웨어) : 모든 요청에서 미들웨어 실행
//app.use('url', 미들웨어) : 해당 url 요청에서 미들웨어 실행
//app.post('url', 미들웨어) : post url 요청에서 미들웨어 실행
//미들웨어는 위에서부터 아래로 순서대로 실행되며 요청과 응답 사이에 기능을 추가할 수 있다.
//미들웨어의 인수에 next가 있는 경우, next는 다음 미들웨어로 넘어가는 함수이다. 
//next()를 실행하지 않으면 다음 미들웨어가 실행되지 않는다.
app.use((req, res, next) => {
    console.log('모든 요청에서 실행');
    next(); //다음 미들웨어로 넘긴다. 만약 next()도 호출하지 않고 응답도 보내지 않으면 클라이언트는 응답을 받지못해 하염없이 기다리게된다.
})

// /errorevent GET 요청이 들어올 경우
//# 여러개의 미들웨어 등록하기
app.get('/errorevent', (req, res, next) => {  //미들웨어 1
    console.log('GET 요청에서 실행')
    next(); //다음 미들웨어로 넘어간다.
}, (req, res) => {  //미들웨어 2(에러 발생시킴)
    throw new Error('에러는 에러처리 미들웨어로 갑니다.') //에러처리 미들웨어는 아래에 위치시키는 것이 좋다.
});

//서버와 포트 연결
app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 대기 중`);
})

//# 에러 처리 미들웨어. 
//에러처리 미들웨어는 아래에 위치시키는 것이 좋다.
//에러처리 미들웨어는 next()를 호출시키지 않아도 작동한다.
//라우터에서 에러가 발생한다면 next(err)을 호출하여 자동으로 에러 처리 미들웨어로 넘긴다.
app.use((err, req, res, next) => {
    console.eroor(err);
    res.status(500).send(err.message);
});