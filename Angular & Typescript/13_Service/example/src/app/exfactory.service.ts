import { Inject, Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ExfactoryService {

  constructor(private logService : LogService, @Inject(Boolean) private isVisible : boolean) { 
    this.logService.info(`Factory ${this.isVisible}`);
  }
}
