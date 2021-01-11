import { Component, Inject, OnInit } from '@angular/core';
import { CheckService } from '../check.service';
import { ExfactoryService } from '../exfactory.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [
    LogService
  ]
})
export class CompanyComponent implements OnInit {

  constructor(
    private logService : LogService, 
    private checkService : CheckService, 
    @Inject('apiUrl') private url : string,
    @Inject('factory') private factoryService : ExfactoryService
    ) {
    this.logService.info('Company');
    this.checkService.info('Company');
    console.log(this.factoryService);
    console.log(this.url);
  }

  ngOnInit(): void {
  }

}
