import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { routes } from "./app.routes";
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CommonService } from "./islot-common/common.service";
import { Http, HttpModule } from "@angular/http";
import { RegistrationService } from './registration/registration.service';
import { AdminService } from './admin/admin.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDMqATKNGPRrZ0K-dgfKYg74ziXIv_Xs7I',
  authDomain: 'islot-angular.firebaseapp.com',
  databaseURL: 'https://islot-angular.firebaseio.com',
  projectId: "islot-angular",
  storageBucket: "islot-angular.appspot.com",
  messagingSenderId: "957310493987"
};
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    MultiselectDropdownModule,
    // 
    
    AngularFireDatabaseModule,
    HttpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  
  providers: [CommonService, RegistrationService, AdminService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
