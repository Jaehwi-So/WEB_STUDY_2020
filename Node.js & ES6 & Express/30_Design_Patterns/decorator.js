`use strict`
//# 데코레이터 패턴
//주어진 상황 및 용도에 따라 어떤 객체에 책임이나 로직을 덫붙이는 디자인 패턴

class SimpleCoffee{
    getCost() {
        return 10;
    }
    getDescription() {
        return 'Simple coffee';
    }
}

class MilkCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getCost() {
        return this.coffee.getCost() + 2;
    }
    getDescription() {
        return this.coffee.getDescription() + ', milk';
    }
}

class WhipCoffee {
    constructor(coffee) {
        this.coffee = coffee
    }
    getCost() {
        return this.coffee.getCost() + 5;
    }
    getDescription() {
        return this.coffee.getDescription() + ', whip';
    }
}

let someCoffee;

someCoffee = new SimpleCoffee();    //기본 커피
console.log(someCoffee.getCost());  // 10
console.log(someCoffee.getDescription());   // Simple Coffee

someCoffee = new MilkCoffee(someCoffee);    //우유 추가
console.log(someCoffee.getCost());  // 12, 기존의 커피에서 +2가 추가됨
console.log(someCoffee.getDescription());   // Simple Coffee, milk

someCoffee = new WhipCoffee(someCoffee);    //밀크커피에서 휘핑 추가
console.log(someCoffee.getCost());// 17, 기존의 밀크커피에서 +5가 추가됨
console.log(someCoffee.getDescription());// Simple Coffee, milk, whip