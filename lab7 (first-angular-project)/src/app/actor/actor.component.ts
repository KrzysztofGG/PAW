import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent {
    firstName: string = "John";
    lastName: string = "Doe";
    title: string = "Bladerunner";

    onSubmit(e: any){
      this.firstName = e.target.firstName.value
      this.lastName = e.target.lastName.value
      this.title = e.target.title.value
      // console.log();
    }
}
