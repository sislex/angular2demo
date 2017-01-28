import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-lists',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  private isNewTitle = false;
  private isNewListItem = false;
  private newListItem = '';
  private currentListTitle = '';

  // user_lists = [];

  private u_list = {
    title: 'My list',
    items: []
  };

  showNewListItemInput() {
    this.newListItem = '';
    this.isNewListItem = true;
    setTimeout(function () {
      this.setFocus();
    }.bind(this), 0);
  }

  addNewListItem() {
    if (this.newListItem.trim()) {
      this.u_list.items.push(this.newListItem);
    }
    this.isNewListItem = false;
  }

  showUpdateTitleInput() {
    this.currentListTitle = this.u_list.title;
    this.isNewTitle = !this.isNewTitle;
    setTimeout(function () {
      this.setFocus();
    }.bind(this), 0);
  }
  
  updateTitle() {
    if (!this.u_list.title.trim()) {
      this.u_list.title = this.currentListTitle
    }
    this.isNewTitle = false;
  }

  public focusTrigger = new EventEmitter<boolean>();
  setFocus() {
    this.focusTrigger.emit(true);
  }
}
