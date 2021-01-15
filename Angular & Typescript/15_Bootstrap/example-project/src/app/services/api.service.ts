import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {
    this.http = http;
  }

  public get_api_promise(url : string) : Promise<any>{
    console.log(url);
    return this.http.get(url).toPromise();  //Promise 형태로 반환
  }

  public post_api_promise(url : string, data : any) : Promise<any>{
    return this.http.get(url, data).toPromise(); 
  }

  public get_api_observable(url : string) : Observable<any>{
    console.log(url);
    return this.http.get(url);
  }
  public post_api_observable(url : string, data : any) : Observable<any>{
    console.log(url);
    return this.http.post(url, data);
  }
}
