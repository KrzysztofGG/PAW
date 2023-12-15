import { Component } from '@angular/core';
import { TopicComponent } from '../topic/topic.component';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [TopicComponent],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  topic_header: string = "";
  topic_text: string = "";

  
  onNotifyClicked(values: {head: string, text: string}){
    this.topic_header = values.head;
    this.topic_text = values.text;
  }
}
