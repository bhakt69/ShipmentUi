import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BookingService } from '../service/booking.service';
import { ToastrService } from 'ngx-toastr';
import { ListButtonComponent } from '../list-button/list-button.component';
import { StatusDropdownComponent } from '../status-dropdown/status-dropdown.component';
import { BookingModalComponent } from '../booking-modal/booking-modal.component';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../service/token-storage.service';



class DataTablesResponse {
  data: any[];
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})


export class OrderListComponent{

  frameworkComponents: any;

  private baseUrl = environment.usersUrl;

  //ng-grid from here
  public gridApi: any;
  public gridColumnApi:any;
  private userColumnDefs: any;
  private adminColumnDefs: any;
  public columnDefs: any;
  public sortingOrder: any;
  public defaultColDef: any;
  
  
  public paginationPageSize: any;
  public paginationNumberFormatter: any;
  
  constructor(
    private http: HttpClient,
    private bookingservice: BookingService,
    private toastr: ToastrService,
    private tokenStorage: TokenStorageService,
    ) {

      
    this.frameworkComponents = {
      listbuttonComponent: ListButtonComponent,
      statusDropdownComponent: StatusDropdownComponent,
      bookingModalComponent: BookingModalComponent
    };

    this.adminColumnDefs=[
      {
        headerName: "Name",
        field:"senderName",
        width: 150,
        sortable: true,
        sortingOrder:['asc', 'desc', 'null'],
        headerCheckboxSelection: false,
      },
      {
        headerName: "Sender City",
        field: "senderCityName",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Sender Email",
        field: "senderEmailId",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Sender Mobile",
        field: "senderMobileNumber",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Sender Pincode",
        field: "senderPinCode",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Receiver Name",
        field: "receiverName",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Receiver City",
        field: "receiverCityName",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Receiver Email",
        field: "receiverEmailId",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      
      {
        headerName: "Booked Date",
        field: "bookingDate",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc'],
        cellRenderer:(data: { bookingDate: moment.MomentInput; }) =>{ return moment(data.bookingDate).format('DD/MM/YYYY')}
      },
      {
        headerName: "Receiver Mobile",
        field: "receiverMobileNumber",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Receiver Pincode",
        field: "receiverPinCode",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Tracking Id",
        field: "trackingId",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Status",
        field: "status",
        width: 750,
        editable: false,
        minWidth: 170,
        cellRenderer: 'statusDropdownComponent',
        cellRendererParams: {
          onChange: this.onStatusClick.bind(this),
        },
      },
      {
        headerName: "Edit",
        width: 500,
        editable: false,
        cellRenderer: 'bookingModalComponent',           
      },
      {
        headerName: "Delete",
        width: 500,
        editable: false,
        cellRenderer: 'listbuttonComponent',
      }
    ]

    this.userColumnDefs=[
      {
        headerName: "Name",
        field:"senderName",
        width: 150,
        sortable: true,
        sortingOrder:['asc', 'desc', 'null'],
        headerCheckboxSelection: false,
      },
      {
        headerName: "Sender City",
        field: "senderCityName",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Sender Email",
        field: "senderEmailId",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Sender Mobile",
        field: "senderMobileNumber",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Sender Pincode",
        field: "senderPinCode",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Receiver Name",
        field: "receiverName",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Receiver City",
        field: "receiverCityName",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Receiver Email",
        field: "receiverEmailId",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      
      {
        headerName: "Booked Date",
        field: "bookingDate",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc'],
        cellRenderer:(data: { bookingDate: moment.MomentInput; }) =>{ return moment(data.bookingDate).format('DD/MM/YYYY')}
      },
      {
        headerName: "Receiver Mobile",
        field: "receiverMobileNumber",
        width: 100,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: "Receiver Pincode",
        field: "receiverPinCode",
        width: 100,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },{
        headerName: "Tracking Id",
        field: "trackingId",
        width: 100,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      },
    ]

    if(this.tokenStorage.getUserRole() == 'User'){
      this.columnDefs = this.userColumnDefs;
    }
    else{
      this.columnDefs = this.adminColumnDefs;
    }

    this.sortingOrder = ["asc", "desc", "null"];
    this.paginationPageSize = 10;
    this.paginationNumberFormatter = function (params: { value: { toLocaleString: () => string; }; }) {
      return '[' + params.value.toLocaleString() + ']';
    };
    this.defaultColDef = {
      editable: false,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 75
    };
  }
  

  onGridReady(params: any){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    if(this.tokenStorage.getUserRole() == 'User'){
      this.http.get( this.baseUrl + "/booking/getAllBookingByUser")
      .subscribe(response => {
        params.api.setRowData(response);
      });
    }
    if(this.tokenStorage.getUserRole() == 'Admin'){
      this.http.get( this.baseUrl + "/booking/getAllBookingInfo")
      .subscribe(response => {
        params.api.setRowData(response);
      });
    }
  }

  onPageSizeChanged() {
    var pageNum = (<HTMLInputElement>document.getElementById('paginateCount')).value;
    this.gridApi.paginationSetPageSize(Number(pageNum));
  }

  onStatusClick(e1: any) {
    this.bookingservice.changeBookingStatus(parseInt(e1.rowData), e1.selectedValue).subscribe(
      (response: any) => {
        this.toastr.success('Changed Status', 'Success');
      },
      (error: Error) => {
        this.toastr.error('Failed', 'Error');
      }
    );
  }
  

}
