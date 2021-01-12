import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {
    this.http = http;
  }

  public get_api(url : string){
    return this.http.get(url)  //Observable 형태로 반환
  }

  public post_api(url : string, data){
    console.log('post');
    return this.http.post(url, data);
  }
}
