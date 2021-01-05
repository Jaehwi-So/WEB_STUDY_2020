# Angular란
- Google에서 만든 SPA(Single page application)방식의 프론트엔드 개발을 위한 자바스크립트 프레임워크
- 사용 언어로는 타입스크립트를 권장하며 주로 사용한다.
- Angular1 버전을 AngularJS, Angular2 이상을 Angular라고 칭한다.
- Angular와 AngularJS의 차이점
    * $scope 기반 개발 -> 컴포넌트 기반 개발
    * 향상된 모듈 시스템과 DOM 제어 기능, API 단순화
    * 선택적 데이터 바인딩의 지원과 디렉티브와 서비스, 의존성 주입의 간소화
    * 개발환경 지원 도구인 Angular CLI를 제공한다.
- 컴포넌트로 표현 + 디렉티브

# Angular의 장점과 단점
## 장점
1. 컴포넌트 기반
    - Spring 백엔드 개발과 유사한 DI(Dependency Injection)의 지원으로 기능에 따라 코드를 분리하고 재사용하는것이 유용하다.
    - 서버에 요청을 하거나 기타 부분을 담당하는 Service 클래스와 HTML 컴포넌트를 담당하는 Component 클래스가 구분되며 Service 클래스는 여러 컴포넌트에서 재사용이 가능하다.
    - 컴포넌트 간의 독립성을 유지하여 자신의 컴포넌트 로직에만 집중할 수 있다.
2. 웹페이지 속도
    - SPA 기반으로 링크 클릭시마다 새로운 페이지 요청을 하는 것 대신 필요한 데이터만 Ajax 요청을 통해 서버에서 내려받아 네트워크에 의한 딜레이가 적다
3. 프레임워크
    - Angular는 프레임워크로서 뷰에서부터 테스트까지 다양한 모듈들을 제공한다.
## 단점
1. 초기 로딩 속도
    - 초기 로딩시간이느린 편이다.
2. 검색엔진 인덱싱
    - Angular로 만든 SPA를 제대로 인덱싱하지 못하는 크롤러가 많다.
    - 모든 검색엔진에 검색되게 하기 위해서는 다른 방법을 사용해야 한다.

# Angular 설치
1. Node 설치
    - Front : 개발 환경에서의 노드.
    - Back : 서버에서 실제 운용 용도로 사용하는 노드
2. angular-cli 설치 : npm i @angular-cli -g
3. 샘플 앵귤러 프로젝트 : ng new angular-quick-start
4. 앵귤러 프로젝트 실행 : ng serve 
