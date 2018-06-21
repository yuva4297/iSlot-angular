
import { Route } from "@angular/router";

export const routes: Route[] = [
    {
        path: '',
        loadChildren: 'app/registration/registration.module#RegistrationModule'
    }
]
    


