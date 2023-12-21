import { Component } from '@angular/core';
import { SummaryValueComponent } from '../summary-value/summary-value.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [SummaryValueComponent, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
