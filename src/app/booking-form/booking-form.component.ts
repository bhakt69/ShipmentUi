import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BookingService } from '../service/booking.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  constructor(private bookingService: BookingService,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  onBookingSubmit(bookingForm: NgForm){
    console.log(bookingForm.value);
    this.bookingService.createBooking(bookingForm.value).subscribe(
      (response: any) => {
        alert('Success');
        this.toastr.success('Your booking id is'+response.message, 'Booking Created');
      },
      (error: any) => {
        console.log(error);
        this.toastr.error(error.message, 'Booking Failed');
      }
    );
  }
}
