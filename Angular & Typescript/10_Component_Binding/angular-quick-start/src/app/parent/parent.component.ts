import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() age : number | undefined;
  @Output() upAge = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  next(){
    console.log('parent next');
    this.upAge.emit();
  }
}
