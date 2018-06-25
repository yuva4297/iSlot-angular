import { Route } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DriveregistrationComponent } from "./driveregistration/driveregistration.component";

export const routes: Route[] = [
   {
       path: '',
       component: DashboardComponent
   },
   {
    path: 'driveregistration',
    component:  DriveregistrationComponent
},

]