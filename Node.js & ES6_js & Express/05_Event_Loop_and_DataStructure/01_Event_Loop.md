# Event Loop

## 1. 자바스크립트 엔진(JS Engine) 영역
- Memory Heap 과 Call Stack 으로 구성
- 예시로 구글의 V8 Engine이 있다.
- 자바스크립트는 단일 스레드 프로그래밍 언어이므로 Call Stack이 하나이다. 즉 하나씩 처리된다.
- Memory Heap : 메모리 할당이 일어나는 곳
- Call Stack : 코드가 실행될 때 쌓이는 곳. Stack 형태로 누적되며 선입후출의 자료구조 원칙을 따름

## 2. Web API
- Web API 는 브라우저에서 제공하는 API이며, DOM, Ajax, Timeout 등이 있다.
- Call Stack에서 실행된 비동기 함수는 Web API를 호출하고,
Web API는 콜백함수를 Callback Queue에 밀어 넣는다.

## 3. Callback Queue
- 비동기적으로 실행된 콜백함수가 보관 되는 영역.
- Queue의 선입선출 자료구조 원칙을 따름

## 4. Event Loop
- Event Loop는 Call Stack과 Callback Queue의 상태를 체크하며
Call Stack이 빈 상태가 되면, Callback Queue의 첫번째 콜백을 Call Stack으로 밀어넣는다.
- 이러한 반복적인 동작을 틱(tick)이라 칭한다.