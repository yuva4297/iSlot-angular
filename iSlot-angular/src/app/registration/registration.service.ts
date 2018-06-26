import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Injectable()
export class RegistrationService {
  user;
  constructor(private http: Http) {
    this.user= {};
   }

  sendUserDetails(data)
  {
    const url = "https://islot-angular.firebaseio.com/User.json";
    this.http.post(url, data).subscribe(rsp =>{this.user = rsp.json(),
    console.log(rsp.json());})
  }
  getUserDetails(userid)
  {
    const userDetail ="userId"
    const url = `https://islot-angular.firebaseio.com/User.json?orderBy=\"${userDetail}\"&equalTo=\"${userid}\"`;
    console.log(url);
    return this.http.get(url);
  }

}
