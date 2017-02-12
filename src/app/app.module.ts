import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './home/list/list.component';
import { FocusElementDirective } from './focus-element.directive';
import { VideoComponent } from './video/video.component';

import { AlertService, AuthenticationService } from './services/index';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ListComponent,
    FocusElementDirective,
    AlertComponent,
    FocusElementDirective,
    VideoComponent
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthenticationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
