import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from "@angular/router";
import { routes } from "./admin.routes";
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';

import { EventviewComponent } from './eventview/eventview.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';

@NgModule({
  imports: [
    CommonModule,MatButtonModule, MatCheckboxModule,   MatFormFieldModule,
    MatInputModule,MatTabsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent,  EventviewComponent, EventupdateComponent]
})
export class AdminModule { }
