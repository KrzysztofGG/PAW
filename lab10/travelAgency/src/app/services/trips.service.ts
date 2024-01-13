import { Injectable, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { Trip, TripReview } from '../trip';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripsService{

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  tripsUrl: string = "/assets/tripsDb.json";
  apiURL: string = "http://localhost:5000/api/trips/";
  tripsLoaded!: Promise<boolean>;

  public trips : Trip[] = [];
  public expensiveTrip!: Trip;
  public cheapTrip!: Trip;
  // freeId: number = 0;
  
  constructor(private http: HttpClient){
    // this.getInitialTrips().subscribe(res => this.trips = res.trips);
    
    this.refreshTrips();
    // this.freeId = Math.max(this.freeId, this.trips.length + 1);
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

  refreshTrips(){
    this.http.get<Trip[]>(this.apiURL).subscribe(data => {
      this.trips = data;
      this.tripsLoaded = Promise.resolve(true);
    })
  }

  getInitialTrips(): Observable<{trips: Trip[]}> {
    this.tripsLoaded = Promise.resolve(true);
    return this.http.get<{trips: Trip[]}>(this.tripsUrl);
  }
  
  addTrip(trip: any): void{
    console.log(trip)
    
    // trip.id = this.freeId;
    // this.trips.splice(0, 0, trip);
    // this.freeId = Math.max(this.freeId, this.trips.length + 1);
    // this.tripsLoaded = Promise.resolve(false);
    this.http.post(this.apiURL, trip, this.httpOptions).subscribe(data => {
      alert("New trip added");
      this.refreshTrips();
    })
    this.updateSpecialTrips();
    
  }

  addReview(trip: Trip, newReview: TripReview){
    trip.reviews.push(newReview);
    trip.ratings.push(newReview.rating);

    
    this.http.put(this.apiURL + trip._id, trip, this.httpOptions).subscribe(date => {
      this.refreshTrips();
    })
  }

  deleteTrip(_id: string): void{
    this.trips = this.trips.filter(t => t._id != _id);
    this.updateSpecialTrips();
  }


  getTripMeanRating(trip: Trip): number{
    if(trip.ratings.length === 0)
      return 0;

    return Math.ceil(trip.ratings.
      reduce((a, b) => a+b) / trip.ratings.length);
    // return this.trips.filter(t => t.id === trip.id)[0].
    //   reviews.map(r => r.rating).
    //   reduce((a, b) => a+b) / trip.reviews.length;
  }
  getCountries(): string[]{

    return this.trips.map(trip => trip.country).filter(function(item, pos, self){
      return self.indexOf(item) == pos;
    });
    
  }
}
