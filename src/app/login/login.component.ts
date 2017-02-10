import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../services/index';


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
    .then(data => {
        if(data){
          console.log('login: true');
          this.alertService.error('123');
        }else{
          this.alertService.error('123');
        }
          this.loading = false;
        this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log('login: true');
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
