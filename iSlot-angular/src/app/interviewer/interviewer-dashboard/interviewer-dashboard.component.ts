import { Component, OnInit } from '@angular/core';
import { InterviewerService } from "../interviewer.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-interviewer-dashboard',
  templateUrl: './interviewer-dashboard.component.html',
  styleUrls: ['./interviewer-dashboard.component.css']
})
export class InterviewerDashboardComponent implements OnInit {
  recentevents;
  recentcontent;
  upcomingevents;
  totalPoints;
  monthPoints;
  eventStatus;
  event;
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth() + 1;
  yyyy = this.today.getFullYear();


  constructor(private interviewerService: InterviewerService, private router: Router) {
    this.recentevents = [];
    this.recentcontent = [];
    this.upcomingevents = [];
    this.event = this.interviewerService.data;
    this.eventStatus ='';
  }

  storeEventId(id,eventType)
  {
    this.interviewerService.currentEventId = id;
    this.interviewerService.eventStatus = eventType;
    this.router.navigate(['/interviewer/enrollment']);
  }

  ngOnInit() {
    this.interviewerService.getEvents();
    this.recentevents = this.interviewerService.recentevents;
    this.upcomingevents = this.interviewerService.upcomingevents;
    this.totalPoints = this.interviewerService.totalPoints;
    console.log("Total in interviewer", this.totalPoints);
    console.log("Current Interviewer", this.interviewerService.currentInterviewerData);

  }
}
