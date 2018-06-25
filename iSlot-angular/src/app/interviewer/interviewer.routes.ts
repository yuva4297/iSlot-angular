import { Route } from "@angular/router/router";
import { InterviewerDashboardComponent } from "./interviewer-dashboard/interviewer-dashboard.component";
import { EnrollmentComponent } from './enrollment/enrollment.component';
export const routes: Route[] = [
   
    {
        path: '',
        component: InterviewerDashboardComponent
    },
    {
        path: 'enrollment',
        component: EnrollmentComponent
    }
 ]
