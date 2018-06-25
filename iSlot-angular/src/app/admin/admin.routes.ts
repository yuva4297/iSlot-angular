import { Route } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DriveregistrationComponent } from "./driveregistration/driveregistration.component";
import { EventviewComponent } from "./eventview/eventview.component";

export const routes: Route[] = [
   {
       path: '',
       component: DashboardComponent
   },
   {
    path: 'driveregistration',
    component:  DriveregistrationComponent
},
{
       path: 'eventview',
       component: EventviewComponent
   }
 
]