import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-lists',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  public isNewTitle = false;
  public isNewListItem = false;
  public listItem = '';
  
  user_lists = [];
  u_list = {
    title: 'My list',
    items: []
  };

  showNewListItemInput() {
    this.isNewListItem = true;
    setTimeout(function () {
      this.setFocus();
    }.bind(this), 0);
  }


  addNewListItem() {
    if (this.listItem) {
      this.u_list.items.push(this.listItem);
      this.listItem = '';
    }
    this.isNewListItem = false;
  }

  changeTitle() {
    this.isNewTitle = !this.isNewTitle;
    setTimeout(function () {
      this.setFocus();
    }.bind(this), 0);
  }

  public focusTrigger = new EventEmitter<boolean>();
  setFocus() {
    this.focusTrigger.emit(true);
  }
}
