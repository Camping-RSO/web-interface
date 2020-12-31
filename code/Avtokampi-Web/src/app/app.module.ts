import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as fromComponents from './components';
import { ServicesModule } from './services/services.module';

@NgModule({
    declarations: [
        AppComponent,
        fromComponents.HeaderComponent,
        fromComponents.FooterComponent,
        fromComponents.PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        LazyLoadImageModule,
        HttpClientModule,
        ServicesModule,
        fromComponents.HomePageModule,
        fromComponents.MapsModule,
        fromComponents.AuthModule,
        fromComponents.CampsModule,
        fromComponents.ReservationsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
