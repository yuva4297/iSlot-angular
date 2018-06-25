import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerDashboardComponent } from './interviewer-dashboard/interviewer-dashboard.component';
import { RouterModule } from "@angular/router";
import { routes } from "./interviewer.routes";
import { EnrollmentComponent } from './enrollment/enrollment.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [InterviewerDashboardComponent, EnrollmentComponent]
})
export class InterviewerModule { }
