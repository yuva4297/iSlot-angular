import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

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
  constructor(public af: AngularFireAuth,private router: Router) {
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
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
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
