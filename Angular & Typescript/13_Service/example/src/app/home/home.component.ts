import { Component, Inject, OnInit } from '@angular/core';
import { CheckService } from '../check.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    LogService
  ]
})
export class HomeComponent implements OnInit {

  constructor(private logService : LogService, private checkService : CheckService, @Inject('examClass') private exClassService : any) { 
    this.logService.info('Home');
    this.checkService.info('Home');
    this.exClassService.info('Home');
  }

  ngOnInit(): void {
  }

}
