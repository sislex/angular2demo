import { Component, EventEmitter } from '@angular/core';
import { User } from './../../models/index';

@Component({
  selector: 'user-lists',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  constructor(private user: User) {
  }

  private newListItem: string = '';
  private currentListTitle: string = '';
  
  addNewList() {
    let id = this.user.getNewListId();
    this.user.addList(id);
  }

  showUpdateTitleInput(listId: number) {
    for (let list of this.user.lists) {
      if (list.id == listId) {
        this.currentListTitle = list.title;
        list.isNewTitle = !list.isNewTitle;
        setTimeout(function () {
          this.setFocus();
        }.bind(this), 200);
      }
    }
  }

  updateTitle(listId: number) {
    for (let list of this.user.lists) {
      if (list.id == listId && !list.title.trim()) {
        list.title = this.currentListTitle;
        list.isNewTitle = false;
      } else {
        list.isNewTitle = false;
      }
    }
  }

  showNewListItemInput(listId: number) {
    this.newListItem = '';
    for (let list of this.user.lists) {
      if (list.id == listId) {
        list.isNewListItem = true;
        setTimeout(function () {
          this.setFocus();
        }.bind(this), 0);
      }
    }
  }

  addNewListItem(listId: number) {
    for (let list of this.user.lists) {
      if (list.id == listId && this.newListItem.trim() != '') {
        list.items.push({text: this.newListItem, completed: false})
        list.isNewListItem = false;
      } else {
        list.isNewListItem = false;
      }
    }
  }

  showUpdateListItemInput() {
    // TODO: add list item update function
  }
  
  public focusTrigger = new EventEmitter<boolean>();
  setFocus() {
    this.focusTrigger.emit(true);
  }
}
