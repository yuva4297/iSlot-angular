import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';
import { RegistrationService } from '../../registration.service';
import { map } from "rxjs/operators";
import { InterviewerService } from '../../../interviewer/interviewer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  error: any;
  user:any;
    constructor(public af: AngularFireAuth,private router: Router, private registrationService: RegistrationService, private interviewerService: InterviewerService) {

    //   this.af.auth.(auth => { 
    //   if(auth) {
    //     this.router.navigateByUrl('/admin');
    //   }
    // });
 
    this.loginForm = new FormGroup(
    {
      email: new FormControl('',[Validators.required, Validators.pattern(/^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com/)]),
      password: new FormControl('',[Validators.required])
    
    }
  )
  }
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      
      this.af.auth.signInWithEmailAndPassword(
        formData.value.email,
        formData.value.password
        ).then(
        (data) => {
        console.log(data.user.uid);
        this.registrationService.getUserDetails(data.user.uid)
        .pipe(map(rsp => rsp.json()))
        .subscribe(data => {
          console.log(data);
          for(let user in data)
          {
            console.log(data[user]);
            this.user = data[user];
          }
          console.log(this.user);
          console.log(this.user.userId);
          if(this.user.role=="interviewer")
          {
            this.interviewerService.currentInterviewerData = this.user;
            this.router.navigate(['/interviewer'])
          }
          if(this.user.role == "admin")
          {
          
            this.router.navigate(['/admin'])
          }
        });
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }


  ngOnInit() {
  }

}
