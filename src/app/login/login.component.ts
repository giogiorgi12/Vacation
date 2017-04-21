import {Component} from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import {ILoginResponse} from'../Models/LoginResponse';
import {ApiService} from'../Services/Api.Service';

@Component({
   selector:'pm-app',
   templateUrl:'app/login/login.component.html',
   providers:[ApiService]
})
export class LoginComponent
{
    
    public loginForm = this.fb.group
    ({
        Name:["",Validators.required],
        Password:["",Validators.required]
    })
    constructor(public fb:FormBuilder,public Api:ApiService){}
    doLogin(event)
    {   
       console.log(this.Api.Login(this.loginForm.value));
    }
}