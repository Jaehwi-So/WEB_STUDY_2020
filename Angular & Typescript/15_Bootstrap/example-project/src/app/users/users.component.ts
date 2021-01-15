import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : Object;

  constructor(private apiService : ApiService, @Inject('apiUrl') private apiUrl : string,) { 
  }

  //비동기 Asnyc/Await으로 api에 요청
   /*
  async ngOnInit() {
    let result = null;
    try{
      result = await this.apiService.get_api_promise(this.apiUrl);  //Promise
    }
    catch(e){
      console.error("API Request fail");
    }
    if(result){
      this.users = result;
    }
  }
  */

  //Rxjs의 Observable을 통해 가져오는 방법
  ngOnInit(){
    const users$ = this.apiService.get_api_observable(this.apiUrl);  //Observable의 변수는 뒤에 $를 붙인다.
    users$.subscribe(data => {
      this.users = data;
    })
  }
  


}
