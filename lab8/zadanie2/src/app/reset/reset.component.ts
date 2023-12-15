import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent {
  @Output() notifyReset: EventEmitter<void> = new EventEmitter<void>();
  
  onClickReset(){
    this.notifyReset.emit();
  }
}
