
import { Route } from "@angular/router";

export const routes: Route[] = [
    {
        path: 'interviewer',
        loadChildren: 'app/interviewer/interviewer.module#InterviewerModule'
    },
    {
        path: '',
        loadChildren: 'app/registration/registration.module#RegistrationModule'
    },
    
]
    


