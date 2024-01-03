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
    imageSources: string[];
    ratings: number[];
    reviews: TripReview[];
    
    constructor(id: number=0, name: string, country: string, dateStart: Date, dateEnd: Date,
        price: number, maxPlaces: number, description: string, imageSources: string[]){
            this.id = id;
            this.name = name;
            this.country = country;
            this.dateStart = dateStart;
            this.dateEnd = dateEnd;
            this.price = price;
            this.maxPlaces = maxPlaces;
            this.availablePlaces = maxPlaces;
            this.description = description;
            this.imageSources = imageSources;
            this.ratings = [];
            this.reviews = [];
        }
}

export interface TripReview {
    author: string,
    rating: number,
    comment: string,
    date?: string
}
