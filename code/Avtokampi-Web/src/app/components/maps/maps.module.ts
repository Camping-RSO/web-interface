import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

import { MapsRoutingModule } from './maps-routing.module';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
        CommonModule,
        MapsRoutingModule,
        AgmCoreModule.forRoot({
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
            apiKey: `${environment.maps_api}`
        })
    ],
    exports: [
        AgmCoreModule
    ]
})
export class MapsModule { }
