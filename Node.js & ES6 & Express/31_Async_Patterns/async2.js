//생성자에서 비동기 코드를 실행시키기.

//static factory method pattern(정적 팩토리 메서드 패턴)
//기존의 constructor에서 promise나 async/await를 사용할 수 없으므르
//생성자의 기능을 대체할 수 있는 static method를 사용하는 것

//비동기 작업
async function init(settings){
    return `${settings} complete`;
}

//데이터베이스 쿼리를 담당하는 DB매니저를 만든다고 가정
//반드시 DB IO 요청에 대한 작업은 서버단에서 이루어져야 하므로 비동기로 구성이 되어야함
class DatabaseManager{
    //Constructor에는 비동기 코드를 실행시킬 수 없음.
    //config : 데이터베이스 설정값을 불러옴
    constructor(config) {
        console.log('constructor');
        this.config = config;
    }
    //static factory 메서드의 생성자를 선언할 때에는 대문자로 선언
    static async BUILD(settings){
        console.log()
        let configure = await init(settings);
        console.log(configure);
        //생성자에서 수행하고자 하는 모든 비동기 작업..
        return new DatabaseManager(configure);
    }
}

const db = DatabaseManager.BUILD('db.properties');