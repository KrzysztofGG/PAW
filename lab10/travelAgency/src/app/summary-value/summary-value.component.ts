import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Trip } from '../single-trip/trip';
import { RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-summary-value',
  standalone: true,
  imports: [NgStyle, RouterLink, RouterModule],
  templateUrl: './summary-value.component.html',
  styleUrl: './summary-value.component.css'
})
export class SummaryValueComponent {
  constructor(public cartService: CartService){}
  // @Input() reservedTrips!: Map<Trip, number>;

  // getNumOfReservations(){
    // return Object.values(this.reservedTrips).reduce((acc, val) => acc + val, 0);
  //   let sum = 0;
  //   for (let [key, value] of this.reservedTrips){
  //     sum += value;
  //   }
  //   return sum;
  // }
  // getValueOfReservations(){
  //   let sum = 0;
  //   for (let [key, value] of this.reservedTrips){
  //     sum += value * key.price;
  //   }
  //   return sum;
  // }
}
