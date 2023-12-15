import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent {
  @Output() notify: EventEmitter<{head: string, text: string}> = new EventEmitter<{head: string, text: string}>();

  onClickLearn(head: string, text:string){
    this.notify.emit({head: head, text: text});
  }
}
