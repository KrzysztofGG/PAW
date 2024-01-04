import { Injectable, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { Trip, TripReview } from './single-trip/trip';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripsService implements OnInit{

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  
  public trips : Trip[] = [];
  public expensiveTrip!: Trip;
  public cheapTrip!: Trip;
  freeId: number = 0;
  
  constructor(private http: HttpClient){

    this.getInitialTrips().subscribe(res => this.trips = res);
    this.freeId = Math.max(this.freeId, this.trips.length + 1);
    this.updateSpecialTrips();

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log("trips service init")
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

  getInitialTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl);
  }
  
  addTrip(trip: Trip): void{
    console.log(trip);
    trip.id = this.freeId;
    this.trips.splice(0, 0, trip);
    this.freeId = Math.max(this.freeId, this.trips.length + 1);
    this.updateSpecialTrips();
    
    alert("New trip added");
  }

  deleteTrip(id: number): void{
    this.trips = this.trips.filter(t => t.id != id);
    this.updateSpecialTrips();
  }

  addReview(trip: Trip, newReview: TripReview){
    trip.reviews.push(newReview);
    trip.ratings.push(newReview.rating);
  }

  getTripMeanRating(trip: Trip): number{

    return Math.ceil(trip.ratings.
      reduce((a, b) => a+b) / trip.ratings.length);
    // return this.trips.filter(t => t.id === trip.id)[0].
    //   reviews.map(r => r.rating).
    //   reduce((a, b) => a+b) / trip.reviews.length;
  }
  getCountries(): string[]{
    // if(this.trips){
      return this.trips.map(trip => trip.country).filter(function(item, pos, self){
        return self.indexOf(item) == pos;
      });
    
  }
}
