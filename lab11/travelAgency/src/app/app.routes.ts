import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripsListComponent } from './trips-list/trips-list.component';
import { TripAdderComponent } from './trip-adder/trip-adder.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history/history.component';
import { SingleTripPageComponent } from './single-trip-page/single-trip-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ModPageComponent } from './mod-page/mod-page.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'trips', component: TripsListComponent},
    {path: 'add-trip', component: TripAdderComponent},
    {path: 'cart', component: ShoppingCartComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'trip/:id', component: SingleTripPageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'admin-page', component: AdminPageComponent},
    {path: 'mod-page', component: ModPageComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {} 
