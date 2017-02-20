import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AlertModule } from 'ng2-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './home/list/list.component';
import { FocusElementDirective } from './focus-element.directive';
import { User } from './models/index';

import { AlertService, AuthenticationService } from './services/index';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  //declarations: классы представлений (view classes), которые принадлежат модулю. Angular имеет три типа классов представлений: компоненты (components), директивы (directives), каналы (pipes)
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ListComponent,
    FocusElementDirective,
    AlertComponent,
    FocusElementDirective,
    AlertComponent
  ],
  //imports: другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  //roviders: классы, создающие сервисы, используемые модулем
  providers: [
    AuthenticationService,
    AlertService,
    User
  ],
  //bootstrap: корневой компонент, который вызывается по умолчанию при загрузке приложения
  bootstrap: [AppComponent]
})
export class AppModule { }
