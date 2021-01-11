import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExclassService {

  constructor() { }

  public info(message : string){
    console.log('exam ', message);
  }
}
