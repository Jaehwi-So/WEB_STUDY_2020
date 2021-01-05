import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { Test2Component } from './test2.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { FormsModule } from '@angular/forms';
import { Sample3Component } from './sample3/sample3.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    Sample1Component,
    Sample2Component,
    Sample3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //모듈 추가
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
