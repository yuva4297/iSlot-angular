import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  error: any;
    constructor(public af: AngularFireAuth,private router: Router) {

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
        (success) => {
        console.log(success);
        this.router.navigate(['/admin'])
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
