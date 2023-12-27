import { Injectable } from '@angular/core';
import { Trip } from './single-trip/trip';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  purchaseHistory: HistoryRecord[] = [];  
  constructor() { }

  addToHistory(cartItem: {trip: Trip, quantity: number}): void {

    // for (const item of cart) {
      let newRecord: HistoryRecord = {
        trip: cartItem.trip,
        quantity: cartItem.quantity,
        purchaseDate: new Date().toLocaleString(),
        state: this.findTripState(cartItem.trip)
      };
      this.purchaseHistory.push(newRecord);
      console.log(this.purchaseHistory);
    // }

  }

  findTripState(trip: Trip): number{

    let now = new Date().toLocaleString();

    //Future
    if(trip.dateStart.toLocaleString().localeCompare(now) === 1)
      return 1;
    else if (trip.dateEnd.toLocaleString().localeCompare(now) === 1)
      return -1;
    else
      return 0;
  }
}

interface HistoryRecord{trip: Trip, quantity: number, purchaseDate: string, state: number};