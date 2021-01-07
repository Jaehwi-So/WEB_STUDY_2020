# 컴포넌트 간의 데이터 바인딩
- @Input은 부모 컴포넌트로부터 프로퍼티 데이터를 바인딩 받는다.
- @Output은 부모 컴포넌트에 이벤트 데이터를 바인딩 시킨다.
- 템플릿 문법 : &lt;app-parent &lsqb;age]="age" (upAge)="up();"></app-parent> 
    * {{ }} : 삽입식. 컴포넌트의 변수 혹은 함수의 연산 결과가 뷰에 반영된다.
    * [ ] = "" : 프로퍼티 바인딩. class, style 등의 속성에도 바인딩이 가능하다.
    * ( ) = "" : 이벤트 바인딩. View에서 이벤트가 발생할 때 처리할 컴포넌트 로직을 바인딩한다.
    * &lsqb;(ngModel)] = "" : 양방향 바인딩. 뷰와 컴포넌트의 변화가 둘 중 한곳에서 일어나면 다른 한 곳에서 데이터가 바인딩된다.

- 부모 -> 자식 바인딩
    * &lsqb;age]="age" -> @Input() age

- 자식 -> 부모 바인딩
    * @Output() next : Event -> (next)="next()"
----------------
## child.component
- 부모 컴포넌트(parent)로부터 name과 age 데이터를 바인딩받는다.(부모 컴포넌트에서 &lsqb;age]="age" 형식으로 데이터를 바인딩시켰다.)
- 부모 컴포넌트(parent)에게 이벤트 감지자 next 데이터를 바인딩시킨다.
- 해당 컴포넌트의 클릭 이벤트를 click()으로 바인딩시킨다.
   
### child.component.ts
```
export class ChildComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
  @Input() name : string | undefined;
  @Input() age : number | undefined;
  @Output() next = new EventEmitter();

  constructor() { 
    console.log("constructor Call")
  }

  //컴포넌트 초기화
  ngOnInit(): void {
    console.log("ngOnInit Call")
    setInterval(() => {
      this.next.emit(); //이벤트 발생
    }, 3000)
  }

  click(element : HTMLInputElement, value: string, event: Event){
    console.log(element.value, value, event);
  }

}
```
### child.component.html
```
<p>{{name}} {{ age }} child  works!</p>
<p>
    <input #myInput type="text">
    <button (click)="click(myInput, myInput.value, $event);">click</button>    <!--#myInput : Element의 Text 데이터를 파라미터로 전달 -->
</p>
```

--------------------------
## parent.component
- 자식 컴포넌트(child)로부터 next 이벤트 데이터를 바인딩 받는다.
- 부모 컴포넌트(grand)에서 age 데이터를 바인딩 받는다.
- 부모 컴포넌트(grand)에게 upAge 이벤트 데이터를 바인딩시킨다.
   
### parent.component.ts
```
export class ParentComponent implements OnInit {
  @Input() age : number | undefined;
  @Output() upAge = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  next(){
    this.upAge.emit();
  }
}
```

### parent.component.html
```
<p>{{age}} parent works!</p>
<app-child name="CHILDNAME" [age]="age" (next)="next()"></app-child>  <!-- 자식 컴포넌트에 age 바인딩, 자식 컴포넌트에서 받은 이벤트 next 바인딩 -->

```

----------------------------

## grand.component
- 자식 컴포넌트로(parent)로 부터 upAge 이벤트를 바인딩 받는다.
- 자식 컴포넌트(parent)에 age 프로퍼티를 바인딩한다.

### grand.component.ts
```
export class GrandComponent implements OnInit {
  age = 0;
  constructor() { }

  ngOnInit(): void {
  }

  up(){
    this.age = this.age + 1;
  }
}
```

### grand.component.html
```
<p>{{ age }} grand works!</p>
<app-parent [age]="age" (upAge)="up();"></app-parent>
```

# 컴포넌트의 생명주기
- constructor : 가장 먼저 호출. 컴포넌트 생성 시 호출한다. Constructor에는 많은 것을 하지 말고 대신 데이터가 바인딩 된 후 ngOnchanges나 ngOnInit에서 뷰에 대한 설정을 마무리해라.
- ngOnChanges : 최초 초기화 때와 Input 프로퍼티가 변경될 때 호출. Input이 없으면 실행되지 않는다.
- ngOnInit : 프로퍼티가 초기화 된 직후
- ngAfterContentInit : ngContent 사용 시 자식이 초기화 된 직후 호출
- ngAfterContentChecked : ngContent를 통해 HTML을 받을 때. 최초/변경 시 호출
- ngAfterViewInit : 템플릿이 모두 초기화되었을 때 호출
- ngAfterViewChecked : 템플릿에 바인딩된 값이 변경되었을 때 호출
- ngOnDestroy : 컴포넌트 사용 종료 시

- 컴포넌트 생성 순서 : 자식 -> 부모 -> 부모의 부모