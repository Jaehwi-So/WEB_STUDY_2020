import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { CheckService } from './check.service';
import { ExclassService } from './exclass.service';
import { ExfactoryService } from './exfactory.service';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CheckService,
    {
      provide : 'examClass', //사용할 이름(토큰명)
      useClass : ExclassService //useClass로 해당 토큰으로 주입시킬 서비스 클래스 지정
    },
    {
      provide : 'examCheck',
      useExisting : CheckService //useExist로 해당 토큰으로 주입시킬 이미 존재하는 서비스 지정
    },
    {
      provide : 'apiUrl',
      useValue : "https://test.com" //useValue로 해당 토큰으로 주입시킬 값 지정
    },
    {
      provide : 'factory',
      useFactory: (logService : LogService) => {
        //return new ExfactoryService(false);
        return new ExfactoryService(logService, true);
      },
      deps: [
        LogService
      ]
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
