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

//cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));  


const FileStore = require('session-file-store')(session); // 세션이 데이터를 저장하는 곳. 


/*# express-session
session() : 인수로 세션에 대한 설정을 받는다. 세션 관리 시 클라이언트에게 쿠키(세션 쿠키)를 보낸다. 안전하게 쿠키를 전송하려면 서명을 추가해야 한다.
secret: 세션을 암호화 해줌
resave: 세션을 항상 저장할지 여부를 정하는 값. (false 권장)
saveUninitialized: 초기화되지 않은채 스토어에 저장되는 세션
store: 데이터를 저장되는 형식, Memory Store, File Store, Mongo Store, Redis 등을 사용한다.
*/
app.use(session({  
  secret: process.env.COOKIE_SECRET,  //세션쿠키를 서명하는 데 필요한 값. cookie-parser과 같게 설정하는것이 좋다.
  resave: false,
  saveUninitialized: true,  //세션에 저장할 내용이 없더라도 처음부터 세션을 생성할 것인지의 여부
  store: new FileStore(),
  cookie:{
    httpOnly: true,
    secure: false
  },
  name: 'mySession' //세션 쿠키의 이름은 name옵션으로 설정
}));
app.get('/', (req, res) => {  
  console.log('session', req.session);
  console.log('sessionID', req.sessionID);  //세션 아이디 확인
  req.session.name = 'jhSession';   //req.session객체에 값을 추가하거나 변경할 수 있다.
  if(!req.session.num){
    req.session.num = 1;    
  } else {
    req.session.num = req.session.num + 1;
  }
  res.send(`Number : ${req.session.num}`);
});

app.get('/delete', (req, res) => {  
    req.session.destroy();  //세션을 모두 제거한다.
  });

app.listen(3000, () => {
  console.log('listening 3000port');
});