const express = require('express'); 
const path = require('path');   
const dotenv = require('dotenv'); 
const morgan = require('morgan');   
const app = express();
const nunjucks = require('nunjucks');   //템플릿 엔진으로 넌적스 설정
app.set('port', process.env.PORT || 8085);  
app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app,
    watch: true
})
dotenv.config();   
app.use(morgan('dev')); 
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());    
app.use(express.urlencoded({extended : false}));    

/*
요청 객체 (Request)
- req.params : 이름 붙은 라우트 파라미터를 담는다. ex : app.get(’/:idx’, (req, res) => { res.send(req.params.idx); }); -> 
- req.params(name) : 이름 붙은 라우트 파라미터나 GET, POST 파라미터를 담는다. 하지만 여러가지 혼란을 줄 수 있어 사용하는 것을 지양해야한다.
- req.query : GET 방식으로 넘어오는 쿼리 스트링 파라미터를 담고 있다.
- req.body : POST 방식으로 넘어오는 파라미터를 담고있다. HTTP의 BODY 부분에 담겨져있는데, 이 부분을 파싱하기 위해 body-parser와 같은 패키지가 필요하다.
- req.route : 현재 라우트에 관한 정보. 디버깅용.
- req.cookies (req.signedCookies) : 클라이언트가 전달한 쿠키 값을 가진다.
- req.headers : HTTP의 Header 정보를 가지고 있다.
- req.accepts([types]) : 클라이언트가 해당하는 타입을 받을 수 있는지 확인하는 간단한 메서드.
- req.ip : 클라이언트의 IP Address
- req.path : 클라이언트가 요청한 경로. 프로토콜, 호스트, 포트, 쿼리스트링을 제외한 순수 요청 경로다.
- req.host : 요청 호스트 이름을 반환하는 간단한 메서드. 조작될 수 있으므로 보안 목적으로는 사용하면 안된다.
- req.xhr : 요청이 ajax 호출로 시작되었다면 true를 반환하는 프로퍼티
- req.protocol : 현재 요청의 프로토콜 (http, https 등)
- req.secure : 현재 요청이 보안 요청(SSL?) 이면 true를 반환
- req.url (req.originalUrl) : URL 경로와 쿼리 스트링을 반환. 원본 요청을 logging하는 목적으로 많이 쓰임.
- req.acceptedLanguages : 클라이언트가 선호하는 자연어 목록을 반환. header에서 파싱하면 다국어를 지원한는 어플리케이션이라면 초기 언어 선택에 도움을 줄 수 있음.

응답 객체 (Response)
- res.status(code) : HTTP 응답 코드를 설정한다. 응답 코드가 redirect(30x)라면 res.redirect를 쓰는게 낫다.
- res.set(name, value) : 응답 헤더를 설정. 일반적으로 직접 쓸 일은 없다.
- res.cookie(name, value, [options]) : 클라이언트에 저장될 쿠키를 설정하거나 제거한다. cookie-parser 패키지가 필요하다.
- res.redirect([status], url) : redirect. 기본 응답 값은 302다.
- res.send(body), res.send(status, body) : 클라이언트에 응답을 보냄. 상태 코드는 옵션. 기본 콘텐츠 타입은 text/html
text/plain을 보내려면 res.set(‘Content-Type’, ‘text/plain’)을 먼저 호출 해야한다. JSON을 보낼거면 res.json을 쓰자.
- res.json(json), res.json(status, json) : 클라이언트로 JSON 값을 보냄.
- res.jsonp(json), res.jsonp(status, json) : 클라이언트로 JSONP 값을 보냄.
- res.type(type) : Contents-Type 헤더를 설정할 수 있는 간단한 메서드.
- res.format(object) : Accept 요청에 따라 다른 콘텐츠를 전송할 수 있는 메서드. 
- res.attachment([filename]), res.download(path, [filename], [callback]) : 클라이언트에게 파일을 표시하지 말고 다운로드 받으라고 전송함. 
filename을 주면 파일 이름이 명시되며, res.attachment는 헤더만 설정하므로 다운로드를 위한 node 코드가 따로 필요핟.
- res.sendFile(path, [options], [callback]) : path의 파일을 읽고 해당 내용을 클라이언트로 전송한다.
- res.links(links) : Links 응답 헤더를 설정한다. 별로 필요 없을 듯.
- res.locals, res.render(view, [locals], callback) : res.locals는 뷰를 렌더링하는 기본 콘텍스트를 포함하는 객체다. 
res.render는 jade와 같은 템플릿 엔진을 사용하여 뷰를 렌더링한다. 
*/

app.get('/', (req, res) => {
    res.render('test_view', { value : 'this is value', value2 : 'this is second value'} );   //변수를 렌더링하여 템플릿 엔진으로 전달
})
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