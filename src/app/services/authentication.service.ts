import { Injectable } from '@angular/core';
import { Http }   from '@angular/http';
import { Response} from '@angular/http';

import { User } from '../models/index';

@Injectable()
export class AuthenticationService {
  public data: Response = null;
  public user: User = null;

  constructor(private http: Http) { }

  public login(username, password): Promise<User> {
    return new Promise((resolve)=>{
      setTimeout(() => {
        if(username == 1 && password == 1){

          this.http.get('user.json').subscribe((data: Response) => {
            this.user = data.json();
            resolve(this.user);
          });
        }else{
          resolve(false);
        }

      }, 2000);
    });
  }

  public logout() {
    // localStorage.removeItem('currentUser');
  }
}
