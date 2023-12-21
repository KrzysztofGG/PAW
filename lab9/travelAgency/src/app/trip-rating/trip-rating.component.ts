import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-trip-rating',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './trip-rating.component.html',
  styleUrl: './trip-rating.component.css'
})
export class TripRatingComponent {
  // stars = document.getElementsByClassName("fa-star");
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  @Output() notifyRating: EventEmitter<number> = new EventEmitter<number>();

  countStar(star: number){
    this.selectedValue = star;
    this.notifyRating.emit(this.selectedValue);
  }

  addClass(star: number){
    let ab = "";
    for(let i = 0; i < star; ++i){
      ab = "starId" + i;
      document.getElementById(ab)?.classList.add("selected");
    }
  }
  removeClass(star: number){
    let ab = "";
    for (let i = star-1; i>= this.selectedValue; i--){
      ab = "starId" + i;
      document.getElementById(ab)?.classList.remove("selected");
    }
  }


  // rating(stars: any): void{
  //   const starClassActive = "fa fa-star checked";
  //   const starClassInactive = "fa fa-star";
  //   const starsLength = stars.length;
  //   let i;
  //   stars.map((star: any) =>{
  //     star.onclick = () => {
  //       i = stars.indexOf(star);

  //       if(star.className === starClassInactive){
  //         for(i; i>= 0; --i) stars[i].className = starClassActive;
  //       }
  //       else{
  //         for(i; i<starsLength; ++i) stars[i].className = starClassInactive;
  //       }
  //     };
  //   });
  // }
}
