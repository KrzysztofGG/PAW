import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TripsListComponent } from './trips-list/trips-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TokenStorageService } from './services/token-storage.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { TripsService } from './services/trips.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  // imports: [CommonModule,  HttpClientModule, RouterOutlet,
  //   TripsListComponent, HomeComponent, ,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'travelAgency';

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private tripsService: TripsService){} // add eventBusService

  ngOnInit(): void {

    this.tripsService.refreshTrips();

    this.authService.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.authService.isLoggedIn) {
      
      const user = this.tokenStorageService.getUser();
      this.authService.roles = user.roles;
      this.authService.isBanned = user.isBanned;
      this.authService.username = user.username;

    }
  }
}
