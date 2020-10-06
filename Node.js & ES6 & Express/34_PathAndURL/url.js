//URL 모듈은 인터넷 주소를 쉽게 조작하도록 도와주는 모듈이다.
//주소는 host와 pathname, parameter가 결합된다.
const url = require('url');

const { URL } = url;  // url.URL
//## WHATWG방식
//해당 방식은 host없이 경로만 오는 주소인 경우 처리할 수 없다(/book/booklist/apsx)
//search부분은 보통 주소를 통해 데이터를 전달할 때 사용된다. ?key=value&key2=value2
//WHATWG방식은 search(파라미터)부분을 searchParams라는 특수한 객체로 반환한다.
//생성자 : 주소가 부분별로 정리됨. WHATWG방식의 url
const myURL = new URL('http://www.google.com'); 
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));  //format() : 분리되었던 url을 원래 상태로 조합함

//WHATWG방식에서의 파라미터 다루기
const myURL2 = new URL('https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=nodejs');
console.log('searchParams:', myURL2.searchParams);  //searchParams : 
console.log('searchParams.getAll():', myURL2.searchParams.getAll('sm'));  //키에 해당하는 모든 값을 가져옴
console.log('searchParams.get():', myURL2.searchParams.get('query')); //키에 해당하는 첫번째 값을 가져옴
console.log('searchParams.has():', myURL2.searchParams.has('fbm')); //해당 키가 있는지 검사함

console.log('searchParams.keys():', myURL2.searchParams.keys());  //키들의 목록을 가져옴
console.log('searchParams.values():', myURL2.searchParams.values());  //값들의 목록을 가져옴

myURL2.searchParams.append('query', 'newQuery');  //키에 해당하는 값을 추가함
myURL2.searchParams.append('query', 'newQuery2');
console.log(myURL2.searchParams.getAll('query'));
myURL2.searchParams.set('query', 'initQuery');  //키에 해당하는 값을 초기화함
console.log(myURL2.searchParams.getAll('query'));

myURL2.searchParams.delete('query');  //키에 해당하는 값을 삭제함
console.log(myURL2.searchParams.getAll('query'));
console.log('searchParams.toString():', myURL2.searchParams.toString());  //조작한 searchParams를 다시 원래 주소형태 문자열로 합침
myURL2.search = myURL2.searchParams.toString(); //이 문자열을 search에 대입하면 주소 객체에 반영된다.
console.log('----------------------')

//## 기존 노드 방식
const parsedUrl = url.parse('http://www.google.com'); //parse() : 주소를 분해함
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));

//기존 노드 방식에서는 search부분을 querystring 모듈을 이용하여 조작해야 한다.
const querystring = require('querystring');

const parsedUrl2 = url.parse('https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=nodejs');
const query = querystring.parse(parsedUrl2.query);  //질의(query)부분을 자바스크립트 객체로 분해 변환
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));  //분해된 객체를 문자열 형태로 조립