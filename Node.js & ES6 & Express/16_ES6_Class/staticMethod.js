`use strict`

class Test{
  number = 10;
  constructor(){
    this.config = {};
  }

  fn(){
    console.log('method');
  }

  //static 메서드에서는 클래스를 생성하지 않고 클래스 내부에 바로 접근하여 함수를 실행한다.
  //즉 constructor의 변수들을 사용 불가능하다.
  static call(){
    console.log('static method');
  }
}
const test = new Test();
test.fn();
//test.call();  불가능
Test.call();
//Test.fn();   불가능