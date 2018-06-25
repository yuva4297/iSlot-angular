
import { Route } from "@angular/router";

export const routes: Route[] = [ 
    {
        path: 'interviewer',
        loadChildren: 'app/interviewer/interviewer.module#InterviewerModule'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
        
    },

    {
        path: 'common',
        loadChildren: 'app/islot-common/islot-common.module#IslotCommonModule'
    },
    
    {
        path: '',
        loadChildren: 'app/registration/registration.module#RegistrationModule'
    }
    
]
    


