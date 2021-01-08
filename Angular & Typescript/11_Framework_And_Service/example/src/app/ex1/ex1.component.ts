import { Component, OnInit } from '@angular/core';
import { Ex3Service } from '../ex3.service';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  constructor(public ex3 : Ex3Service) { 
    console.log(ex3.name + 'ex1');
  }

  ngOnInit(): void {

  }
  
  click(){
    this.ex3.name = "EX1 click";
  }

}
