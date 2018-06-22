
import { Route } from "@angular/router";

export const routes: Route[] = [ 
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
        
    },
    {
        path: 'islot-common',
        loadChildren: 'app/islot-common/islot-common.module#IslotCommonModule'
    },
    
    {
        path: '',
        loadChildren: 'app/registration/registration.module#RegistrationModule'
    }
    
]
    


