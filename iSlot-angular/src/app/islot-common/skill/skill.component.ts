import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Http} from '@angular/http';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
   skills:FormGroup;
  constructor(private httpService:Http) {
    this.skills=new FormGroup({
      mySkill:new FormControl('',[Validators.required])
    })
   }

  ngOnInit() {
  }
  }
