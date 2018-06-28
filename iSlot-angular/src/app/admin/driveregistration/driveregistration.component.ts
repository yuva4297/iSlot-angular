import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from "angular-2-dropdown-multiselect/angular-2-dropdown-multiselect";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from "../admin.service";
import { Http } from "@angular/http";
import { CommonService } from "../../islot-common/common.service";

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

  constructor(private adminService: AdminService, private httpservice:Http,private commonService: CommonService) {
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
  this.locations = [];
  this.skills = [];
}
  ngOnInit() {
    console.log("skills",this.commonService.skills);
    console.log("Locations",this.commonService.locations);
    for(let location in this.commonService.locations)
      {
        console.log(location);
        this.locations.push(this.commonService.locations[location]);
      }
    //this.locations = this.commonService.locations;
      for(let skill in this.commonService.skills)
        {
          
          this.skills.push(this.commonService.skills[skill]);
        }
    }
   
  

    onSubmit(formData){
        console.log(formData);
     this.event ={
      //"endTime": formData.value.endTime,
      "eventDate": formData.value.joindate,
      "eventId": this.adminService.recentevents.length + this.adminService.recentevents.length+1,
      "eventName": formData.value.eventname,
      "isClosed": "false",
      "location": formData.value.location,
      "skill": formData.value.skill,
      "slots": [
          {
              "endTime": formData.value.slot1endtime,
              "numberOfInterviewersEnrolled": [
              ],
              "slotId": 1,
              "startTime": formData.value.slot1starttime
          },
          {
              "endTime": formData.value.slot2endtime,
              "numberOfInterviewersEnrolled": [
      
              ],
              "slotId": 2,
              "startTime": formData.value.slot2starttime
          },
          {
              "endTime": formData.value.slot3endtime,
              "numberOfInterviewersEnrolled": [
              ],
              "slotId": 3,
              "startTime": formData.value.slot3starttime
          },
          {
              "endTime": formData.value.slot4endtime,
              "numberOfInterviewersEnrolled": [],
              "slotId": 4,
              "startTime": formData.value.slot4starttime
          }
      ],
     // "startTime": formData.value.startTime
     
     }
console.log(this.event);
 this.adminService.Addevent(this.event);
   }
  // Material Select Initialization
}