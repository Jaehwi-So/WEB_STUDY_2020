import { Component, OnInit } from '@angular/core';
import { Ex3Service } from '../ex3.service';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  constructor(public ex3 : Ex3Service) {
    console.log(ex3.name + 'ex2');
  }

  ngOnInit(): void {
  }
  click(){
    this.ex3.name = "EX2 click";
  }

}
