import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FriendListComponent } from './friend-list/friend-list.component';
import { ActorComponent } from './actor/actor.component';
import { CountryListComponent } from './country-list/country-list.component';
import { DynamicColoringComponent } from './dynamic-coloring/dynamic-coloring.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FriendListComponent, ActorComponent, CountryListComponent, DynamicColoringComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-project';
}
