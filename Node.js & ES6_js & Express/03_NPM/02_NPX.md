# NPX

npx : 해당하는 모듈을 테스트하는 용도   

cowsay : 출력하는 모듈   
- npx cowsay "hello"   

npm으로 설치하게 되면 node_modules안에 설치됨.   
npx로 설치하게 되면 임시 폴더 안에 설치됨.   

실제 운용 과정에서 node_modules를 생성하게 되고 package.json을 자동으로 생성   
모든 배포 코드나 CI, CD는 코드로서 오류 방지를 위해 자동화해야한다.   

npm update같은 예전 lacacy 모듈 업데이트 할 시 package.lock.json에 불필요한 파일이 포함되어 업데이트가 실패할 수 있음   
불필요한 의존성에 의해 무결성의 파괴에 의해 서버 자동화에 문제가 생길 수 있음   
의존성되는 모듈 최소화해야 유지보수하는 데에 좋은 조건을 가짐   


  