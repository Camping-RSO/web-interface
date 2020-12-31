import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromUserProfile from '.';

const routes: Routes = [
    {
        path: '',
        component: fromUserProfile.UserProfileComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
