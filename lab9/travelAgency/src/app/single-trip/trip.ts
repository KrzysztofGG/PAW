import { max } from "rxjs";

export class Trip {
    id: number;
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
    
    constructor(id: number=0, name: string, country: string, dateStart: Date, dateEnd: Date,
        price: number, maxPlaces: number, description: string, photoUrl: string){
            this.id = id;
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
