const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
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
//넌적스 연결 방법
const nunjucks = require('nunjucks'); 
nunjucks.configure('views', { //첫번째 인수로 views의 폴더 경로를 넣고 두번째 인수에 옵션을 넣는다.
  express: app, //express 속성에 app 객체를 연결한다.
  watch: true //true이면 HTML파일이 변경될 때 템플릿 엔진을 다시 렌더링한다.
})
app.set('view engine', 'html'); 

const multer = require('multer'); // multer 패키지를 사용하여 파일업로드
const fs = require('fs'); //파일스트림

//uploads 폴더가 없을 경우 fs모듈을 사용하여 서버를 시작할 때 생성한다.
try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
console.log(path.join(__dirname, 'uploads'));

//브라우저 상에서 접근 가능하도록 uploads 폴더를 static 폴더로 설정한다.
app.use(express.static(path.join(__dirname, 'uploads')));

//multer 함수의 인수로 설정을 넣는다.
const upload = multer({
  storage: multer.diskStorage({ //storage 속성에는 어디에 어떤 이름으로 저장할지를 설정한다.
    //req 객체에는 요청에 대한 정보, file 객체에는 업로드 파일에 대한 정보가 있음. done은 함수
    destination(req, file, done) {  
      //done의 첫번째 인수에는 에러가 있다면 에러를 넣고, 두번째 인수에는 실제 경로를 넣는다.
      done(null, 'uploads/'); //req와 file의 데이터를 가공하여 done으로 넘긴다.
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      //done의 첫번째 인수에는 에러가 있다면 에러를 넣고, 두번째 인수에는 저장할 파일명을 넣는다.
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); //파일명 + 현재시간 + 확장자로 중복 방지 이름 설정
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },  //limits 속성에는 파일 사이즈 등 업로드에 대한 제한 사항을 설정한다.
});

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/multipart.html'));
});

//파일 한 개 업로드시 upload.single()사용
app.post('/upload', upload.single('image1'), (req, res) => {
  console.log('body', req.body);
  console.log('body.title', req.body.title);
  console.log('file', req.file);  //req.file에 업로드 결과가 들어있음
  const filelist = [];
  filelist.push('/' + req.file.filename); //static 폴더인 uploads에 파일이 저장된다. [root경로/파일이름.확장자]로 사진에 접근이 가능하다.
  res.render('result', { img_list: filelist});
});

//파일 두 개 업로드시 upload.fields()사용, 인자로는 배열
app.post('/upload2', upload.fields([{name: 'image1'}, {name: 'image2'}]), (req, res) => {
  console.log('body', req.body);
  console.log('body.title', req.body.title);
  console.log('file', req.files); //여러개의 파일이므로 업로드 결과는 req.files 배열에 들어있음
  console.log(req.files)
  const filelist = [];
  filelist.push('/' + req.files.image1[0].filename);  
  filelist.push('/' + req.files.image2[0].filename);
  console.log(filelist);
  res.render('result', { img_list: filelist});
});

//여러 파일을 업로드시 upload.fields() 사용
app.post('/multi_upload', upload.array('multi_img'), (req, res) => {
  console.log('body', req.body);
  console.log('body.title', req.body.title);
  console.log('file', req.files); //여러개의 파일이므로 업로드 결과는 req.files 배열에 들어있음
  const filelist = req.files.map(x => '/' + x.filename);
  console.log(filelist);
  res.render('result', { img_list: filelist});
});

app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
