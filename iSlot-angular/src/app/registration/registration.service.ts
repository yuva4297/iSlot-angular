import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RegistrationService {
  user;
  constructor(private http: Http) { }

  sendUserDetails(data)
  {
    const url = "https://islot-angular.firebaseio.com/User.json";
    this.http.post(url, data).subscribe(rsp =>{this.user = rsp.json(),
    console.log(rsp.json());})
  }
  // getUserDetails(userid)
  // {
  //   const url = "https://islot-angular.firebaseio.com/User.json";
  //   var userLink = new Firebase(url);
  //   var userData = userLink.orderByChild("userId").equalTo(userid);
  //   userData.on("value", function(response) {
  //     console.log(response.val());
  //   });
  // }

}
