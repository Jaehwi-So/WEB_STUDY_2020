import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : Object;

  constructor(private apiService : ApiService, @Inject('apiUrl') private apiUrl : string,) { 
  }

  //비동기로 api에 요청
  async ngOnInit() {
    let result = null;
    try{
      this.apiService.get_api(this.apiUrl).subscribe(data => this.users = data);
    }
    catch(e){
      console.error("API Request fail");
    }
    console.log(this.users);
  }

}
