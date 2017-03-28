/**
 * Created by sislex on 2/19/17.
 */
import { Input, Component} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Имя пользователя: {{userName}}</p>
              <p>Возраст пользователя: {{userAge}}</p>`
})
export class ChildComponent{
    @Input() userName: string;
    @Input() userAge: number;
}

@Component({
    selector: 'my-app',
    template: `<child-comp [userName]="name" [userAge]="age"></child-comp>
                <input type="text" [(ngModel)]="name" />`
})
export class AppComponent {
    name:string="Tom";
    age:number = 24;
}