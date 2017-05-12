import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { } from 

@Component({
   //selector:'pm-app',
   templateUrl:'app/login/login.component.html' 
})
export class LoginComponent
{
    model: any = {};
    returnUrl: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
     //   private authenticationService: authenticationService
    ){}
    login()
    {
        console.log(this.model.username + " " + this.model.password);
    }
}