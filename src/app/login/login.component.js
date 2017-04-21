"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Api_Service_1 = require("../Services/Api.Service");
var LoginComponent = (function () {
    function LoginComponent(fb, Api) {
        this.fb = fb;
        this.Api = Api;
        this.loginForm = this.fb.group({
            Name: ["", forms_1.Validators.required],
            Password: ["", forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.doLogin = function (event) {
        console.log(this.Api.Login(this.loginForm.value));
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        templateUrl: 'app/login/login.component.html',
        providers: [Api_Service_1.ApiService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, Api_Service_1.ApiService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map