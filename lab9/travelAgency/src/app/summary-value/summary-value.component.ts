import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Trip } from '../single-trip/trip';

@Component({
  selector: 'app-summary-value',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './summary-value.component.html',
  styleUrl: './summary-value.component.css'
})
export class SummaryValueComponent {
  @Input() reservedTrips!: Map<Trip, number>;

  getNumOfReservations(){
    // return Object.values(this.reservedTrips).reduce((acc, val) => acc + val, 0);
    let sum = 0;
    for (let [key, value] of this.reservedTrips){
      sum += value;
    }
    return sum;
  }
  getValueOfReservations(){
    let sum = 0;
    for (let [key, value] of this.reservedTrips){
      sum += value * key.price;
    }
    return sum;
  }
}
