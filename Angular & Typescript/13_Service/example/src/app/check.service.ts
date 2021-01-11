import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  count : number = 0;

  constructor() { 
    console.log('check service construct');
  }

  public info(message : string){
    console.log('check ', message, this.count);
    this.count++;
  }
}
