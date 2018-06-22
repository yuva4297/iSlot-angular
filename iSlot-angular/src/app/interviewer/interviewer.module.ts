import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillspageComponent } from './skillspage/skillspage.component';
import { RouterModule } from "@angular/router";
import { routes } from "./interviewer.routes";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SkillspageComponent]
})
export class InterviewerModule { }
