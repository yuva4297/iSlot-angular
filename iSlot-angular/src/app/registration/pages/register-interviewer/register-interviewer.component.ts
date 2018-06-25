import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { CommonService } from "../../../islot-common/common.service";
import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-register-interviewer',
  templateUrl: './register-interviewer.component.html',
  styleUrls: ['./register-interviewer.component.css']
})
export class RegisterInterviewerComponent implements OnInit {
  optionsModel: number[];
    skills: IMultiSelectOption[];
    locations: Array<any>;
    registerInterviewerForm : FormGroup;
    state: string = '';
    error: any;
    data: any;
  constructor(public af: AngularFireAuth,private router: Router, private commonService: CommonService, private registrationService: RegistrationService) {
    this.registerInterviewerForm =new FormGroup(
      {
        username: new FormControl('',Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com/)]),
        mobile: new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]{9}/)]),
        password: new FormControl('',[Validators.required, Validators.minLength(6)]),
        skills: new FormControl('', [Validators.required]),
        location: new FormControl('',[Validators.required])
      }
    )
    this.locations = [];
    this.skills = [];
   }
   onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      
      this.af.auth.createUserWithEmailAndPassword(
        formData.value.email,
        formData.value.password
        ).then(
        (success) => {
        console.log(success);
        this.data = {
          "email": formData.value.email,
          "eventPoints": [],
          "location": formData.value.location,
          "role": "interviewer",
          "skills": formData.value.skills.slice(1),
          "userId": success.user.uid,
          "userName": formData.value.username
        };
        this.registrationService.sendUserDetails(this.data);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  ngOnInit() {
  //   this.skills = [
  //     { id: 1, name: 'Java' },
  //     { id: 2, name: 'CSS' },
  // ];
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
  // this.locations = [
  //   {
  //     id: 1,
  //     name: "Chennai"
  //   },
  //   {
  //     id: 2,
  //     name: "Hyderabad"
  //   }
  // ]
  }
  onChange() {
    console.log(this.optionsModel);
}
  // Material Select Initialization


}
