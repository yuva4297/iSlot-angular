import { Component, OnInit } from '@angular/core';
import { InterviewerService } from "../interviewer.service";

@Component({
  selector: 'app-interviewer-dashboard',
  templateUrl: './interviewer-dashboard.component.html',
  styleUrls: ['./interviewer-dashboard.component.css']
})
export class InterviewerDashboardComponent implements OnInit {
  recentevents;
  recentcontent;
  upcomingevents;
  event;
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth() + 1;
  yyyy = this.today.getFullYear();


  constructor(private interviewerService: InterviewerService) {
    this.recentevents = [];
    this.recentcontent = [];
    this.upcomingevents = [];
    this.event = this.interviewerService.data;
  }

  ngOnInit() {
    this.interviewerService.getEvents();
    this.recentevents = this.interviewerService.recentevents;
    this.upcomingevents = this.interviewerService.upcomingevents;

  }
}
