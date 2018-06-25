import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from "@angular/router";
import { routes } from "./admin.routes";
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { EventviewComponent } from './eventview/eventview.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';

@NgModule({
  imports: [
      CommonModule,MatButtonModule, MatCheckboxModule,MatTabsModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent,  EventviewComponent, EventupdateComponent]
})
export class AdminModule { }
