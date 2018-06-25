import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill/skill.component';
import { LocationComponent } from './location/location.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";


import { RouterModule } from "@angular/router";
import { routes } from "./islot-common.routes";

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,  
     RouterModule.forChild(routes)
    
  ],
  declarations: [SkillComponent, LocationComponent]
})
export class IslotCommonModule { }
