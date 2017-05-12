import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthenticationService
{
    constructor(private htttp:Http){}
    login(username:string, password:string)
    {
     return true;
    }
}