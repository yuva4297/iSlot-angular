import { Route } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EventviewComponent } from "./eventview/eventview.component";

export const routes: Route[] = [
   {
       path: '',
       component: DashboardComponent
   },
   {
       path: 'eventview',
       component: EventviewComponent
   }
 
]