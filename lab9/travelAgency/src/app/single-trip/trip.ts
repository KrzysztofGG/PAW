import { max } from "rxjs";

export class Trip {
    name: string;
    country: string;
    dateStart: Date;
    dateEnd: Date;
    price: number;
    maxPlaces: number;
    availablePlaces: number;
    description: string;
    photoUrl: string;
    rating: number;
    
    constructor(name: string, country: string, dateStart: Date, dateEnd: Date,
        price: number, maxPlaces: number, description: string, photoUrl: string){
            this.name = name;
            this.country = country;
            this.dateStart = dateStart;
            this.dateEnd = dateEnd;
            this.price = price;
            this.maxPlaces = maxPlaces;
            this.availablePlaces = maxPlaces;
            this.description = description;
            this.photoUrl = photoUrl;
            this.rating = 0;
        }
}
