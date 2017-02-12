import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  constructor() { }

  public login(username, password): Promise<boolean> {
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }

  public logout() {
    // localStorage.removeItem('currentUser');
  }
}
