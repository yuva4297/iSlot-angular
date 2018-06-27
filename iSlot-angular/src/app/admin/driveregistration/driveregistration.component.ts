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
      slot1starttime: new FormControl('',Validators.required),
      slot1endtime : new FormControl('',Validators.required),
      slot2starttime: new FormControl('',Validators.required),
      slot2endtime : new FormControl('',Validators.required),
      slot3starttime: new FormControl('',Validators.required),
      slot3endtime : new FormControl('',Validators.required),
      slot4starttime: new FormControl('',Validators.required),
      slot4endtime : new FormControl('',Validators.required),
      skills: new FormControl('', [Validators.required]),
      location: new FormControl('',[Validators.required])
      
    }
  )
}
  ngOnInit() {}

    onSubmit(formData){
        console.log(formData);
     this.event ={
       "eventname":formData.value.eventname,
       "joindate":formData.value.joindate,
       "slot1starttime":formData.value.starttime,
       "slot1endtime":formData.value.endtime,
       "slot2starttime":formData.value.starttime,
       "slot2endtime":formData.value.endtime,
       "slot3starttime":formData.value.starttime,
       "slot3endtime":formData.value.endtime,
       "slot4starttime":formData.value.starttime,
       "slot4endtime":formData.value.endtime,
       "skills":formData.value.skills,
       "location":formData.value.location,
     }
console.log(this.event);
 this.adminservice.Addevent(this.event);
   }
  // Material Select Initialization
}