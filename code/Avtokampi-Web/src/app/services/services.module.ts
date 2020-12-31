import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import * as fromServices from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: fromServices.HttpTokenInterceptor, multi: true },
        fromServices.ApiService,
        fromServices.AuthGuard,
        fromServices.UserService,
        fromServices.AvtokampiService,
        fromServices.KampirnaMestaService,
        fromServices.MnenjaService,
        fromServices.RezervacijeService,
        fromServices.NoAuthGuard,
    ],
    declarations: [
        fromServices.ShowAuthedDirective
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        fromServices.ShowAuthedDirective,
    ]
})
export class ServicesModule { }
