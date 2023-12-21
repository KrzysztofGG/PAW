import { Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Trip } from '../single-trip/trip';
import { KeyValuePipe, NgFor } from '@angular/common';
import { ReservedTripComponent } from '../reserved-trip/reserved-trip.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ReservedTripComponent, NgFor, KeyValuePipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent{


  @Input() reservedTrips!: Map<Trip, number>;
  @Input() summaryValue!: number;
  notIncluedInPayment: Trip[] = [];

  countSummaryValue(){
    this.summaryValue = 0;
    for (let [key, value] of this.reservedTrips){

      if(!this.notIncluedInPayment.includes(key)){
        this.summaryValue += key.price * value;
      }
    }

  }

  onNotifyRes(event: number){
    // this.summaryValue += event;
    this.countSummaryValue();
    
  }

  tripPaymentInclusion(event: {trip: Trip, removeFromPayment: boolean}){
    if(!event.removeFromPayment){
      this.notIncluedInPayment = this.notIncluedInPayment.filter(trip => trip != event.trip);
    }
    else{
      if(!this.notIncluedInPayment.includes(event.trip))
        this.notIncluedInPayment.push(event.trip);
    }
    this.countSummaryValue();
    console.log(event.removeFromPayment, this.notIncluedInPayment);
  }
  onBuyClick(){
    
    for (let [key, value] of this.reservedTrips){
      if(!this.notIncluedInPayment.includes(key)){
        this.reservedTrips.delete(key);
        this.summaryValue -= value * key.price;
      }
    }
    this.notIncluedInPayment = [];

  }
}
