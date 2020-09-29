`use strict`
//Curried Function(합성함수)
//f(x) = x + 1
//g(x) = x^2
//h(x) = f(g(x));
//== h(x) = (x^2) + 1
//회원 등급에 따른 할인률을 구함

function getDiscount(price, rate){  //가격, 할인률
  return price * rate;
}

const getDiscount2 = (price, rate) => price * rate;

const res = getDiscount(1000, 0.8);
console.log(res);

const res2 = getDiscount(1000, 0.8);
console.log(res2);

//Closure 함수 선언. 내부적으로 접근할 수 있는 함수 선언
const getDiscount3 = function(rate){
  return (function(price){
    return price * rate;
  });
}

const getDiscount4 = rate => price => rate * price;

const getDiscount5 = (rate) => {
  return (price) => {
    return rate * price;
  };
};

const value = getDiscount3(10000)(0.9);
const value2 = getDiscount4(10000)(0.9);
const value3 = getDiscount5(10000)(0.9);
//getDiscount(x)로 Closure 함수가 반환된다. value = closureFunc(0.9)라는 의미

const getTenpercentOff = getDiscount3(0.9);
const value4 = getTenpercentOff(10000);
//1. getDiscount3(0.9)로 (price) => {} 함수가 반환됨.
//2. 반환된 함수의 price 인자로 10000을 넘겨서 value4를 구함.
//getDiscount3(getTenpercentOff(rate))
//              ㄴ == price

console.log(value);
console.log(value2);
console.log(value3);
console.log(value4);
//Bable.js.io에서 ES6를 사용하지 않은 버전을 확인할 수 있다.
