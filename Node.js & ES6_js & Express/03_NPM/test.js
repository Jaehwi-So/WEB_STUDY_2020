//npm install nodemon -g : 노드몬 설치
/*
노드몬 : 파일이 바뀔 때 autosave. 변화된 파일을 감지하여 실행
nodemon은 프로젝트 폴더의 파일들을 모니터링
파일이 수정될 경우 자동으로 서버를 리스타트.
nodemon test.js 명령어를 입력하면
test.js의 변화가 일어날 때 마다 실행하게 된다.
 nodemon을 위해서 소스에 다른 설정을 추가할 필요도 없기 때문에 편리하게 사용 가능.
*/

//스크립트 실행 오류 시 권한 설정
//1. PowerShell을 관리자 권한으로 실행
//2. get-help Set-ExecutionPolicy 명령어를 통해 권한 설정 목록 불러옴
//3. Set-ExecutionPolicy RemoteSigned으로 권한 재설정


//1. npm init 으로 package-lock.json 생성
//2. npm install uuid4로 모듈 생성 
//3. require()을 통해 패키지를 가져와 사용
//4. node_modules가 없어도 npm install을 통해 package.json에서 모듈을 가져올 수 있다.
//5. npm update를 통해 node_modules의 모듈 버전 수정을 할 수 있다.
//6. package-lock.json에는 모듈들이 참조하고 있는 라이브러리나 모듈의 버전을 명시하여 충돌을 방지한다.
//7. package.json의 script를 통해 명령어를 입력할 수 있다.
/*
 "scripts": {
    "start": "node test.js" 
  }
  npm start 입력시 npm node test.js와 같다.
*/
const uuid = require('uuid4');  //uuid import
var id = uuid();    //uuid 모듈 사용
console.log(id);