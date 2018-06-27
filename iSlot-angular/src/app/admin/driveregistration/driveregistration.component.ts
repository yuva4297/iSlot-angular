import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from "angular-2-dropdown-multiselect/angular-2-dropdown-multiselect";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from "../admin.service";
import { Http } from "@angular/http";

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
  events:any[];
  event;
  error:any={isError:false,errorMessage:''};

  constructor(private adminservice: AdminService, private htpservice:Http) {
  this.driveregistrationForm =new FormGroup(
    {
      eventname: new FormControl('',Validators.required),
      joindate: new FormControl('',Validators.required),
      starttime: new FormControl('',Validators.required),
      endtime : new FormControl('',Validators.required),
      skills: new FormControl('', [Validators.required]),
      location: new FormControl('',[Validators.required])
      
    }
  )
}
  ngOnInit() {}

    onSubmit(formData){
        console.log("hhghghy");
        console.log(formData);
     this.event ={
       "eventname":formData.value.eventname,
       "joindate":formData.value.joindate,
       "starttime":formData.value.starttime,
       "endtime":formData.value.endtime,
       "skills":formData.value.skills,
       "location":formData.value.location,
     }
console.log(this.event);
 this.adminservice.Addevent(this.event);
   }
  
  // Material Select Initialization
 


   
}