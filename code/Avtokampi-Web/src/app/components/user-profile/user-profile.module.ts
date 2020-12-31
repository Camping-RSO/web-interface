import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ServicesModule } from '../../services/services.module';
import { UserProfileComponent } from '.';


@NgModule({
    declarations: [
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        UserProfileRoutingModule,
        ServicesModule,
    ]
})
export class UserProfileModule { }
