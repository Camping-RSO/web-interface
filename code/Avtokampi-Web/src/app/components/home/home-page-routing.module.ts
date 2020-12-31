import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromHomePage from '.';

const routes: Routes = [
    {
        path: '',
        component: fromHomePage.HomePageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
