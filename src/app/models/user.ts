import {List} from './list';

export interface UserInterface {
    id: number;
    username: string;
    password: string;
    name: string;
}

export class User implements UserInterface {
    id: number;
    username: string;
    password: string;
    name: string;
    
    lists: List[] = [];

    addList = function (id: number) {
        this.lists.push(new List(id));
    }

    removeList = function (list: List) {
        let listIndex : number = this.lists.indexOf(list, 0);
        this.lists.splice(listIndex, 1);
    }

    getNewListId = function () {
        let id: number = 0;
        if (this.lists.length) {
            id = this.lists[this.lists.length - 1].id + 1;
        }
        return id;
    }
}