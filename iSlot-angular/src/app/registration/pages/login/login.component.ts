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

    //   this.af.auth.s(auth => { 
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

  ngOnInit() {
  }

}
