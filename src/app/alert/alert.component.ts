import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/index';

@Component({
  moduleId: module.id,
  selector: 'alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent {
  private get message(){
    if(this.alertService.message){
      this.removeMessage();
    }
    return this.alertService.message;
  }

  constructor(private alertService: AlertService) {}

  private removeMessage(){
    setTimeout(()=>{
      this.alertService.message = null;
    }, 7000);
  }
}
