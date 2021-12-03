import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BookingService } from '../service/booking.service';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  constructor(private bookingService: BookingService ) { }

  ngOnInit(): void {
  }

  onBookingSubmit(bookingForm: NgForm){
    console.log(bookingForm.value);
    this.bookingService.createBooking(bookingForm.value).subscribe(
      (response: any) => {
        alert('Success');
      },
      (error: any) => {
        alert("Failure")
      }
    );
  }
}
