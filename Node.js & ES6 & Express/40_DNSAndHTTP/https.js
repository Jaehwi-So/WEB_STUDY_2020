//Hyper Text Protocol(HTTP)
//인터넷 문서간의 하이퍼텍스트를(링크를 포함하는 문서)를 교환하는 규약 프로토콜

//SSL 프로토콜이 추가되어 데이터 전송, 트랜젝션에 있어 암호화되어 전송되어
//안전한 데이터 교환 -> HTTP + SSL = HTTPS

`use strict`
const https = require('https'); //내장 모듈

const options = {
    hostname : 'google.com',   //도메인 네임. https:// 생략 가능
    port : 443,  //지정 안할 시 디폴트값, 기본적으로 443
    path : '/login', 
    method : 'GET'  //요청 메서드 설정
    //REST : POST GET PUT DELETE == CREATE READ UPDATE DELETE
};

//데이터 요청
const req = https.request(options, response => {    //요청결과 콜백메서드
    console.log(`status code : ${response.statusCode}`);

    //응답 결과
    response.on('data', data => {
        process.stdout.write(data)  //콘솔에서의 표준 입출력
    })

    //에러가 난 경우
    req.on('error', error => {
        console.log(error);
    })
});

req.end();  //요청을 종료시켜 메모리 누수를 막음

//트랜젝션 : 일관성 있게 모든 데이터 처리가 완료될 경우 요청 완료
//과정 중 오류가 하나라도 날 경우 rollback과 오류 로깅