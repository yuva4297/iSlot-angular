import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerDashboardComponent } from './interviewer-dashboard/interviewer-dashboard.component';
import { RouterModule } from "@angular/router";
import { routes } from "./interviewer.routes";
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { HeaderComponent } from '../islot-common/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InterviewerDashboardComponent, EnrollmentComponent, HeaderComponent]
})
export class InterviewerModule { }
