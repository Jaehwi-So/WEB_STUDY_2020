import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is title';
  names = ['kim', 'lee', 'park'];
  
  custom(){
    console.log('custom');
  }
}
