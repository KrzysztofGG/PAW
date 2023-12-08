import { Component } from '@angular/core';
import { NgClass, NgForOf, NgIf , NgStyle} from '@angular/common';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [NgForOf, NgIf, NgStyle, NgClass],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  countries: string[] = [];
  

  // onSubmit(event: Event){
  //   console.log(event);
  //   // new_country: string = event.new_country.text;
  // }
  addCountry(country: string){
    
    console.log(country);
    if (country.length > 0 && !this.countries.includes(country))
      this.countries.push(country);
  }
  deleteCountry(country: string){
    this.countries = this.countries.filter( c => c != country);
  }
  getBgColor(country: string){
    let index: number = this.countries.indexOf(country);
    let bg: string | any = '{\'background-color\':';
    if (index % 2 == 0)
      if(country.includes('r') || country.includes('a'))
        bg += 'blue';
      else
        bg += 'yellow';
    else
      if (country.length > 6)
        bg += 'orange';
      else
        bg += 'gray';
    bg += '}';
    console.log(bg)
    return bg;
  }
}