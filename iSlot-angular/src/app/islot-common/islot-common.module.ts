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
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    HttpModule,
    ReactiveFormsModule,  
     RouterModule.forChild(routes)
  ],
  providers: [Http,HeaderComponent],
  declarations: [SkillComponent, LocationComponent, HeaderComponent, UpdateProfileComponent, ChangePasswordComponent, LogoutComponent],
exports:[
  HeaderComponent
]
})
export class IslotCommonModule { }
