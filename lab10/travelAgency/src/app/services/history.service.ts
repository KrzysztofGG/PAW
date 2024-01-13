import { Injectable } from '@angular/core';
import { Trip } from '../trip';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  purchaseHistory: HistoryRecord[] = [];  
  public nearestTrip!: Trip;
  public tripInDays = -1;
  constructor() { }

  addToHistory(cartItem: {trip: Trip, quantity: number}): void {

      let newRecord: HistoryRecord = {
        trip: cartItem.trip,
        quantity: cartItem.quantity,
        purchaseDate: new Date().toLocaleString(),
        state: this.findTripState(cartItem.trip)
      };

      this.purchaseHistory.push(newRecord);
      this.findNearestTrip(newRecord);

  }

  findNearestTrip(record: HistoryRecord){
    if (record.state == 1 && (this.nearestTrip == null || 
      record.trip.dateStart < this.nearestTrip.dateStart))
        this.nearestTrip = record.trip;

    let now = new Date()
    this.tripInDays = (this.nearestTrip == null) ? -1 : this.getDayDiff(new Date(), this.dateFromEuropeanFormat(this.nearestTrip.dateStart.toString()));
  }

  getDayDiff(startDate: Date, endDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000;
    console.log(startDate, endDate);
    return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);
  }

  dateFromEuropeanFormat(europeanDate: string): Date {

    const dateParts: string[] = europeanDate.split("/");
    return new Date(+dateParts[2], parseInt(dateParts[1]) - 1, +dateParts[0]); 
  }

  findTripState(trip: Trip): number{

      const startDate: Date = this.dateFromEuropeanFormat(trip.dateStart.toString());
      const endDate: Date = this.dateFromEuropeanFormat(trip.dateEnd.toString());

      let now = new Date()
      // Future
      if (now < startDate)
        return 1;
      // Past
      else if (now > endDate)
        return -1;
      // Ongoing
      else 
        return 0;
  }
}

interface HistoryRecord{trip: Trip, quantity: number, purchaseDate: string, state: number};