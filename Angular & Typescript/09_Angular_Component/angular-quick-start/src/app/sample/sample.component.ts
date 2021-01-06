import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  @Input() test : string | undefined; //부모->자식으로 데이터 바인딩. Input이라는 데코레이터로 감싸 데이터를 주입받는다.
  constructor() { }

  ngOnInit(): void {
  }

}
