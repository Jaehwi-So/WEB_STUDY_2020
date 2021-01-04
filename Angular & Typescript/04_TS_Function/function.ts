// Typescript의 함수
// 1) 기본 함수형
// function 함수명( 입력 파라미터 ) : 반환형 { 실행 영역 }
function plus(num1 : number, num2 : number) : number{
    return num1 + num2;
}

// 2) Arrow function
// 함수명 = ( 입력 파라미터 ) : 반환형 => { 실행 영역 }
const minus = (num1 : number, num2 : number) : number => {
    return num1 - num2;
}

// 3) Optional Parameter
// 함수의 파라미터를 경우에 따라 선택적으로 지정하게 하려면 파라미터명 뒤에 ?를 붙인다.
const calc = (num1 : number, num2 : number, operator? : string) : number => {
    let result : number;
    if(operator){
        if(operator == "-"){
            result = num1 - num2;
        }
        else if(operator == "*"){
            result = num1 * num2;
        }
        else if(operator == "/"){
            result = num1 / num2;
        }
        else{
            result = num1 + num2;
        }
    }
    else result = num1 + num2;
    return result;
}
console.log(calc(10, 20));
console.log(calc(10, 20, "*"));

// 4) Default Parameter
// 파라미터에 별도의 값이 지정되지 않을 때 사용될 디폴트 값을 지정할 수 있다.
const calc2 = (num1 : number, num2 : number, operator : string = "+") : number => {
    let result : number;

    if(operator == "+"){
        result = num1 + num2;
    }
    else if(operator == "-"){
        result = num1 - num2;
    }
    else if(operator == "*"){
        result = num1 * num2;
    }
    else{
        result = num1 / num2;
    }
    return result;
}
console.log(calc2(10, 20));
console.log(calc2(10, 20, "-"));

// 5) Rest Parameter
// 함수의 파라미터 개수가 가변적일 때 사용하는 파라미터 지정 방법이다.
// 가변 파라미터는 가장 마지막에 지정한다.
const plus2 = (operator : string = "+", ...numbers : number[]) : number => {
    let result = 0;
    for(let i = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    return result;
}
console.log(plus2("+", 1, 3 ,5, 7, 9));