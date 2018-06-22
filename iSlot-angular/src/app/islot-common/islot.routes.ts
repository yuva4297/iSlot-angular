import { Route } from "@angular/router/router";
import { LocationComponent } from "./location/location.component";
import { SkillComponent } from "./skill/skill.component";

export const routes: Route[] = [
    {
        path: '',
        component: LocationComponent 
            
    },
    {
        path: '',
        component:  SkillComponent
            
    }
 ]