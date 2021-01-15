# 배포하기
Build를 거친 후 Deploy 방식을 선택하여 배포하게 된다.

# Build
ng build : 개발용 빌드
ng build --prod : 배포용 빌드, aot가 디폴트
- AOT(Ahead-of-time) : 빌드를 통해 템플릿까지 전부 렌더링된 결과를 가지게 한다.(Default가 true 옵션)
- JIT(Just-in-time) 컴파일러 용량 제외 : 소스코드의 템플릿들을 실제로 렌더링하여 결과물을 화면에 뿌려주는 컴파일러.

# Deploy
1. AWS 배포하기.
2. serve -s dist
    - npm i -g serve
3. Express로 배포하기
4. Nginx로 배포하기