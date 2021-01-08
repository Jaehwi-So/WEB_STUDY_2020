import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  name : Observable<string>;
  constructor(private route: ActivatedRoute) {
    //this.name = this.route.snapshot.paramMap.get('name'); 동기적으로 가져옴
    this.name = this.route.params.map(p => p.name); //Observable(비동기)의 형태로 가져옴 

    //Observable의 map 메서드를 사용하여 연산하려면 npm install --save rxjs-compat 설치 후 import 'rxjs/add/operator/map';
  }

  ngOnInit(): void {
  }

}
