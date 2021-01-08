# Angular CLI
- ng test : 테스트 실행, jasmine, karma를 사용한다.
- ng build : 번들링된 static 파일로 빌드한다.(기본 경로는 ./dist), dist안의 소스를 배포한다.
- 어느 경로로 들어오던지 index.html로 접근 가능하도록.. Nginx 등의 솔루션
- ng eject : 프로젝트를 Angular CLI에 의존하지 않는 형태로 변경한다. Webpack 설정을 위해 주로 사용한다.
- ng e2e : End to End 테스트 : 셀레니움 웹드라이버를 이용하여 종단간 테스트
- ng run lint : 린트 사용
- ng generate [class, component, directive, enum, guard, interface, module, pipe, service] name : 구성 요소 생성

# DI(Dependency Injection)
- app.module.ts의 메타 데이터가 자동으로 객체를 생성하여 주입해준다.
- 기본적으로 객체는 싱글턴으로 생성되어 같은 인스턴스를 공유한다.

# Service
- ng generate service ex3
- service를 사용할 때에는 app.module.ts에서 providers에 추가시켜 사용
- 공통적으로 같은 데이터를 다루지만 표현 계층이 나누어졌을 경우 사용하기 유용하다.
- 공통 데이터를 service.ts에 선언하고 사용할 수 있다.