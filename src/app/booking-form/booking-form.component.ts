import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BookingService } from '../service/booking.service';
import { ToastrService } from 'ngx-toastr';
import { Booking } from '../model/booking';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  constructor(private bookingService: BookingService,
    private toastr: ToastrService ) { }

   // @ViewChild('bookingForm') bookingForm: NgForm;
   // Booking:any;

    model:Booking = {
      senderName: '',
      senderAddress: '',
      category: '',
      priority: '',
      type: '',
      senderCityName: '',
      senderEmailId: '',
      senderMobileNumber: '',
      userInstruction: '',
      receiverAddress: '',
      receiverCityName: '',
      receiverEmailId: '',
      receiverMobileNumber: '',
      receiverName: '',
      bookingId: 0,
      receiverPinCode: 0,
      senderPinCode: 0
    };

  ngOnInit() {   
  }

  onFormSubmit() {
    console.log(this.model);  
    this.bookingService.createBooking(this.model).subscribe(
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