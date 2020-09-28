
'use strict'

/*
Strict Mode란?
Strict Mode는 코드에 더 나은 오류 검사를 적용하는 방법입니다.
암시적으로 선언한 변수를 사용하거나 읽기 전용 속성에 값을 할당하거나 확장할 수 없는 개체에 속성을 추가할 수 없습니다.
Strict Mode는 ECMAScript 5 버전에 있는 새로운 기능으로써
프로그램 또는 함수를 엄격한 운용 콘텍스트 안에서 실행시킬 수 있게끔 합니다. 
몇가지 액션들을 실행할 수 없도록 하며, 좀 더 많은 예외를 발생시킵니다.
Strict Mode의 장점
흔히 발생하는 코딩 실수를 잡아내서 예외를 발생 시킵니다.
상대적으로 안전하지 않은 액션이 발생하는 것을 방지합니다.
정확하게 고려되지 않은 기능들을 비활성화 시킵니다.
*/

const obj = {
    title : 'start'
}

//arrow function
const isEmpty = () => obj.title ? true : false

isEmpty();
