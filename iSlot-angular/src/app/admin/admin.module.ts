import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from "@angular/router";
import { routes } from "./admin.routes";
import { DriveregistrationComponent } from './driveregistration/driveregistration.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MultiselectDropdownModule } from "angular-2-dropdown-multiselect";
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { EventviewComponent } from './eventview/eventview.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MultiselectDropdownModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,MatTabsModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent, DriveregistrationComponent,  EventviewComponent, EventupdateComponent]


})

export class AdminModule { }
