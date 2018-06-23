import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from "@angular/router";
import { routes } from "./admin.routes";
import { DriveregistrationComponent } from './driveregistration/driveregistration.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent, DriveregistrationComponent,]
})
export class AdminModule { }
