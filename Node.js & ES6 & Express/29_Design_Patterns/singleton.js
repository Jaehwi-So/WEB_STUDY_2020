`use strict`
//싱글턴 패턴
//서버 초기화 등에서 환경설정 파일을 읽거나 환경변수들을 로드하여 가지고 있는 객체를 만들 때
//싱글턴 패턴을 사용하지 않으면 서버에 대한 요청이 있을 때 마다 환경설정을 계속 업데이트해야하는 
//오버헤드가 발생할 것이다.

//Singleton : 객체가 최초 한 번만 생성되는 것을 보장하는 디자인 패턴

class CacheManager{
    constructor(){
        //instance;
        //_cache;
        if(!CacheManager.instance){ //인스턴스가 존재하지 않을 때
            this._cache = [];   //_ : private 멤버변수 설정
            CacheManager.instance = this;   //인스턴스를 this로 할당
        }
        return CacheManager.instance;
    }
}

const instance = new CacheManager();
Object.freeze(); //객체를 동결. 동결된 객체는 더 이상 변경될 수 없다.
   