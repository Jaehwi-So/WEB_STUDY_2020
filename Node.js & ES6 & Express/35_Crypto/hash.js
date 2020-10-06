//암호화를 도와주는 모듈 crypto
const crypto = require('crypto');

//단방향 암호화 : 복호화 할 수 없는 암호화 방식.
//해시 함수를 이용해서 암호화한다.
//사용 사례는 회원가입시 비밀번호를 해시화하여 DB에 저장하고 로그인 시 입력 문자열을 암호화하여
//DB와 비교하여 인증을 한다.

console.log(crypto.createHash('sha512').update('asd123').digest('base64'));
console.log(crypto.createHash('sha512').update('asd123').digest('hex'));
console.log(crypto.createHash('sha512').update('asd1234').digest('base64'));
console.log(crypto.createHash('sha512').update('asd1234').digest('base64'));
//createHash(알고리즘) : 사용할 암호화 알고리즘을 넣는다.
//md5, sha1, sha256, sha512등이 있다.
//update(문자열) : 변환할 문자열
//digest(인코딩) : 인코딩할 알고리즘. base64, hex, latin1등이 사용된다.