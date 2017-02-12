import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AlertService {
  public message: Object = null;

  constructor(private router: Router) {
  }

  success(message: string) {
    this.message = { type: 'success', text: message };
  }

  error(message: string) {
    this.message = { type: 'error', text: message };
    // console.log(123);
  }
}
