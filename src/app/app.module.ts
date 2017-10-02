import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    EmpListComponent,
    EmpUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
