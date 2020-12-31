import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromAuth from '.';
import { NoAuthGuard } from '../../services/guards';


const routes: Routes = [
    {
        path: 'login',
        component: fromAuth.LoginComponent,
        canActivate: [NoAuthGuard]
    },
    {
        path: 'register',
        component: fromAuth.RegisterComponent,
        canActivate: [NoAuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
