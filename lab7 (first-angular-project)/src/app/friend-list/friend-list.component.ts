import { Component } from '@angular/core';
import { Friend } from './friend.model';
import { NgForOf, NgIf } from '@angular/common';
@Component({
  selector: 'app-friend-list',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './friend-list.component.html',
  styleUrl: './friend-list.component.css'
})
export class FriendListComponent {

  friends: Friend[];

  constructor(){

    this.friends = [
      new Friend("Adam Malysz",
      "123123123",
      "adammalysz@gmail.com"),
      new Friend("John Doe",
      "1111111",
      "test@mail.com"),
      new Friend("Ala kot",
      "66666",
      "alakot@wp.pl"),
      new Friend("Driver drive",
      "217772134",
      "ryangossling@interia.pl"),
      new Friend("Jurij Urbanov",
      "777123123",
      "jurijurb@gmail.com"),
      new Friend("Osama Obama",
      "911911911",
      "binbarack@xd.pl")
    ]
    console.log(this.friends);
  }
  handleDetails(element: any, friend: Friend){
    if(!element.target) return;

    friend.details = !friend.details; 
    if (element.target.innerHTML.includes("Show"))
      element.target.innerHTML = "Hide details";
    else
      element.target.innerHTML = "Show details";
    console.log(element);
  }
}
