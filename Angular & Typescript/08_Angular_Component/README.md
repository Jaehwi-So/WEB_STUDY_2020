# 컴포넌트
- 독립적으로 동작 가능한 UI 요소.
- 템플릿(HTML), 스타일, 로직을 결합 (형태 표현 + 기능 제어)
- DOM과 같은 트리 구조로 UI 요소들을 구성(컴포넌트들 사이의 트리 구조)
- W3C 표준 웹컴포넌트 기술 기반
    - Custom Elements : 개발자가 만든 태그를 사용 가능하다 &lt;app-custom>과 같이 사용
    - HTML Templates, HTML Import : 새로운 HTML 태그 &lt;shadow> &lt;template>..들을 import하여 사용한다.
    - Shadow DOM : 진짜 DOM이 아닌 커스텀 엘리먼트 안에서 고유의 Shadow DOM을 가지고 외부의 인터페이스와는 격리.

# 컴포넌트 만들기
- 하나의 타입스크립트 파일에서 두가지 부분으로 나뉜다.
    - 데코레이터 : 메타데이터 작성
        -  커스텀 엘리먼트의 이름(selector), 사용 템플릿(template, templateUrls), 사용 스타일(styles, styleUrls) : 스타일은 컴포넌트 내에서만 독립적으로 작용한다. 
        - 템플릿과 스타일은 컴포넌트 내에서 인라인으로 작성(template, styles) 하거나 분리하여 작성(templateUrls, styleUrls)할 수 있다.
    - 실제 컴포넌트 클래스 안의 로직 작성하는 부분 : 클래스 형태로 작성하여 모듈로 내보낸다.
- 다른 템플릿에서 해당 컴포넌트의 커스텀 엘리먼트를 사용하려면 app.module.ts에 사용할 커스텀 엘리먼트를 등록해주어야 사용 가능하다.

- cli를 통해 컴포넌트 생성 가능.
    - 컴포넌트 생성 명령어 : ng g c sample2
    - 컴포넌트 생성 명령어(인라인) : ng g c sample1 -it -is (g : generate, c : component, it : inline-template, is : inline-style)
    - app.module.ts에 자동으로 컴포넌트가 등록된다.
    - angular.json에서 prefix를 달아서 app-sample1의 형태로 커스텀 엘리먼트의 이름이 정해진다.

# 컴포넌트 내 로직 처리 방법
- 컴포넌트는 표현 계층과 로직 계층 사이의 데이터 교환이 이루어져야 한다.
- 데이터가 변경되면 뷰는 자동으로 변경된다.
- 데이터를 바꾸려면 트리거(사용자의 입력)가 필요하지만 항상 그런것은 아니다(Electron)
- 사용자가 입력함과 동시에 뷰를 바꾸려면 양방향 데이터 바인딩(모델과 뷰의 일치)을 사용한다.
    - [()]
    - [(ngModel)] : 양방향 데이터 바인딩을 지원하는 Model.
        * 양방향 데이터 바인딩을 하기 위해서는 app.module의 @NgModule에 해당 바인딩을 하기 위해 imports에 추가해야 한다. 

# 컴포넌트 사용 예제
- sample2.component.ts
```
import { Component, OnInit } from '@angular/core';

// ========== 데코레이터 ==========
@Component({
  selector: 'app-sample2',  //커스텀 엘리먼트로 <app-sample2>를 통해 사용
  templateUrl: './sample2.component.html',  //사용 템플릿
  styleUrls: ['./sample2.component.css']    //사용 스타일 목록들
})

// =========== 로직 ==============
export class Sample2Component implements OnInit {
  name = '재휘';  //컴포넌트의 멤버변수 선언
  constructor() { }

  ngOnInit(): void {  
    //2초 후 멤버변수 변경
    setTimeout(() => {
      this.name = '소재휘';
    }, 2000)
  }

  //이벤트 발생 시 처리
  click_event(e : Event){ //이벤트를 파라미터로 받을 수 있다.
    console.log("Event! " + e);
    this.name = "So Jaehwi";
  }
  over_event(e : Event){ //이벤트를 파라미터로 받을 수 있다.
    console.log("Event! " + e);
    this.name = "Jaehwi So";
  }
}
```
   
- sample2.component.html
```
<p>sample2 works!</p>
<p>표현식 : {{name + ' hello'}}</p>
<button (click)="click_event($event)" >눌러주세요</button>
<button (mouseover)="over_event($event)" >올려주세요</button>
<p>()식은 on들어간 이벤트 처리를 할 때 사용한다. 이벤트를 DOM에 연결.</p>
<p>$ : 내장 로컬 변수를 사용할 수 있다. 내장 로컬 변수인 event를 파라미터로 전달한다.</p>

<input type="text" [(ngModel)]="name">
```

- app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { Test2Component } from './test2.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { FormsModule } from '@angular/forms';
import { Sample3Component } from './sample3/sample3.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    Sample1Component,   //컴포넌트 추가
    Sample2Component,
    Sample3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //모듈 추가
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
   
