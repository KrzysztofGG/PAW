import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from './app.routes';


@NgModule({
  imports: [ 
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AppRoutingModule,
    AngularFireDatabaseModule    
],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }