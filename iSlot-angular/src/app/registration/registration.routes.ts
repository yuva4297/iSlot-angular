import { Route } from "@angular/router";
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterInterviewerComponent } from "./pages/register-interviewer/register-interviewer.component";
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
        path: '',
        component: LandingPageComponent
        
    }
]