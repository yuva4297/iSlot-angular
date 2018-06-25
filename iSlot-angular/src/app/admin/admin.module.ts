import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from "@angular/router";
import { routes } from "./admin.routes";
import { DriveregistrationComponent } from './driveregistration/driveregistration.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MultiselectDropdownModule } from "angular-2-dropdown-multiselect";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MultiselectDropdownModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent, DriveregistrationComponent,]
})
export class AdminModule { }
