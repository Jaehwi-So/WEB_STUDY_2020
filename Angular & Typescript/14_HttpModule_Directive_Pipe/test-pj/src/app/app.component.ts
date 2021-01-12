import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-pj';
  users : Object;
  isVisible : boolean = true;

  constructor(
    @Inject('apiUrl') private apiUrl : string,
    private apiService : ApiService
  ){
    this.apiService.get_api(apiUrl).subscribe(data => this.users = data);
  }

  toggle(){
    this.isVisible = !this.isVisible
  }
}
