import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard'
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component/app.component';

const AppRoutes: Routes =
    [
        { path: '', component: LoginComponent, canActivate: [AuthGuard] },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: LoginComponent },
        { path: '**', redirectTo:'' }
        
    ];
export const routting = RouterModule.forRoot(AppRoutes);