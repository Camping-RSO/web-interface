import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromHomePage from '.';
import { HomePageRoutingModule } from './home-page-routing.module';
import { CampsModule } from '../camps/camps.module';


@NgModule({
    declarations: [
        fromHomePage.BlogSectionComponent,
        fromHomePage.FactsCountersSectionComponent,
        fromHomePage.FeaturedDestinationSectionComponent,
        fromHomePage.HomePageComponent,
        fromHomePage.NewsletterSectionComponent,
        fromHomePage.PopularOffersSectionComponent,
        fromHomePage.RestaurantsSectionComponent,
        fromHomePage.SearchSectionComponent,
        fromHomePage.ServicesSectionComponent,
        fromHomePage.SpecialOffersSectionComponent,
        fromHomePage.TestimonySectionComponent,
    ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        CampsModule
    ]
})
export class HomePageModule { }
