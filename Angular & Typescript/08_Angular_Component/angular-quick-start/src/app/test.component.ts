import { Component } from '@angular/core';

/* 데코레이터 : 표현 계층 */
@Component({
    selector: 'app-test',   
    template: `<p>테스트</p>`,
    styles: [
        `p { color : red; }`    //스타일을 인라인으로 지정
    ]
})

/* 로직 : 동작 계층 */
export class TestComponent {

}