import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Service } from './ex3.service';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    Ex2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [Ex3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
