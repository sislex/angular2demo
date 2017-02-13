// import { EventEmitter } from '@angular/core';

export class List {
    id: number = 0;
    title: string = 'My list';
    items: Array<Item> = [];
    
    constructor(id: number) {
        this.id = id;
    }
    
    isNewTitle: boolean = false;
    isNewListItem: boolean = false;

    addItem = function (item: Item) {
        this.items.push(item);
    }

    updateTitle = function (title: string) {
        this.title = title;
    }
    
}

export class Item {
    text: string = '';
    completed: boolean = false;
}