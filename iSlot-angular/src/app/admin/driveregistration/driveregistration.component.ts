import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from "angular-2-dropdown-multiselect/angular-2-dropdown-multiselect";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-driveregistration',
  templateUrl: './driveregistration.component.html',
  styleUrls: ['./driveregistration.component.css']
})
export class DriveregistrationComponent implements OnInit {
  driveregistrationForm: FormGroup;
  optionsModel: number[];
  skills: IMultiSelectOption[];
  locations: Array<any>;
  
  constructor() {
  this.driveregistrationForm =new FormGroup(
    {
      username: new FormControl('',Validators.required),
      joindate: new FormControl('',Validators.required),
      starttime: new FormControl('',Validators.required),
      endtime : new FormControl('',Validators.required),
      skills: new FormControl('', [Validators.required]),
      location: new FormControl('',[Validators.required])
    }
  )
}
  ngOnInit() {

    this.skills = [
      { id: 1, name: 'Java' },
      { id: 2, name: 'CSS' },
  ];
  this.locations = [
    {
      id: 1,
      name: "Chennai"
    },
    {
      id: 2,
      name: "Hyderabad"
    }
  ]
  }
  onChange() {
    console.log(this.optionsModel);
}
  // Material Select Initialization


}

