import { Component } from '@angular/core';
import { ColorsChildComponent } from '../colors-child/colors-child.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-colors-collection',
  standalone: true,
  imports: [ColorsChildComponent, NgStyle],
  templateUrl: './colors-collection.component.html',
  styleUrl: './colors-collection.component.css'
})
export class ColorsCollectionComponent {
  colors: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  currentColor: string = "white";

  setChosenColor(color: string){
    this.currentColor = color;
  }

}
