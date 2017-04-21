import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from'@angular/forms'
import {HttpModule}from'@angular/http'

import {LoginComponent} from './login/login.component'
@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
     ],
  declarations: [LoginComponent ],
  bootstrap: [ LoginComponent ]
})
export class AppModule { }
