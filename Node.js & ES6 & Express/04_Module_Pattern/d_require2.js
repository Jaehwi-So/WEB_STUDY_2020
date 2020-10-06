console.log('hello');
require('./d_exports'); 
//require이나 exports가 꼭 최상단, 최하단에 있지 않아도 된다.

console.log('require.cache', require.cache);    //한 번 require된 파일이 저장되는 캐시
console.log('require.main', require.main);  //노드 실행 시 첫 모듈
console.log('require.main.filename', require.main.filename);    //첫 모듈의 이름
