import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill/skill.component';
import { LocationComponent } from './location/location.component';
import { routes } from "./islot.routes";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,   
     RouterModule.forChild(routes)
    
  ],
  declarations: [SkillComponent, LocationComponent]
})
export class IslotCommonModule { }
