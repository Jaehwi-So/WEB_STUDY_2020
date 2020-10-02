`use strict`
//프로토 타입 기반 객체
function PersonProto (name, age){
  this.name = name;
  this.age = age;

  PersonProto.prototype.getName = () => {
    return this.name;
  }
  PersonProto.prototype.setName = function(name){
    this.name = name;
  }

  //Arrow function의 this는 global 객체의 this
  PersonProto.prototype.getAge = () => this.age;
  PersonProto.prototype.setAge = (age) => {this.age = age};
}

const Person1 = new PersonProto('kim', 23);
console.log(Person1.getName());
Person1.setAge(12);
console.log(Person1.getAge());

//클래스 기반 객체
class PersonClass {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  getName = () => this.name;
  getAge = () => this.age;
  
  setName = (name) => {
    this.name = name;
  }
  setAge = (age) => {
    this.age = age;
  }
}

const Person2 = new PersonClass('lee', 20);
Person2.setName('park');
console.log(Person2.getName());
console.log(Person2.getAge());