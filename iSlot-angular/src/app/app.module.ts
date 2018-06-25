import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from "./app.routes";
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
