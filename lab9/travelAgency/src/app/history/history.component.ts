import { Component } from '@angular/core';
import { HistoryService } from '../history.service';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  constructor(public historyService: HistoryService){}

}
