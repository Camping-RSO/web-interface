import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import * as fromAuth from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        fromAuth.LoginComponent,
        fromAuth.RegisterComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ]
})
export class AuthModule { }
