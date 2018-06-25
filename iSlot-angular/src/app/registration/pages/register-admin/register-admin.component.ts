import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  registerAdminForm: FormGroup;
  locations: Array<any>;
  constructor() { 
    this.registerAdminForm =new FormGroup(
      {
        username: new FormControl('',Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com/)]),
        mobile: new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]{9}/)]),
        password: new FormControl('',[Validators.required, Validators.minLength(6)]),
        location: new FormControl('',[Validators.required])
      }
    )
  }

  ngOnInit() {
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

}
