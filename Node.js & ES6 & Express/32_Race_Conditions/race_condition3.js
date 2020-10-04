//Race Condition의 Mutex lock을 이용한 해결

//실무에서는 해당 클래스는 별도로 분리하는 것이 좋다.
class Lock{
    //_locked : 자원의 사용 여부
    constructor(){
        this._locked = false;
        this._waiting = []; //공유 자원을 사용하는 작업 resolve의 대기 큐
    }
    lock(){
        const unlock = () => {  //unlock은 클로져
            let nextResolve;
            if(this._waiting.length > 0){   //대기열이 있는 경우
                nextResolve = this._waiting.pop(0); //최상위 작업 pop, resolve 함수임.
                nextResolve(unlock);   //unlock 클로져 함수를 인자로 resolve
            }
            else{
                this._locked = false    //대기열이 없는 경우 잠금 해제
            }
        }

        if(this._locked){   //lock이 되어 있을 경우 resolve를 대기큐에 push
            return new Promise(resolve => {
                this._waiting.push(resolve);
                console.log(resolve);
            })
        }
        else{   //lock이 되어있지 않는 경우
            this._locked = true;
            return new Promise(resolve => {
                resolve(unlock);    //unlock 클로져 함수를 인자로 resolve
            })

        }
    }
}

let total = 0;
const account = new Lock();

async function getTotal(){
    return total;
}
async function setTotal(value){
    total = value;
    console.log('set', total);
}
async function increment(value, incr){
    console.log('incr', value, incr);
    return value + incr;
}
async function add(value){
    let current, newValue;
    unlock = await account.lock();  //lock
    //unlock 클로져 함수 반환
    //console.log(unlock); == [Function: unlock]

    current = await getTotal();
    newValue = await increment(current, value);
    console.log('cur/new', current, newValue);
    console.log('add', value, total);
    await setTotal(newValue);

    await unlock(); //unlock. lock과 unlock은 한 쌍이 되어야함.
}

//데이터 input에 대해 필터링을 하여 경쟁 대상으로 삼지 않도록 변경
//race condition이 발생할 수 있는 함수 로직에 lock 클래스 적용
async function test(){
    const transaction1 = add(10);   //add()는 Promise 반환
    const transaction2 = add(20);   
    await transaction1;
    await transaction2; 
    console.log(await getTotal(), 'fin');
}
test();
console.log(total, 'total?');

