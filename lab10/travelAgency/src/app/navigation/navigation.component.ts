import { Component } from '@angular/core';
import { SummaryValueComponent } from '../summary-value/summary-value.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Trip } from '../trip';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [SummaryValueComponent, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  reservedTrips = new Map<Trip, number>();
}
