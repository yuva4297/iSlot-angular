import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  registerAdminForm: FormGroup;
  locations: Array<any>;
  state: string = '';
    error: any;
    data;
  constructor(public af: AngularFireAuth,private router: Router, private registrationService: RegistrationService) { 
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
          "location": formData.value.location,
          "role": "admin",
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
}