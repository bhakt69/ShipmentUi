import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-list-button',
  templateUrl: './list-button.component.html',
  styleUrls: ['./list-button.component.css'],
  styles: [`
  .modal-content{
    width: 40%;
    text-align: center !important;
    margin: auto;
  }`]
})
export class ListButtonComponent implements OnInit,AfterViewInit{

  private params: any;
  label: string;
  closeResult = '';
  deleteBooking: boolean;
  bookingId = 0;

  agInit(params: any): void {
    this.params = params;
    this.label = this.params.label;
  }


  ngAfterViewInit(): void {
    this.bookingId = this.params.node.data.bookingId;
  }

  constructor(private modalService: NgbModal,
    private bookingservice: BookingService,
    private toastr: ToastrService){
  }


  ngOnInit(): void {
  } 

  //handle modal button click
  onClick(content: any) {
    if (this.params.onChange instanceof Function) {
      const params = {
        event: content,
        rowData: this.params.node.data
      }
      this.params.onClick(params);
    }
    this.open(content)
  }

  //display modal window
  open(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'exampleModal',
      centered: true
    });
  }

  onCancel(){ 
    this.deleteBooking = false;
    this.modalService.dismissAll();
   }

  onDelete(){ 
    this.deleteBooking = true; 
    this.onSubmit();
    this.modalService.dismissAll();
  }

  //Modal Form submission handler
  onSubmit(){
    if(this.deleteBooking){
      this.bookingservice.deleteBooking(this.bookingId).subscribe(
        (response: any) => {
          this.toastr.success('Booking Deleted', 'Success');
          this.modalService.dismissAll(); 
        },
        (error: any) => {
          this.toastr.error('Delete Failed', 'Error');
        }
      );
    }
    else{
      this.modalService.dismissAll();
    }
  }

}
