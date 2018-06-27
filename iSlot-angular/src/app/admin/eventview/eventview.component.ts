import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-eventview',
  templateUrl: './eventview.component.html',
  styleUrls: ['./eventview.component.css']
})
export class EventviewComponent implements OnInit {
  events: any;
  slotsInterviewerCount: Array<number>;
  updateDetails: Array<any>;
  constructor(private adminService: AdminService) { 
    this.events = {};
    this.slotsInterviewerCount = [];
    this.updateDetails = [];
  }

  ngOnInit() {
    this.adminService.fetchCurrentEventDetail(this.adminService.currentEventId)
    .pipe(map(rsp => rsp.json()))
    .subscribe(data => {
      console.log(data);
      for(let event in data)
      {
        console.log(data[event]);
        this.events = data[event];
      }
      console.log(this.events);
      var count = 0;
      // for(let slot in this.events.slots)
      // {
      //   count =0;
      //   for(let person in this.events.slots[slot].numberOfInterviewersEnrolled)
      //   {
      //       count+= this.events.slots[slot].numberOfInterviewersEnrolled[person].numberOfInterviewsTaken;
      //   }
      //   this.slotsInterviewerCount = this.events.slots[slot].map(function(el) {
      //     var o = Object.assign({}, el);
      //     o.interviewsCount = count;
      //     return o;
      //   })
      
        
      //   console.log("updated event", this.slotsInterviewerCount);
      // }
      console.log(this.events.eventName);
      for(let slot in this.events.slots)
      {
        for(let person in this.events.slots[slot].numberOfInterviewersEnrolled)
        {
          if(this.events.slots[slot].numberOfInterviewersEnrolled[person].userId in this.updateDetails)
          {
            
          }
        }

      }

     
    })
  }

}
