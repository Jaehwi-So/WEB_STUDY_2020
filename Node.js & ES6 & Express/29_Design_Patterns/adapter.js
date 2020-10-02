`use strict`
//# 어댑터 패턴
class AfricanLion  {
    roar() {
        console.log('AfricanLion 어흥');
    }
}
class AsianLion  {
    roar() {
        console.log('AsianLion 어흥');
    }
}

class Hunter {
    hunt(lion) {
        lion.roar();
    }
}

class WildDog {
    bark() {
        console.log('wildDog 멍멍');
    }
}

//어댑터 패턴
//Hunter에서 Dog를 사용하기 위해서는 roar()가 필요하다.
//Dog나 Hunter를 수정하는 방법도 있겠지만 변압기 역할을 하는 어댑터를 생성하여
//기존 코드를 수정하지 않고 변경시켜 사용 가능하도록 만드는 역할
class WildDogAdapter {
    constructor(dog) {
        this.dog = dog;
    }
    roar() {
        this.dog.bark();
    }
}

wildDog = new WildDog();
wildDogAdapter = new WildDogAdapter(wildDog);
africanLion = new AfricanLion();

hunter = new Hunter();
hunter.hunt(africanLion);
hunter.hunt(wildDogAdapter);