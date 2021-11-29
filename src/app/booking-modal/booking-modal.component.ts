import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.css']
})
export class BookingModalComponent {

  constructor() { }

  ngOnInit() {}

  displayStyle = "none";
  closePopup() {
    this.displayStyle = "none";
  }

}
