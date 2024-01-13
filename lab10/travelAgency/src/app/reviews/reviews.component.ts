import { Component, Input, ViewChild } from '@angular/core';
import { Trip, TripReview } from '../trip';
import { TripsService } from '../services/trips.service';
import { FormsModule, NgForm } from '@angular/forms';
import { TripRatingComponent } from '../trip-rating/trip-rating.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [FormsModule, TripRatingComponent, NgIf, NgFor],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

  @Input() trip!: Trip;
  @ViewChild('reviewForm') form!: NgForm;
  rating: number = 0;

  constructor(private tripsService: TripsService){}

  onSubmit(): void {
    if (!this.form.valid) {
      this.form.controls['nick'].markAsTouched();
      this.form.controls['description'].markAsTouched();
      return;
    }
    
    let newReview: TripReview = {
      author: this.form.value['nick'],
      rating: this.rating,
      comment: this.form.value['description'],
      // date: this.form.value['date']
    }
    let date = this.form.value['date'];
    if (date != null && date != "")
      newReview.date = date;
      
    this.tripsService.addReview(this.trip, newReview);
    console.log(newReview);

    // this.form.reset();
  }

  updateRating(newRating: number): void {
    this.rating = newRating;
  }

}
