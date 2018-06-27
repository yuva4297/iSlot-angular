import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class InterviewerService {
  recentevents;
  upcomingevents;
  currentInterviewerData;
  eventdate;
  totlaPoints;
  currentMonthPoints;
  day;
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth() + 1;
  yyyy = this.today.getFullYear();
  data;
  interviewerEvents;
  constructor(private http: Http) {
    this.recentevents = [];
    this.upcomingevents = [];
    this.currentInterviewerData = {};
    this.totlaPoints = 0;
    this.currentMonthPoints = 0;
    this.interviewerEvents = {};
  }
  calculatePoints()
  {
      for(let event in this.currentInterviewerData.eventPoints)
      {
        console.log("In points",this.currentInterviewerData.eventPoints[event]);
      }
  }
  calculateEvents()
  {
      for(let skill in this.currentInterviewerData.skills )
      {
        console.log("Skill of interviewer",this.currentInterviewerData.skills[skill]);
        for(let event in this.data)
        {
          console.log(this.data[event]);
          console.log(this.data[event].skill);
          if(this.data[event].skill === this.currentInterviewerData.skills[skill] )
          {
            this.interviewerEvents[event] = this.data[event];
            console.log("Matched skills",this.data[event]);
          }
        }
      }
      this.data = this.interviewerEvents;
     
      this.interviewerEvents = {};
      console.log("After Updating data", this.data);
      console.log("After updating current", this.interviewerEvents);
  }
  separateEvents()
  {
    for (let event in this.data) {
      this.eventdate = this.data[event]['eventDate'];
      this.day = this.eventdate ? this.eventdate.split('/') : '';
      if (parseInt(this.day[2]) > this.yyyy) {
        this.upcomingevents.push(this.data[event]);
      }
      else if ((parseInt(this.day[2]) == this.yyyy)) {
        if (parseInt(this.day[0]) == this.mm) {
          if (parseInt(this.day[1]) == this.dd) {
            this.upcomingevents.push(this.data[event]);
          }
          else {
            this.recentevents.push(this.data[event]);
          }
        }
        else if (parseInt(this.day[0]) > this.mm) {
          this.upcomingevents.push(this.data[event]);
        }
        else {
          this.recentevents.push(this.data[event]);
        }
      }
      else {
        this.recentevents.push(this.data[event]);
      }
    }

  }
  getEvents() {
    const url = "https://islot-angular.firebaseio.com/Event.json";
    this.recentevents = [];
    this.upcomingevents = [];
    this.http.get(url).subscribe(rsp => {
      this.data = rsp.json(),
        console.log(rsp.json());
        this.calculateEvents();
        this.separateEvents();
        this.calculatePoints();
     
    

    });

    
  }
}