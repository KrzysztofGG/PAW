import { Component } from '@angular/core';
import { ResetComponent } from '../reset/reset.component';
import { StartPauseComponent } from '../start-pause/start-pause.component';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [ResetComponent, StartPauseComponent],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  time: number = 0;
  display = "00:00";
  interval;
  isPaused: boolean = false;
  onNotifyStartClicked(){
    if(this.isPaused)
      this.isPaused = false;

    if(this.interval)
      clearInterval(this.interval);

    this.interval = setInterval(() =>{
      if(!this.isPaused){
        this.time++;
        this.display = this.transform(this.time);
      }
    }, 1000);
  }
  transform(value: number): string{
    const minutes: number = Math.floor(value/60);
    let output: string = "";
    if (minutes < 10)
      output = '0' + minutes
    const seconds = value - minutes * 60;
    if (seconds < 10)
      output += ':' + '0' + seconds;
    else
      output += ':' + seconds;

    return output;
  }

  onNotifyPauseClicked(){
    this.isPaused = true;
  }

  onNotifyResetClicked(){
    this.isPaused = false;
    clearInterval(this.interval);
    this.time = 0;
    this.display = "00:00";
  }
}
