import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class CommonService {
  skills;
  locations;
  constructor(private http: Http) { }
  getSkills()
  {
    const url = "https://islot-angular.firebaseio.com/Skill.json";
    this.http.get(url)
    .subscribe(rsp =>
      {     
        this.skills = rsp.json(),
        console.log(rsp.json());
    });
    
  console.log('gotSkills');
  }
  getLocations()
  {
    const url = "https://islot-angular.firebaseio.com/Location.json";
    this.http.get(url)
    .subscribe(rsp =>
      {     
        this.locations = rsp.json(),
        console.log(rsp.json());
    });
    
  console.log('gotLocations')
  }

}
