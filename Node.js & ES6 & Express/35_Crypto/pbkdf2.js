//pbkdf2
//기본적으로 해시함수만을 이용하여 암호화를 하게 되면 
//다른 문자열에 대해 같은 암호문으로 인코딩되는 경우의 수가 있다.
//이를 방지하기 위해 salting 처리를 하여 평문에 임의의 문자열을 덫붙여 암호화하는 기법을 사용한다.
//pbkdf2 알고리즘은 이를 사용하여 기존 문자열에 salting처리를 하여 해시 알고리즘을 반복 적용하는 기법이다.

const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt', salt);
  crypto.pbkdf2('asdf1234', salt, 100000, 64, 'sha512', (err, key) => {
    console.log('password:', key.toString('base64'));
  });
});
//1. randomBytes()를 이용하여 랜덤한 64바이트의 문자열을 만든다. 이것이 salt가 된다.
//2. 평문에 salt를 덫붙여 해시 알고리즘을 sha512의 방식으로 10만번 반복하여 적용한다.
//3. pbkdf2는 간단하지만 scrypt나 bcrypt보다 취약하다.
//4. salt값이 매번 달라지므로 비밀번호를 찾으려면 salt값을 잘 보관해야한다.