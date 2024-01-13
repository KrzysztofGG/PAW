import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { TripsService } from '../services/trips.service';
import { Trip } from '../trip';
import { TripRatingComponent } from '../trip-rating/trip-rating.component';
import { FormsModule } from '@angular/forms';
import { ReviewsComponent } from '../reviews/reviews.component';
import { NgIf, NgStyle } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-single-trip-page',
  standalone: true,
  imports: [TripRatingComponent, FormsModule, NgIf,
    ReviewsComponent, NgStyle, RouterModule, RouterOutlet],
  templateUrl: './single-trip-page.component.html',
  styleUrl: './single-trip-page.component.css'
})
export class SingleTripPageComponent implements OnInit{

  trip!: Trip;
  selectedCurrency: string = 'PLN';
  plnToEuro: number = 0.23;
  plnToDollar: number = 0.25;
  
  priceToShow!: number;

  constructor(private route: ActivatedRoute, 
    private tripsService: TripsService,
    private cartService: CartService){}

  ngOnInit(): void {
    const _id = String(this.route.snapshot.paramMap.get('id'));
    this.trip = this.tripsService.trips.filter(t => t._id === _id)[0];
    this.priceToShow = this.trip.price;
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
  onPlusClick(){
    if(this.trip.availablePlaces > 0){
      this.trip.availablePlaces--;
      this.cartService.addItemToCart(this.trip);
    }
  }
  onMinusClick(){
    if(this.trip.availablePlaces < this.trip.maxPlaces){
      this.trip.availablePlaces++;
      this.cartService.removeItemFromCart(this.trip);
    }
  }
 
}
