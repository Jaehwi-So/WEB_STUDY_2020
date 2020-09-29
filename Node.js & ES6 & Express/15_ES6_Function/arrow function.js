`use strict`

function add(var1, var2){
    return var1 + var2;
}

const add2 = (var1, var2) => var1 + var2;
const add3 = var1 => var1 + 10;
const add4 = (var1, var2) => {
    var1 += 10;
    return var1 + var2;
}


console.log(add2(2,3)); //5
console.log(add3(3));   //13
let a = 20;
console.log(add4(a, 20));   //50
console.log(a); //20

//arrow function은 기존 함수의 this의 범위와 달리 본인의 컨텍스트를 고려하지 않고
//global 객체의 this를 사용한다.

function test1() {
    //this.str = 'global'인 상태
    console.log('global this`:', this.str); //global
    return {
      str: 'inside',
      out: function(){
          console.log('inside this`:', this.str)    //일반 함수 : inside
        }
    };
  }
  
  //call(this, [arg1, arg2..]) : this값 및 전달된 인수와 함께 함수 호출
  test1.call({str : 'global'}).out(); //this를 전달. 오버라이딩

  function test2() {
    //this.str = 'global'인 상태
    console.log('global this`:', this.str); //global
    return {
      str: 'inside',
      out: () => console.log('inside this`:', this.str),  //Arrow function : global
    };
  }
  test2.call({str : 'global'}).out(); //this를 전달. 오버라이딩
  
  