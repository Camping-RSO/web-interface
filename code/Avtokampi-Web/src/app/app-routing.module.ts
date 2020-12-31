import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import * as fromComponents from './components';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './components/home/home-page.module#HomePageModule',
        // loadChildren: () => import(`./components`).then(m => m.HomePageModule)
    },
    {
        path: 'camps',
        loadChildren: './components/camps/camps.module#CampsModule',
        // loadChildren: () => import(`./components`).then(m => m.CampsModule)
    },
    {
        path: 'maps',
        loadChildren: './components/maps/maps.module#MapsModule',
        // loadChildren: () => import(`./components`).then(m => m.MapsModule)
    },
    {
        path: 'reservations',
        loadChildren: './components/reservations/reservations.module#ReservationsModule',
        // loadChildren: () => import(`./components`).then(m => m.ReservationsModule)
    },
    {
        path: 'auth',
        loadChildren: './components/auth/auth.module#AuthModule',
        // loadChildren: () => import(`./components`).then(m => m.AuthModule)
    },
    {
        path: 'user-profile',
        loadChildren: './components/user-profile/user-profile.module#UserProfileModule',
    },
    {
        path: '**',
        component: fromComponents.PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
