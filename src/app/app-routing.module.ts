import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { VideoComponent } from './video/video.component';


const ROUTES: Routes = [
  { path: '',           component: HomeComponent },
  { path: 'profile',    component: ProfileComponent },
  { path: 'video',      component: VideoComponent },
  { path: 'login',      component: LoginComponent },
  { path: '**',         component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


