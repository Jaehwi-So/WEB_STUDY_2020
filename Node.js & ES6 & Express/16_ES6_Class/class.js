`use strict`
//자바스크립트는 멀티패러다임 언어
//객체지향형(OOP), 함수형 프로그래밍(Functional programming), 프로토타입(Prototype) 기반 언어
//즉 자유도가 매우 높음

//ES2015 = ES6
//ES2016 = ES7

//클래스는 OOP를 지원하기 위해 ES6에서 탄생

//캐시 매니저, DB 쿼리 매니저 등 class의 용도는 다양하다.
//사용 사례 : 환경변수
//요청 처리시마다 환경변수를 계속 불러오는 것은 비효율. 즉 IO의 가장 큰 오버헤드가 발생하는 사례
//API를 담당하는 서버가 분산되어 있는 경우가 대부분. 장애가 발생하여 환경변수 파일을 읽어올 수 없는 경우가 있을 수 있다.
//클래스를 이용하여 싱글턴 패턴으로 생성하면 아무리 요청이 많이 들어오더라도 한 번 생성된 환경변수로 계속 이용해 먹을수있음.
class cacheManager{
  constructor(){
    this.config = [];
  }
}
const CacheManager = new cacheManager();


class Robot{
  material = 'metal';
   //기본적으로 생성자는 async나 awake와 같은 비동기 문법을 사용할 수 없음
  constructor(name){
    this.name = name  //자동으로 멤버변수에 name이 포함됨
  }

  speak(){
    console.log(`speak : ${this.name}`);
  }
}

class Ai extends Robot{
  constructor(name){
    super(name);  //super : 상위 클래스 Robot의 생성자를 호출
  }
  walk(){
    console.log(`walk : ${this.name}`);
  }
}
const r = new Robot('myRobo');
console.log(r.material);
r.speak();
const a = new Ai('AiRobo');
a.speak();
a.walk();

