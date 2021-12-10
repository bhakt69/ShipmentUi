import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-complete',
  templateUrl: './booking-complete.component.html',
  styleUrls: ['./booking-complete.component.css']
})
export class BookingCompleteComponent implements OnInit {

  trackingId: any;

  ngOnInit(): void {    
  }

  constructor(private router: Router) {
      if(!history.state.data){
        this.router.navigate(['/home']);
      }
      this.trackingId = history.state.data.trackingId;
    }

}
