//Node js는 비동기적 특성과 이벤트 기반의 언어라는 특징
// Event Emitter : 노드 js의 코어 모듈, 특정 이벤트가 발생했을 때 
//일괄적으로 특정 로직을 실행할 수 있도록 구조적으로 코드를 작성할 수 있는 방법 제공

`use strict`

const EventEmitter = require('events');

//클래스 확장
class ChatManager extends EventEmitter{};

const chatManager = new ChatManager();
chatManager.on("event", () => {
    console.log("event call back"); //이벤트 콜백 메서드
});  


//이벤트 발생!
chatManager.emit("event");