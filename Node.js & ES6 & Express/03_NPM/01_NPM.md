# NPM (Node Package Manager)
npm은 Node.js에서 사용되는 가장 기본적인 패키지 매니저
사용하는 모듈들을 패키지로 만들어 npm을 통하여 관리하고 배포

## 장점
다른 사람이 잘 만들어놓은 모듈들을 npm을 통하여 설치하여 사용가능
이 모듈이 사용하고있는 다른 모듈의 의존성또한 자동으로 해결

터미널에서 npm -v 입력으로 버전 확인
(node -v는 노드 버전 확인)

- 기본적인 리눅스 명령어 사용
    - mkdir study : study 디렉터리 생성
    - cd study : study 디렉터리로 이동

- npm init
    * npm에서는 패키지 관리는 package.json이라는 파일로 관리한다.
    package.json 파일을 생성을 돕는 명령어
    여러가지 정보를 입력할 수 있음.
    entry point: 입력은 반드시 메인으로 사용할 js파일과 파일 명이 일치해야 함

- npm install <패키지명>
    * package.json에 dependency로 모듈(패키지)가 추가됨
    * npm install express : 현재 디렉터리에 익스프레스 모듈(라이브러리)을 dependency로서 설치
    * npm install express -g  : 전역 설치
    * -g : 다른 프로젝트에서도 해당 패키지 모듈을 사용할 수 있도록 함
    * --save : 현재 디렉터리의 package.json에 등록

- npm uninstall express : express 삭제

- npx create-react-app react-project
    * npx : 실행 목적. react-project를 생성함 