import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
  @Input() name : string | undefined;
  @Input() age : number | undefined;
  @Output() next = new EventEmitter();

  //컴포넌트 생성
  constructor() { 
    console.log("constructor Call")
  }

  //컴포넌트 템플릿에 바인딩 된 데이터 변경 시
  ngOnChanges(changes: SimpleChanges): void { //onChanges는 최초에 바인딩 될 때에도 호출된다.
    console.log("ngOnChanges Call")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Call")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Call")
  }

  //
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Call")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Call")
  }

  //컴포넌트 삭제시
  ngOnDestroy(): void {
    console.log("ngOnDestroy Call")
  }

  //컴포넌트 초기화
  ngOnInit(): void {
    console.log("ngOnInit Call")
    setInterval(() => {
      console.log('child interval');
      this.next.emit(); //이벤트 발생
    }, 3000)
  }

  click(element : HTMLInputElement, value: string, event: Event){
    console.log('child click');
    console.log(element.value, value, event);
  }

}
