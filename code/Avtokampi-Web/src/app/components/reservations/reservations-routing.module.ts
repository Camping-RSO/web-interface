import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromReservations from '.';
import * as fromCamps from '../camps';
import { AuthGuard } from '../../services';

const routes: Routes = [
    {
        path: '',
        component: fromReservations.ReservationComponent
    },
    {
        path: 'reservations/:avtokampId',
        component: fromReservations.CampPitchesReservationComponent
    },
    {
        path: 'reservations/:avtokampId/camping-pitches/:kampirnoMestoId',
        component: fromReservations.ReservationFormComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
