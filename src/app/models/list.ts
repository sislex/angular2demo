export class List {
    id: number = 0;
    title: string = 'My list';
    items: Array<Item> = [];

    isNewTitle: boolean = false;
    isNewListItem: boolean = false;

    constructor(id: number) {
        this.id = id;
    }

    updateTitle = function (title: string) {
        this.title = title;
    }

    addItem = function (item: Item) {
        this.items.push(item);
    }
    
    removeItem = function (item: Item) {
        let itemIndex : number = this.items.indexOf(item, 0);
        this.items.splice(itemIndex, 1);
    }

    toggleCompleteItem = function (item: Item) {
        // TODO: write complete list item function
        item.completed = !item.completed;
        console.log('item completed status: ', item.completed);
    }
}

export class Item {
    text: string = '';
    completed: boolean = false;
}