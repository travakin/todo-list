import { Component, OnInit } from '@angular/core';
import { ListItem } from '../ListItem';
import {ITEMS} from "../mock-items";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = ITEMS;
  newContent: string = "";
  selectedItem: ListItem;

  onSelect(item: ListItem) : void{

    this.selectedItem = item;
  }

  onComplete(item: ListItem) : void{

    item.isDone = !item.isDone;
  }

  onDelete(item : ListItem) : void{

    for(var i : number = 0; i < this.items.length; i++){

      if(this.items[i].id == item.id){

        this.items.splice(i, 1);
        break;
      }
    }

    this.selectedItem = null;
  }

  onAdd(newContent: string) : void{

    var newItem: ListItem = {id: this.items.length + 1, isDone: false, show : true, content: newContent}
    this.items.push(newItem);
  }

  onShowAll() : void{

    this.items.forEach(item =>{

      item.show = true;
    });
  }

  onOrderAlphabet() : void{

    this.items.sort((item1, item2) => {

      if(item1.content > item2.content)
        return 1;
      if(item2.content > item1.content)
        return -1;

      return 0;
    });
  }

  onOrderAlphabetReverse() : void{

    this.items.sort((item1, item2) => {

      if(item1.content < item2.content)
        return 1;
      if(item2.content < item1.content)
        return -1;

      return 0;
    });
  }

  onHideComplete() : void{

    this.items.forEach(item => {
      
      if(item.isDone)
        item.show = false;
    });
  }

  constructor() { }

  ngOnInit() {
  }

}


