import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class AdminService {
  currentEvent;
  constructor(private http: Http) { }
  
  postDriveRegistration(data)
  {
    
  }

  fetchCurrentEventDetail(eventId)
  {
    const entity ="eventId"
    const url = `https://islot-angular.firebaseio.com/Event.json?orderBy=\"${entity}\"&equalTo=\"${eventId}\"`;
    console.log(url);
    return this.http.get(url);
  }
}
