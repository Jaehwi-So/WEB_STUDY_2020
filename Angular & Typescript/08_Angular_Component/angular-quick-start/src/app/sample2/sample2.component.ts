import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {
  name = '재휘';  //sample2 컴포넌트의 멤버변수 선언
  constructor() { }

  ngOnInit(): void {  
    //2초 후 멤버변수 변경
    setTimeout(() => {
      this.name = '소재휘';
    }, 2000)
  }

  //이벤트 처리
  click_event(e : Event){ //이벤트를 파라미터로 받을 수 있다.
    console.log("Event! " + e);
    this.name = "So Jaehwi";
  }
  over_event(e : Event){ //이벤트를 파라미터로 받을 수 있다.
    console.log("Event! " + e);
    this.name = "Jaehwi So";
  }

}
