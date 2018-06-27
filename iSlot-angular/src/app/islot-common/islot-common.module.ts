import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';




import { SkillComponent } from './skill/skill.component';
import { LocationComponent } from './location/location.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";


import { RouterModule } from "@angular/router";
import { routes } from "./islot-common.routes";
import { HttpModule, Http } from "@angular/http";

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    HttpModule,
    ReactiveFormsModule,  
     RouterModule.forChild(routes)
    
  ],
  providers: [Http],
  declarations: [SkillComponent, LocationComponent, HeaderComponent]

})
export class IslotCommonModule { }
