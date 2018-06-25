import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Http} from '@angular/http';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
 locations:FormGroup
  constructor(private httpService:Http) {
    this.locations=new FormGroup({
      myLocation:new FormControl('',[Validators.required])
    })
   }
  ngOnInit() {
  }

}
