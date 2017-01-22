import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-lists',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user_lists = [];
  u_list = {
    list_title: '',
    list_items: []
  };

  addNewListItem() {
    this.u_list.list_items.push('my new item');
  }
}
