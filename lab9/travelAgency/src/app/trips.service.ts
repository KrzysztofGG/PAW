import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Trip } from './single-trip/trip';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  public trips : Trip[] = [];
  public expensiveTrip!: Trip;
  public cheapTrip!: Trip;
  freeId: number = 0;
  
  constructor(private http: HttpClient){
    this.getInitialTrips().subscribe(res => this.trips = res);
    // if(this.trips)
      this.freeId = Math.max(this.freeId, this.trips.length + 1);

    this.updateSpecialTrips();

  }

  updateSpecialTrips(){
    if(this.trips.length > 0){

      this.expensiveTrip = this.trips.reduce((prev, curr) =>{
        return curr.price > prev.price ? curr : prev;
      })
    this.cheapTrip = this.trips.reduce((prev, curr) =>{
      return curr.price > prev.price ? prev : curr;
    })
  }
}


  tripsUrl: string = "/assets/trips.json";
  // public reservedTrips = new BehaviorSubject(new Map<Trip, number>());
  

  getInitialTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl);
  }
  
  addTrip(trip: Trip): void{
    console.log(trip);
    trip.id = this.freeId;
    this.trips.splice(0, 0, trip);
    this.freeId = Math.max(this.freeId, this.trips.length + 1);
    this.updateSpecialTrips();
  }

  deleteTrip(id: number): void{
    this.trips = this.trips.filter(t => t.id != id);
    this.updateSpecialTrips();
  }
}
