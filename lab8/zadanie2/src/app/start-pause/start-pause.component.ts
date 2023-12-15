import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-start-pause',
  standalone: true,
  imports: [],
  templateUrl: './start-pause.component.html',
  styleUrl: './start-pause.component.css'
})
export class StartPauseComponent {
  @Output() notifyStart: EventEmitter<void>  = new EventEmitter<void>();
  @Output() notifyPause: EventEmitter<void>  = new EventEmitter<void>();

  onClickStart(){
    this.notifyStart.emit();
  }
  onClickPause(){
    this.notifyPause.emit();
  }  
}
