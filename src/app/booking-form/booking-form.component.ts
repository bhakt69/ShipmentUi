import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBookingSubmit(bookingForm: NgForm){
    console.log(bookingForm.value);
  }

}
