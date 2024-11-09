import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
    {path: 'login', pathMatch: 'full', component: LoginComponent},
    {path: 'principal', pathMatch: 'full', component: PrincipalComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
];
