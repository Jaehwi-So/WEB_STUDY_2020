/*
# Node.js
라이언 달에 의해 창시
일반적인 Apache와 같은 WAS(웹 애플리케이션 서버)는 Blocking. 네트워크 요청이 이루어지는 환경에서
요청이 완료되기 전까지 다음 단계로 넘어가지 못하고 동기성 프로그래밍을 한다.
이를 대항하기 위해 창시.

# Node js 핵심개념
- IO : 사용자 요청에 대해 서버의 input에 대한 output 처리가 중요 이슈
이가 서버 성능을 측정하는 데에 주요 요소.

- 비동기 처리
비동기 처리란 해당 처리가 완료되는 시점을 기다리지 않고 작업을 진행한다는 개념.
비동기 처리를 위해 이벤트 루프라는 개념을 제시. Node.js에서 V8에 해당

- Blocking과 Non-Blocking
Blocking은 해당하는 블록(코드나 작업)이 완료될 때 까지 다른 작업을 처리하지 않음.
Non-Blocking은 작업을 병렬적으로 처리한다. JavaScript의 속성은 Non-Blocking. 즉 비동기 처리 원칙

- 이벤트 주도 방식
자바스크립트는 이벤트에 따라 요청에 따른 처리를 하도록 데이터를 처리한다.
Call-back을 통한 이벤트의 처리

# 프론트엔드 개발에서의 자바스크립트와 Node.js를 이용한 자바스크립트 개발
window와 같은 객체는 프론트엔드에서만 존재하는 객체.
백엔드를 위한 js를 활용할 때 프론트엔드 개발에 사용하는 코드나 객체를 사용 불가능하다.
*/

/*
#Node에서의 import와 같이 외부 모듈을 포함하는 기본적인 방법으로 require() 사용
cf) import React from 'react' 프론트엔드에서 모듈 포함
*/
const dns = require('dns');  //상수

if(true){
    let a = "let";
    console.log(a);
}
if(true){
    var b = "var";
    console.log(b);
}
console.log(a);
console.log(b);