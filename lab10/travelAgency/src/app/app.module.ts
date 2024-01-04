import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  imports: [ 
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
],
  declarations: [ 
    AppComponent, 
    // NavigationComponent

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }