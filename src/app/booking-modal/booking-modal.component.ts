import { Component, OnInit, ViewEncapsulation,AfterViewInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Booking } from '../model/booking';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BookingModalComponent implements OnInit,AfterViewInit{
  
  senderName: any;
  label: string;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.model.senderName = this.params.node.data.senderName;
    this.model.senderAddress = this.params.node.data.senderAddress;
    this.model.senderCityName = this.params.node.data.senderCityName;
    this.model.senderPinCode = this.params.node.data.senderPinCode;
    this.model.senderMobileNumber = this.params.node.data.senderMobileNumber;
    this.model.senderEmailId = this.params.node.data.senderEmailId;
    this.model.receiverName = this.params.node.data.receiverName;
    this.model.receiverAddress = this.params.node.data.receiverAddress;
    this.model.receiverCityName = this.params.node.data.receiverCityName;
    this.model.receiverPinCode = this.params.node.data.receiverPinCode;
    this.model.receiverMobileNumber = this.params.node.data.receiverMobileNumber;
    this.model.receiverEmailId = this.params.node.data.receiverEmailId;
    this.model.category = this.params.node.data.category;
    this.model.priority = this.params.node.data.priority;
    this.model.userInstruction = this.params.node.data.userInstruction;
    this.model.bookingId = this.params.node.data.bookingId;
  }

  agInit(params: any): void {
    this.params = params;
    this.label = this.params.label;
  }

  private params: any;

  closeResult = '';

  model: Booking = {
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
    senderPinCode: 0,
    trackingId: '',
    bookingDate: ''
  };
  
  constructor(
    private modalService: NgbModal,
    private bookingService: BookingService,
    private toastr: ToastrService
    ) {}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'exampleModalLong'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onFormSubmit() {
    this.bookingService.editShipment(this.model).subscribe(
      (response: any) => {
        this.toastr.success('Changes Saved', 'Booking Modified');
      },
      (error: any) => {
        this.toastr.error(error.message, 'Booking Edit Failed');
      }
    );
  }

  onChange(content: any) {
    if (this.params.onChange instanceof Function) {
      const params = {
        event: content,
        rowData: this.params.node.data.bookingId
      }
      this.params.onChange(params);
    }
    this.open(content);
  }

}
