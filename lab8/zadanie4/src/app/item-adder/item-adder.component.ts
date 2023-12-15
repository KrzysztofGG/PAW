import { Component, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../shopping-list/list-item.model';


@Component({
  selector: 'app-item-adder',
  standalone: true,
  imports: [],
  templateUrl: './item-adder.component.html',
  styleUrl: './item-adder.component.css'
})
export class ItemAdderComponent {

  @Output() notifyNewItem = new EventEmitter<ListItem>();

  addNewItem(itemText: string, isImportant: boolean){
    let listItem = new ListItem(isImportant, itemText, false)
    this.notifyNewItem.emit(listItem);
  }
}
