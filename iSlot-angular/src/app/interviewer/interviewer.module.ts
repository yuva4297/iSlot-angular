import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerDashboardComponent } from './interviewer-dashboard/interviewer-dashboard.component';
import { RouterModule } from "@angular/router";
import { routes } from "./interviewer.routes";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [InterviewerDashboardComponent]
})
export class InterviewerModule { }
