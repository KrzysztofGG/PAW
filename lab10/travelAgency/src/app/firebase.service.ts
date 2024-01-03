import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  trips!: Observable<any[]>;
  constructor(private db: AngularFireDatabase){
    this.trips = this.db.list('trips').valueChanges();
  }
}
