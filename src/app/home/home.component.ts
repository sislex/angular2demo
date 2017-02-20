import { Component, OnInit } from '@angular/core';
// import { ListComponent } from './list/list.component';
// import { UserLists } from './../models/list';
import { AlertService, AuthenticationService } from '../services/index';
import { Router } from '@angular/router';


@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // providers: [UserLists]
})
export class HomeComponent implements OnInit {

  constructor(
      private authenticationService: AuthenticationService,
      private router: Router
  ) { }

  ngOnInit() {
    if(!this.authenticationService.user){
      this.router.navigate(['/login']);
    }
  }

}
