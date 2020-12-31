import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromMaps from '.';

const routes: Routes = [
    {
        path: '',
        component: fromMaps.MapComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
