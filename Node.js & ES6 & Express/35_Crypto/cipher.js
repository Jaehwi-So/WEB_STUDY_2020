//양방향 암호화 - 대칭키 암호화
//DES, AES, OTP등의 알고리즘
//단방향 암호화와 달리 복호화가 가능하며 이 과정에서 key가 사용된다.
//암호화할때 사용한 key와 동일한 key로 암호를 복호화할 수 있다.
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';    //AES 알고리즘 사용
const key = 'abcdefghijklmnopqrstuvwxyz123456'; //AES의 key는 32바이트
const iv = '1234567890123456';  //AES의 iv는 16바이트

const cipher = crypto.createCipheriv(algorithm, key, iv);   //암호화 알고리즘과 키, iv를 넣는다.
let result = cipher.update('암호화할 문장', 'utf8', 'base64');  //암호화 : (문자열, 인코딩, 출력 인코딩)
result += cipher.final('base64');   //암호화 결과물의 인코딩
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);   //복호화, 암호화 때 사용한 알고리즘과 키, IV를 넣어야한다.
let result2 = decipher.update(result, 'base64', 'utf8');    //복호화 : (암호문, 인코딩, 출력 인코딩)
result2 += decipher.final('utf8');  //복호화 결과물의 인코딩
console.log('복호화:', result2);