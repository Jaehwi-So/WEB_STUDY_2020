import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import appRoutes from './app.routes';
import { DeveloperComponent } from './developer/developer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DeveloperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRoutes //app.routes.ts의 RouterModel.forRoot() 설정해둔 것을 가져온다.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
