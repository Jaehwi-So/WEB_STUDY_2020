/* 네임스페이스 */
//클래스, 인터페이스, 함수, 변수 등을 논리적으로 묶는데 사용된다.
//C#과 달리 함수, 변수가 namesapce 바로 밑에 오는 것이 가능하다.

export namespace Helper
{
    //네임스페이스 안의 클래스, 인터페이스, 함수, 변수 등은 네임스페이스 안에서만 디폴트로 사용할 수 있다.
    let counter: number = 0;
 
    function getNext(): number {
        return counter++;
    }
 
    export class Converter { //네임스페이스 밖에서 사용하기 위해서는 export를 붙여준다.
        //...
    }
 
    export interface IClone {
        //...
    }
}
 
let cvt = new Helper.Converter();
let itf : Helper.IClone;     
