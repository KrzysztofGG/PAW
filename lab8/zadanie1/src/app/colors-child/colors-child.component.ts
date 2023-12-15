import { NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
// import {  } from 'stream';

@Component({
  selector: 'app-colors-child',
  standalone: true,
  imports: [NgFor],
  templateUrl: './colors-child.component.html',
  styleUrl: './colors-child.component.css'
})
export class ColorsChildComponent {
  @Input() colors: string[];
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick( value: string){
    this.notify.emit(value);
  }
}
