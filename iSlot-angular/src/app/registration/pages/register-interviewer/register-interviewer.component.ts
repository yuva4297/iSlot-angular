import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-interviewer',
  templateUrl: './register-interviewer.component.html',
  styleUrls: ['./register-interviewer.component.css']
})
export class RegisterInterviewerComponent implements OnInit {
  optionsModel: number[];
    myOptions: IMultiSelectOption[];
    registerInterviewerForm : FormGroup;
  constructor() {
    this.registerInterviewerForm =new FormGroup(
      {
        username: new FormControl('',Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com/)]),
      }
    )
   }

  ngOnInit() {
    this.myOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
  ];
  }
  onChange() {
    console.log(this.optionsModel);
}
  // Material Select Initialization


}
