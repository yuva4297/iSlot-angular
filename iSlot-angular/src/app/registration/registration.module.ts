import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RouterModule } from "@angular/router";
import { routes } from "./registration.routes";
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';
import { RegisterInterviewerComponent } from './pages/register-interviewer/register-interviewer.component';
import { LoginComponent } from './pages/login/login.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: 'AIzaSyDMqATKNGPRrZ0K-dgfKYg74ziXIv_Xs7I',
  authDomain: 'islot-angular.firebaseapp.com',
  databaseURL: 'https://islot-angular.firebaseio.com',
  projectId: "islot-angular",
  storageBucket: "islot-angular.appspot.com",
  messagingSenderId: "957310493987"
};
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    HttpModule,

    AngularFireModule.initializeApp(firebaseConfig),

    RouterModule.forChild(routes)
  ],
  declarations: [LandingPageComponent, RegisterAdminComponent, RegisterInterviewerComponent, LoginComponent]
})
export class RegistrationModule { }
