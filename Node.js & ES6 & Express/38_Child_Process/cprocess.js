//# Child Process
//노드에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용하는 모듈
//현재 노드 프로세스 외에 새로운 프로세스(자식 프로세스)를 띄워서 명령을 수행하고 
//노드 프로세스에 결과를 알려준다.

//명령 프롬프트의 명령어 dir 실행
const exec = require('child_process').exec; //exec은 셸을 열어서 명령어 수행
var process = exec('dir');

//결과는 표준출력과 표준에러에 붙어둔 on(이벤트 리스너)에 버퍼 형태로 전달된다.
//성공결과는 표준출력에서 실패결과는 표준에러에서 표시된다.

//이벤트 리스너
process.stdout.on('data', data => {
  console.log(data);
});
process.stderr.on('data', data => {
  console.error('err', data.toString());
});

const spawn = require('child_process').spawn; //spawn은 새로운 프로세스를 띄우면서 명령어 실행
var py_process = spawn('python', ['test.py']);  //파이썬 코드를 실행하는 명령어

//require(‘child_process’).spawn(command, args=[], [options])
//option의 기본값은 {cwd, env, setid}
//cwd : 생성된 프로세스가 실행되는 디렉토리
//env : 새 프로세스가 접근할 수 있는 환경변수
//setsid : true이면 서브프로세스를 새 세션으로 생성

py_process.stdout.on('data', data => {
  console.log(data.toString());
});
py_process.stderr.on('data', data => {
  console.error(data.toString());
});