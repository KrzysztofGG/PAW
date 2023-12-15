import { Injectable } from '@angular/core';
import { ListItem } from './shopping-list/list-item.model';
@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  shoppingItems: ListItem[] = [
    new ListItem(false, "mleko", false),
    new ListItem(true, "10 jajek", false),
    new ListItem(false, "100g czkolada", false),
    new ListItem(true, "20kg jabłek", false),
    new ListItem(false, "2 bułeczki", true),
    new ListItem(false, "10 jogurtów", true)
  ];

  getShoppingItems(){
    return this.shoppingItems;
  }
  getRandomShoppingItems(){
    let randomItems: ListItem[] = [];
    for(let i=0; i<=this.shoppingItems.length/2; ++i){
      let randomIndex = Math.floor(Math.random() * this.shoppingItems.length);
      randomItems.push(this.shoppingItems[randomIndex]);
      this.shoppingItems.splice(randomIndex, 1);
    }
    return randomItems;
  }
  getRestOfItems(){
    return this.shoppingItems;
  }
  constructor() { }
}
