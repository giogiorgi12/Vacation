import {Injectable} from'@angular/core';
import {Http,Response} from"@angular/http";
import {Observable}from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//import'rxjs/add/operator/throw';
import { ILoginResponse  } from '../Models/LoginResponse';
@Injectable()
export class ApiService
{
    private _ApiUrl = "http://localhost:8000/";
    private CastedLogin: ILoginResponse;
    constructor(private _http:Http){}
    Login(FormValue:object):ILoginResponse
    {
     var Body = JSON.stringify(FormValue);
     let  CastedResponse : ILoginResponse;
     var Response = this._http.post(this._ApiUrl+"authenticate",Body)
     .map((response:Response)=><ILoginResponse> response.json());
     //Response.subscribe(Cas=>this.CastedLogin =Cas);
   
     
     return this.CastedLogin;
    }
}