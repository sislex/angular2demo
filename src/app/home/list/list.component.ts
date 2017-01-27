import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-lists',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  user_lists = [];
  u_list = {
    title: 'My list',
    title_changed: false,
    items: []
  };

  addListItem() {
    this.u_list.items.push('My new item');
  }

  changeListTitle() {
    this.u_list.title_changed = !this.u_list.title_changed;
    setTimeout(function () {
      this.setFocus();
    }.bind(this), 0);
  }

  public focusTrigger = new EventEmitter<boolean>();
  setFocus() {
    this.focusTrigger.emit(true);
  }
}
