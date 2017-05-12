"use strict";
var router_1 = require("@angular/router");
var auth_guard_1 = require("./_guards/auth.guard");
var login_component_1 = require("./login/login.component");
var AppRoutes = [
    { path: '', component: login_component_1.LoginComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: login_component_1.LoginComponent },
    { path: '**', redirectTo: '' }
];
exports.routting = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app.router.js.map