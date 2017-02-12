import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-lists',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  private user_lists = [];
  private u_list = {
    id: 0,
    title: 'My list',
    items: []
  };

  private lastListId = 0;
  private isNewTitle = false;
  private isNewListItem = false;
  private newListItem = '';
  private currentListTitle = '';

  addNewList() {
    let list = {};
    for (let k in this.u_list) {
      list[k] = this.u_list[k];
    }

    list['id'] = this.lastListId + 1;
    this.user_lists.push(list);
    this.lastListId = this.lastListId + 1;
    console.log(this.user_lists);
  }

  showUpdateTitleInput(id) {
    for (let list in this.user_lists) {
      if (list['id'] == id) {
        this.currentListTitle = list['title'];
      }
      this.isNewTitle = !this.isNewTitle;
      setTimeout(function () {
        this.setFocus();
      }.bind(this), 0);
    }

    // this.currentListTitle = this.user_lists[0].title;
    // this.isNewTitle = !this.isNewTitle;
    // setTimeout(function () {
    //   this.setFocus();
    // }.bind(this), 0);
  }

  updateTitle(id) {
    for (let list in this.user_lists) {
      if (!this.u_list.title.trim() && list['id'] == id) {
        list['title'] = this.u_list.title;
      }
    }
    // if (!this.u_list.title.trim()) {
    //   this.u_list.title = this.currentListTitle
    // }
    this.isNewTitle = false;
  }

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

  showUpdateListItemInput() {
    
  }

  public focusTrigger = new EventEmitter<boolean>();
  setFocus() {
    this.focusTrigger.emit(true);
  }
}
