import { Route } from "@angular/router";
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterInterviewerComponent } from "./pages/register-interviewer/register-interviewer.component";
import { RegisterAdminComponent } from "./pages/register-admin/register-admin.component";
import { LogoutComponent } from "../islot-common/logout/logout.component";
export const routes: Route[] = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register-interviewer',
        component: RegisterInterviewerComponent
    },
    {
        path: 'register-admin',
        component: RegisterAdminComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    
    {
        path: '',
        component: LandingPageComponent
        
    }
]