import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { routting } from './app.router'
import { AuthGuard } from './_guards/auth.guard';
import { AppComponent } from './app.component/app.component'
@NgModule({
    imports: [BrowserModule, FormsModule, routting],
    declarations: [LoginComponent, AppComponent],
    bootstrap: [AppComponent],
  providers: [AuthGuard]
})
export class AppModule { }
