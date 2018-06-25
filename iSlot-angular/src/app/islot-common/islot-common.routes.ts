import { Route } from "@angular/router";
import { LocationComponent } from "./location/location.component";
import { SkillComponent } from "./skill/skill.component";

export const routes: Route[] = [
    {
        path: 'location',
        component: LocationComponent 
            
    },
    {
        path: 'skill',
        component:  SkillComponent
            
    }
 ]