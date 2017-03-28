/**
 * Created by sislex on 2/19/17.
 */
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<button (click)="change(true)">+</button>
               <button (click)="change(false)">-</button>`
})
export class ChildComponent{

    @Output() onChanged = new EventEmitter<boolean>();
    change(increased) {
        this.onChanged.emit(increased);
    }
}


@Component({
    selector: 'my-app',
    template: `<h2>Количество кликов: {{clicks}}</h2>
              <child-comp (onChanged)="onChanged($event)"></child-comp>`
})
export class AppComponent {

    clicks:number = 0;
    onChanged(increased){
        increased==true?this.clicks++:this.clicks--;
    }
}