import { Component, OnInit } from '@angular/core';
import { InterviewerService } from '../interviewer.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  events;
  eventStatus;
  isEnrolled;
  eventId;
  constructor(private interviewerService: InterviewerService) {
    this.events = {};
    this.eventStatus='';
    
  }
  ngOnInit() {
    this.eventStatus = this.interviewerService.eventStatus;
    console.log("EventStatus", this.interviewerService.eventStatus);
    this.interviewerService.fetchCurrentEventDetail(this.interviewerService.currentEventId)
    .pipe(map(rsp => rsp.json()))
    .subscribe(data => {
      console.log(data);
      for(let event in data)
      {
        this.eventId = event;
        console.log(data[event]);
        this.events = data[event];
      }
      for(let slot in this.events.slots)
      {
        for(let person in this.events.slots[slot].numberOfInterviewersEnrolled)
        {
          if(this.interviewerService.currentInterviewerData['userId'] == this.events.slots[slot].numberOfInterviewersEnrolled[person].userId)
          {
            this.events.slots[slot]['isEnrolled'] = true;
            console.log("Matched", this.events.slots[slot]['isEnrolled'] );
            break;
          }
        }
        this.events.slots[slot]['isEnrolled'] = false;
      }
      
      console.log("In Enrollment",this.events);
   });
   
 }
 updateEvent(eventStatus, slotId)
 {
   var slots;
   var userData;
   console.log("Event Status",eventStatus);
   console.log("slot Id", slotId);
   console.log("Event checked", eventStatus.target.checked);
   if(eventStatus.target.checked)
   {
     this.isEnrolled = true;
     slots = this.events.slots[slotId];
     console.log("slot", slots);
     userData = {
       "userName": this.interviewerService.currentInterviewerData.userName,
       "userId": this.interviewerService.currentInterviewerData.userId,
       "email": this.interviewerService.currentInterviewerData.email,
       "mobile": this.interviewerService.currentInterviewerData.mobile
     }
     console.log("userData", userData);
     slots.numberOfInterviewersEnrolled.push(userData);
     console.log("slot after updating the user", slots);
     this.events.slots[slotId-1]=slots;
     console.log(this.events.slots);
     this.interviewerService.updateSlots(this.events.slots, this.eventId);
   }
   else{
     this.isEnrolled = false;
   }
 }
 
  }


