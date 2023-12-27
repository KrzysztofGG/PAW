
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trip } from './trip';
import { NgClass, NgIf, NgStyle, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripRatingComponent } from '../trip-rating/trip-rating.component';
import { CartService } from '../cart.service';
import { TripsService } from '../trips.service';


@Component({
  selector: 'app-single-trip',
  standalone: true,
  imports: [NgIf, NgStyle, NgClass, FormsModule, UpperCasePipe, TripRatingComponent],
  templateUrl: './single-trip.component.html',
  styleUrl: './single-trip.component.css'
})
export class SingleTripComponent implements OnInit{

  @Input() trip!: Trip;
  // @Input() isCheap!: boolean;
  // @Input() isExpensive!: boolean;

  // @Output() notifyDelete: EventEmitter<Trip> = new EventEmitter<Trip>();
  // @Output() notifyReservation: EventEmitter<any> = new EventEmitter<any>();

  selectedCurrency: string = 'PLN';
  plnToEuro: number = 0.23;
  plnToDollar: number = 0.25;
  
  priceToShow!: number;

  constructor(private tripsService: TripsService, private cartService: CartService){}
  // availableSpots!: number;
  ngOnInit(): void {
    // if(this.trip != undefined)
      // this.availableSpots = this.trip.maxPlaces;
    this.priceToShow = this.trip.price;
  }

  onPlusClick(){
    if(this.trip.availablePlaces > 0){
      this.trip.availablePlaces--;

      // var priceToSend = this.trip.price;
      // if(this.selectedCurrency === "&#8364")
      //   priceToSend = priceToSend /this.plnToEuro
      // else if(this.selectedCurrency === "$")
      //   priceToSend = priceToSend /this.plnToDollar;

      // this.notifyReservation.emit({trip: this.trip, price: priceToSend, value: 1});
      this.cartService.addItemToCart(this.trip);
    }
  }
  onMinusClick(){
    if(this.trip.availablePlaces < this.trip.maxPlaces){
      this.trip.availablePlaces++;

      // var priceToSend = this.trip.price;
      // if(this.selectedCurrency === "&#8364")
      //   priceToSend = priceToSend /this.plnToEuro
      // else if(this.selectedCurrency === "$")
      //   priceToSend = priceToSend /this.plnToDollar;

      // this.notifyReservation.emit({trip: this.trip, price: -priceToSend, value: -1});
      this.cartService.removeItemFromCart(this.trip);

    }
  }
  getClassNames(){
    if(this.trip === this.tripsService.expensiveTrip){
      return 'border border-4 border-success';
    }
    else if (this.trip === this.tripsService.cheapTrip){
      return 'border border-4 border-danger'
    }
    else{
      return '';
    }
  }
  onSelectChange(value: any){
    if(value === '$'){
      this.priceToShow = this.trip.price * this.plnToDollar;
    }
    else if(value === "&#8364"){
      this.priceToShow = (this.trip.price * this.plnToEuro)
    }
    else if(value === "PLN"){
      this.priceToShow = this.trip.price;
    }
  }

  onDelete(trip: Trip): void{
    this.tripsService.deleteTrip(trip.id);
  }

  handleRating(rating: number){
    this.trip.rating = rating;
  }
}
