import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {
  btn_disabled = true;
  btn_title = "비활성화";
  @Output() custom = new EventEmitter();  //자식->부모로 데이터 바인딩, EventEmitter은 Angular에서 import 
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.btn_disabled = false;
      this.btn_title = "활성화"
      this.custom.emit(); //3초 후 이벤트 발생
    }, 3000)
  }

}
