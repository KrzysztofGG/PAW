import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-coloring',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './dynamic-coloring.component.html',
  styleUrl: './dynamic-coloring.component.css'
})
export class DynamicColoringComponent {
  elOne: boolean = false;
  elTwo: boolean = false;
  elThree: boolean = false;
}
