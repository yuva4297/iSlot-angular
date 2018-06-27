import { Component, OnInit } from '@angular/core';
import { AdminService } from "../admin.service";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recentevents;
  recentcontent;
  upcomingevents;
  event;
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth()+1;
  yyyy = this.today.getFullYear();
  
  
  constructor(private adminService: AdminService, private router: Router) {
    this.recentevents = [];
    this.recentcontent = [];
    this.upcomingevents = [];
    this.event=this.adminService.data;
  }

  ngOnInit() {
    this.adminService.getEvents();
    this.recentevents=this.adminService.recentevents;
    this.upcomingevents=this.adminService.upcomingevents;
    
    // console.log("recentevent",this.adminService.event)
    //    {
    // console.log(event);
    // console.log(this.adminService.event[event].eventName);
    //  this.recentevents.push(this.adminService.events[event]);
    //  }

}
storeId(id)
{
  console.log("Evnt Id", id);
  this.adminService.currentEventId = id;
  this.router.navigate(['/admin/eventview']);
}
}