import { NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ItemAdderComponent } from '../item-adder/item-adder.component';
import { ListItem } from './list-item.model';
import { ItemListService } from '../item-list.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [NgIf, NgFor, ItemAdderComponent],
  providers: [ItemListService],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  isAdding: boolean = false;

  randomShoppingItems: ListItem[] = [];
  restShoppingItems: ListItem[] = [];

  constructor(private itemListService: ItemListService){
    this.randomShoppingItems = itemListService.getRandomShoppingItems();
    this.restShoppingItems = itemListService.getRestOfItems();
  }
  addNewItem(listItem: ListItem){
    this.randomShoppingItems.unshift(listItem);
  }
}
