import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Trip } from '../single-trip/trip';

@Component({
  selector: 'app-trip-adder',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './trip-adder.component.html',
  styleUrl: './trip-adder.component.css'
})
export class TripAdderComponent implements OnInit{
  formData!: FormGroup;

  @Output() notifyAdd: EventEmitter<Trip> = new EventEmitter<Trip>();
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formData = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      price: ['', Validators.required],
      maxPlaces: ['', Validators.required],
      description: ['', Validators.required],
      photoUrl: ['', Validators.required],
    });
  }

  // dataForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   country: new FormControl('', Validators.required),
  //   startDate: new FormControl('', Validators.required),
  //   endDate: new FormControl('', Validators.required)
  // })

  onFormSubmit(){
    if(this.formData.valid){
      const data = {
        name: this.formData.value.name,
        country: this.formData.value.country,
        dateStart: this.formData.value.dateStart,
        dateEnd: this.formData.value.dateEnd,
        price: this.formData.value.price,
        maxPlaces: this.formData.value.maxPlaces,
        availablePlaces: this.formData.value.maxPlaces,
        description: this.formData.value.description,
        photoUrl: "https://zenfutura.pl/wp-content/uploads/2023/04/Egipt-Piramidy-Faraon-Kair.jpg",
        rating: 0
      }

      // this.http.post("/assets/trips.json", JSON.stringify(data)).subscribe((res) =>{
      //   console.log(res);

      //   this.formData.reset();
      // })
      this.postTrip(data).subscribe((res) =>{
        console.log(res);
        this.notifyAdd.emit(data);
      });
    }
    else{
      console.log(this.formData);
    }
  }

  postTrip(trip: any){
    return this.http.post<Trip>("/assets/trips.json", trip);
  }
}
