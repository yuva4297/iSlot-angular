import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class AdminService {
  currentEvent;
 
  currentEventId;

  eventValue;
  recentevents;
  upcomingevents;
  eventdate;
  day;
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth()+1;
  yyyy = this.today.getFullYear();
  data;
  constructor(private http: Http) { 
    this.recentevents= [];
    this.upcomingevents= [];
    this.currentEventId = '';
    
  }
  getEvents()
  {
    const url = "https://islot-angular.firebaseio.com/Event.json";
    this.recentevents= [];
    this.upcomingevents= [];
    this.http.get(url).subscribe(rsp =>
      {     
        this.data = rsp.json(),
        console.log(rsp.json());
        //this.adminService.getEvents();
        //console.log("events",this.adminService.events);
        for(let event in this.data)
          {
            this.eventdate=this.data[event]['eventDate'];
            this.day=this.eventdate? this.eventdate.split('/'):'';
            if(parseInt(this.day[2])>this.yyyy){
              this.upcomingevents.push(this.data[event]);
            }
            else if((parseInt(this.day[2])==this.yyyy)){
              if(parseInt(this.day[0])==this.mm){
                if(parseInt(this.day[1])==this.dd){
                  this.upcomingevents.push(this.data[event]);
                 }
                else{
                  this.recentevents.push(this.data[event]);
                }
            }
             else if(parseInt(this.day[0]) > this.mm){
                this.upcomingevents.push(this.data[event]);
            }
             else{
              this.recentevents.push(this.data[event]);
            }
          }
           else{
             this.recentevents.push(this.data[event]); 
           }
        }
      
           // console.log(event);
            // console.log(this.data[event].eventName);
          //  this.events.push(this.data[event]);
          
    });
    
  // console.log('gotEvents')
   }
   Addevent(event){
     this.http.post ("https://islot-angular.firebaseio.com/Event.json",event)
     .subscribe(rsp =>{this.eventValue=rsp.json(),
    console.log(rsp.json());
  })
   }

   postDriveRegistration(data)
   {}

  fetchCurrentEventDetail(eventId)
  {
    const entity ="eventId"
    const url = `https://islot-angular.firebaseio.com/Event.json?orderBy=\"${entity}\"&equalTo=\"${eventId}\"`;
    console.log(url);
    return this.http.get(url);
  }
}
  
