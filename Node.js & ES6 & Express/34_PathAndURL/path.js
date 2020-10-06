//Path 모듈은 폴더와 파일의 경로를 쉽게 찾고 조작할 수 있도록 하는 모듈이다.
//기본적으로 경로는 \ 를 이용하여 표시,
//자바스크립트 문자열에서는 \가 특수 문자이므로 \\로 표시해야 한다.

//절대경로와 상대경로
//절대경로 : 루트 폴더나 노드 프로세스가 실행되는 위치가 기준이 된다.
//상대경로 : 현재 파일이 기준이 된다. 같은 경로면 . 한 단계 상위 경로면 ..를 사용해 표현
const path = require('path');

const string = __filename;  //현재 파일의 경로
const directory = __dirname;  //현재 디렉터리 경로

console.log('경로 구분자', path.sep);
console.log('환경변수 구분자', path.delimiter);
console.log('파일이 위치한 폴더경로:', path.dirname(string)); 
console.log('파일의 확장자', path.extname(string)); 
console.log('파일의 이름(확장자 포함)', path.basename(string)); 
console.log('파일의 이름(확장자 미포함)', path.basename(string, path.extname(string)));

console.log('파일의 경로를 root, dir, base, ext, name으로 구분', path.parse(string));
console.log('parse()한 객체를 파일 경로로 합친다.', path.format({
  dir: 'C:\\Nodejs\\work\\34_Path_URL',
  name: 'path',
  ext: '.js',
}));
console.log('/나 \를 여러번 사용했거나 혼용했을 경우 정상적인 경로로 변환', path.normalize('C:\/Nodejs//work/34_Path_URL'));
console.log('------------------------------');
console.log('파일 경로가 절대경로인지 판별(C:\\)', path.isAbsolute('C:\\Nodejs'));
console.log('파일 경로가 절대경로인지 판별(./34_Path_URL)', path.isAbsolute('./34_Path_URL'));

console.log('첫 번째 경로에서 두 번째 경로로 가는 방법:', path.relative('C:\\Nodejs\\work\\34_Path_URL', 'C:\\'));
console.log('여러 인수를 하나의 경로로 합친다(상대경로 기준)', path.join(__dirname, '..', '/32_Race_Condition', '.'));
console.log('여러 인수를 하나의 경로로 합친다(앞의 인수 무시하고 절대경로 기준)', path.resolve(__dirname, '..', '/32_Race_Condition', '.'));