import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RouterModule } from "@angular/router";
import { routes } from "./registration.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LandingPageComponent]
})
export class RegistrationModule { }
