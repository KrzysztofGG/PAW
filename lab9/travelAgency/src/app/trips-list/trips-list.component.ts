import { Component, OnChanges, OnInit, Pipe, PipeTransform, SimpleChanges } from '@angular/core';
import { Trip } from '../single-trip/trip';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingleTripComponent } from '../single-trip/single-trip.component';
import { NgFor, NgStyle } from '@angular/common';
import { TripAdderComponent } from '../trip-adder/trip-adder.component';
import { TripFilterComponent } from '../trip-filter/trip-filter.component';
import { SummaryValueComponent } from '../summary-value/summary-value.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Pipe({
  name: 'filterTrips',
  standalone: true
})
class FilterTripsPipe implements PipeTransform{

  transform(trips: Trip[], filters: any) {
    const tripsPriced = trips.filter(trip =>{
      return trip.price >= filters.minPrice && trip.price <= filters.maxPrice;
    })
    const tripsDated = tripsPriced.filter(trip =>{
      return trip.dateStart >= filters.dateStart && trip.dateEnd <= trip.dateEnd;
    })
    const tripsRated = tripsDated.filter(trip => {
      return filters.rating.indexOf(trip.rating) !== -1;
    })
    
    return tripsRated.filter(trip =>{
      return filters.countries.indexOf(trip.country) !== -1;
    })
  }
}

@Component({
  selector: 'app-trips-list',
  standalone: true,
  imports: [SingleTripComponent, TripAdderComponent, TripFilterComponent, 
    SummaryValueComponent, ShoppingCartComponent, NavigationComponent,
    NgFor, NgStyle, FilterTripsPipe],
  providers: [FilterTripsPipe],
  templateUrl: './trips-list.component.html',
  styleUrl: './trips-list.component.css'
})
export class TripsListComponent implements OnInit{

  tripsUrl: string = "/assets/trips.json";
  trips: Trip[] = [];
  reservedTrips = new Map();
  
  cheapTrip!: Trip;
  expensiveTrip!: Trip;
  // userReservations: number = 0;
  // userReservationsValue: number = 0;

  constructor(private http: HttpClient){}

  filters = {
    minPrice: 0,
    maxPrice: 0,
    dateStart: new Date("01/01/1970"),
    dateEnd: new Date("01/01/1970"),
    rating: [0, 1, 2, 3, 4, 5],
    countries: [""]
  }

  ngOnInit(): void {
    
    this.getTrips().subscribe(res =>{
      this.trips = res;
      this.trips.forEach(trip => {
        trip.rating = 0;
        trip.availablePlaces = trip.maxPlaces;
      });
    })

    this.expensiveTrip = this.trips.reduce((prev, curr) =>{
      return curr.price > prev.price ? curr : prev;
    })
    this.cheapTrip = this.trips.reduce((prev, curr) =>{
      return curr.price > prev.price ? prev : curr;
    })

    this.setupFilters();

  }
  setupFilters(){
    this.filters.maxPrice = this.expensiveTrip.price;
    
    this.filters.dateStart = this.trips.reduce((prev, curr) =>{
      return curr.dateStart > prev.dateStart ? prev : curr;
    }).dateStart;

    this.filters.dateEnd = this.trips.reduce((prev, curr) =>{
      return curr.dateEnd > prev.dateEnd ? curr : prev;
    }).dateEnd;

    this.filters.countries = this.getCountries();
  }

  getTrips(): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.tripsUrl);
  }

  getCountries(): string[]{
    return this.trips.map(trip => trip.country).filter(function(item, pos, self){
      return self.indexOf(item) == pos;
    });
  }

  onNotifyDelete(trip: any){
    this.trips = this.trips.filter(t => t != trip);

    this.expensiveTrip = this.trips.reduce((prev, curr) =>{
      return curr.price > prev.price ? curr : prev;
    })

    this.cheapTrip = this.trips.reduce((prev, curr) =>{
      return curr.price > prev.price ? prev : curr;
    })
  }

  onNotifyReservation(event: {trip: Trip, price: number, value: number}){
    // this.userReservations += event.value;
    // this.userReservationsValue += event.price;

    if (event.value === 1){
      if (this.reservedTrips.has(event.trip)){
        this.reservedTrips.set(event.trip, this.reservedTrips.get(event.trip) + 1);
      }
      else{
        this.reservedTrips.set(event.trip, 1);
      }
    }
    else if (event.value === -1){
      if (this.reservedTrips.has(event.trip)){
        this.reservedTrips.set(event.trip, this.reservedTrips.get(event.trip) - 1);
      }
      else{
        this.reservedTrips.set(event.trip, 0)
        
      }
    }

  }

  addNewTrip(res: Trip){
    this.trips.splice(0, 0, res);
  }

  getValueOfReservations(){
    let sum = 0;
    for (let [key, value] of this.reservedTrips){
      sum += value * key.price;
    }
    return sum;
  }

  getNumOfReservations(){
    return Object.values(this.reservedTrips).reduce((acc, val) => acc + val, 0);
  }

  handleFilters(event: {id: string, value: string}){
    if (event.id === 'minPrice')
      this.filters["minPrice"] = parseInt(event.value);
    else if (event.id === 'maxPrice')
      this.filters["maxPrice"] = parseInt(event.value);
    else if (event.id === 'dateStart')
      this.filters["dateStart"] = new Date(event.value);
    else if (event.id === 'dateEnd')
      this.filters["dateEnd"] = new Date(event.value);
    // else if (event.id === 'rating'){
    //   if (this.filters["rating"].length > 5)
    //     this.filters["rating"] = [];
      
    //   const ratingValue = parseInt(event.value);

    //   if(this.filters["rating"].indexOf(ratingValue) === -1)
    //     this.filters["rating"].push(ratingValue);
    // }
    // else if (event.id === 'countries'){
    //   if (this.filters["countries"].l)
    // }
    else if (event.id === 'rating'){
      this.filters["rating"] = [];
      const ratingValue = parseInt(event.value);
      this.filters["rating"].push(ratingValue);
    }
    else if (event.id === 'countries'){
      this.filters["countries"] = [];
      this.filters["countries"].push(event.value);
    }
    
  }
}
