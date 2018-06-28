import { Route } from "@angular/router";

import { HeaderComponent } from "./header/header.component";

import { LocationComponent } from "./location/location.component";
import { SkillComponent } from "./skill/skill.component";
import { UpdateProfileComponent } from "./update-profile/update-profile.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { LogoutComponent } from "./logout/logout.component";

export const routes: Route[] = [
    {
        path: 'location',
        component: LocationComponent 
            
    },
    {
        path: 'skill',
        component:  SkillComponent
            
    },
      {
        path: 'header',
        component: HeaderComponent
    },
    {
        path: 'update-profile',
        component: UpdateProfileComponent
    },
    {
        path: 'change-password',
        component: ChangePasswordComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    
 ]
