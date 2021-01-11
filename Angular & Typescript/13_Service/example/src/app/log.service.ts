import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  count : number = 0;

  constructor() { 
    console.log('log service construct');
  }

  public info(message : string){
    console.log('log ', message, this.count);
  }
}
