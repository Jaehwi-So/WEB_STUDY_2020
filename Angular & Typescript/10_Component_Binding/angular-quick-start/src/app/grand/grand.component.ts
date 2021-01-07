import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit {
  age = 0;

  constructor() { }

  ngOnInit(): void {
  }

  up(){
    console.log('grand up');
    this.age = this.age + 1;
  }

}
