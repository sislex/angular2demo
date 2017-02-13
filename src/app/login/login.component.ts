import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../services/index';
import { User } from '../models/index';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
    .then((user: User) => {
        if(user){
          this.alertService.success('Добро пожаловать ' + user.name);
          this.router.navigate([this.returnUrl]);
        }else{
          this.alertService.error('Ошиблись логином или паролем');
        }
          this.loading = false;

      },
      error => {
        console.log('login: true');
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
