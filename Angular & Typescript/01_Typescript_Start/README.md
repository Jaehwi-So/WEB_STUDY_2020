# Typescript

## 타입스크립트의 사용
- 자바스크립트는 동적으로 타입이 결정되므로 이러한 관대한 타입 매칭으로 인해 런타임 이전에서 오류를 캐치하지 못하는 경우가 잦다.
- 큰 프로젝트일수록 코드 리팩토링 시 IDE가 해당 문맥에 맞는 도움말을 제공하거나 오류가 발생할 수 있는 코드를 미리 검사해주는 기능이 중요하다.
- 위의 이유들로 IDE가 변수의 타입을 알 수 있도록 하여 문맥 이해와 런타임 이전 에러 캐치를 목적으로 개발자간의 생산성을 높이는 것이 타입스크립트의 사용 이유이다.

## 트랜스파일러
- 웹 브라우저는 기본적으로 Javascript 이외의 언어는 실행할 수 없다.
- 따라서 TypeScript로 작성된 코드는 웹 브라우저나 Node.js 환경에서 실행되기 이전에 Javascript로 변환되어야 한다. 

## 타입스크립트 시작
- Typescript 컴파일러는 npm으로 설치 가능하다.
    * npm i -g typescript  // 전역환경에 타입스크립트 컴파일러 설치
    * tsc -v //타입스크립트 버전확인
       
- 타입스크립트 웹 사이트에서는 실시간 트랜스파일러를 제공한다.
- Typescript 코드를 .js로 변환(트랜스파일)한 파일을 생성하는 명령어
    * tsc main.ts   //main.ts를 main.js로 변환한 파일을 생성한다.
- Typescript 코드를 자바스크립트 코드로 변환하지만 원래 작성한 TS 소스코드를 디버깅하기 위해 Sourcemap을 함께 생성할 수 있다. 소스맵은 main.js.map의 형태로 생성된다.
- 소스맵을 함께 생성할 시 브라우저에서 중단점을 설정하고 원하는 시점에서 코드를 멈출 수 있다.
    * tsc main.ts --sourcemap   //main.ts를 트랜스파일링하면서 Sourcemap을 생성.
- 컴파일 옵션 지정을 통해 최종 JS코드의 버전을 지정할 수 있다. 기본값은 ES3이다.
    * tsc main.ts --t ES6
- .js파일을 만들지 않고 메모리에 결과물을 생성하려면 --noEmit 옵션을 사용한다. 결과물을 파일로 만들 필요 없이 브라우저에서 바로 실행할 때 사용한다.
- --watch, -w 옵션을 통해 워치 모드로 타입스크립트 컴파일러를 실행 가능하다. .ts파일이 변경되면 자동으로 컴파일한다.
   
- 일반적으로 IDE에서 타입스크립트를 컴파일하지 않는다. 개발단계에서 .ts파일 사용시 브라우저에서 SysteJS로 컴파일하며 배포 단계에서는 Webpack을 이용하여 번들링한다.
-----------
## tsconfig.json
타입스크립트의 컴파일 옵션을 미리 json 파일을 생성하여 지정할 수 있다. 다음은 대표적인 옵션이다.
- allowJS : 컴파일러가 .ts뿐만 아니라 .js파일도 컴파일하도록 허용한다. 이 옵션은 보통 checkJS 옵션과 함께 사용한다.
- checkJS : 자바스크립트 파일의 에러를 체크해준다. allowJS와 세트.
- baseUrl, paths : 기본 경로를 설정한다. 프로젝트에서 상대경로를 지정할 때 귀찮을 수 있다. 이를 간편하게 만들어 준다.
```
    import { bar } from '../../../bar';
    import { bar } from '@src/bar' //tsconfig 지정시
```
tsconfig.json
```
    ...
    "baseUrl": ".", // 프로젝트 루트를 기준으로
    "paths": {
      "@src/*": [ // @src/는
        "src/*" // src/로 해석해라.
      ]
    }
```
- declaration : 하나의 .ts파일에서 타입과 모듈을 동시에 작성할 수도 있지만 타입 정의 부분을 d.ts 파일로 분리하고 싶은 경우 컴파일러 옵션에서 true로 설정한다.
- esModuleInterop : 어떤 모듈을 불러올 때 아래의 두가지 방법이 가능하지만 공식적으로는 2번 방법이 옳다. 그래서 타입스크립트 컴파일러는 1번 방법을 사용할 경우 에러를 낸다. 해당 에러를 없애기 위해 옵션을 TRUE로 설정할 수 있지만 모듈 시스템을 잘 이해한 상태에서 해당 옵션을 사용하자.
```
import React from 'react';  //1
import * as React from 'react'; //2
``` 
- jsx : .tsx와 .jsx 파일의 변환을 맡는다. 3가지 모드가 있다. [preserve(default) : tsx->jsx 변환, react : tsx->jsx->js 변환(리액트가 사용하는 형식), react-native : tsx->jsx->js(리액트 네이티브가 사용하는 형식) ]
- target : 사용할 특정 ECMAScript의 버전 선택
- lib : 자바스크립트 버전에 대한 타입정의 파일 중 어떤것을 포함시킬 것인지 선택하는 옵션. [ES2015, ES2016 ..] 
- outDir, outFile : .ts나 .tsx파일을 컴파일한 .js나 .jsx파일을 어느 디렉토리에 놓을 것인지 경로를 정하는 옵션이다.
- types, typeRoots : 남이 만든 d.ts파일을 가져다 사용할수도 있지만 직접 d.ts를 정의할 경우 타입설정파일의 경로를 옵션에 적어준다.
- strict : strict mode를 사용할 것인지의 여부
- include : 어떤 파일들을 꼭 컴파일 할 것인지를 정한다.
- exclude : 컴파일에서 제외시킬 파일들을 정한다.
- extends : tsconfig.json 파일을 상속받는다. 하나의 폴더에 여러개의 ts프로젝트가 있는 경우 루트에 tsconfig.json이 공통으로 존재하고 각 서비스별로 tsconfig.json이 사용될 수 있다. 이런 경우 각 서비스의 tsconfig에서 루트에 있는 공통 tsconfig를 extends하여 사용할 수 있다.
-------
## 타입스크립트 프로젝트 실행
1. npm i typescript @types/node ts-node @types/express 패키지 설치
2. tsc --init 명령어를 통해 tsconfig.json 파일 생성
3. tsconfig.json 파일 설정
4. package.json에서 스크립트 "start": "nodemon --exec ts-node main.ts" 추가
5. npm start를 통해 타입스크립트 프로젝트 컴파일 후 실행