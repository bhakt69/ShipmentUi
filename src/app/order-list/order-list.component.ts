import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Tracking } from '../model/tracking';
import { environment } from 'src/environments/environment';
import { BookingService } from '../service/booking.service';
import { ToastrService } from 'ngx-toastr';
import { DOCUMENT } from '@angular/common'; 
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ListButtonComponent } from '../list-button/list-button.component';



class DataTablesResponse {
  data: any[];
  // draw: number;
  // recordsFiltered: number;
  // recordsTotal: number;
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})


export class OrderListComponent implements OnInit{

  frameworkComponents: any;

  ngOnInit(): void {
    
  }

  //ng-grid from here
  public gridApi: any;
  public gridColumnApi:any;
  public columnDefs: any;
  public sortingOrder: any;
  public defaultColDef: any;
  
  
  public paginationPageSize: any;
  public paginationNumberFormatter: any;
  
  constructor(
    private http: HttpClient,
    private bookingservice: BookingService,
    private toastr: ToastrService
    ) {

    this.columnDefs=[
      {
        headerName: "Name",
        field:"senderName",
        width: 150,
        sortable: true,
        sortingOrder:['asc', 'desc', 'null'],
        checkboxSelection: true,
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
        headerName: "Sender's Address",
        field: "senderAddress",
        width: 300,
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
        headerName: "Receiver's Address",
        field: "receiverAddress",
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
        headerName: "Status",
        width: 500,
        editable: false,
        cellRenderer: 'listbuttonComponent',
        cellRendererParams: {
          onClick: this.onStatusClick.bind(this),
          label: 'Status'
        }
      },
      {
        headerName: "Edit",
        width: 500,
        editable: false,
        cellRenderer: 'listbuttonComponent',
        cellRendererParams: {
          onClick: this.onEditClick.bind(this),
          label: 'Edit'
        }
      },
      {
        headerName: "Delete",
        width: 500,
        editable: false,
        cellRenderer: 'listbuttonComponent',
        cellRendererParams: {
          onClick: this.onDeleteClick.bind(this),
          label: 'Delete'
        }
      },
    ]
    this.frameworkComponents = {
      listbuttonComponent: ListButtonComponent,
    };
    this.sortingOrder = ["asc", "desc", "null"];
    this.paginationPageSize = 10;
    this.paginationNumberFormatter = function (params: { value: { toLocaleString: () => string; }; }) {
      return '[' + params.value.toLocaleString() + ']';
    };
    this.defaultColDef = {
      editable: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 75,
    };
  }
  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams): void {
    throw new Error('Method not implemented.');
  }


  onGridReady(params: any){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http.get("http://localhost:8080/booking/getAllBookingInfo")
    .subscribe(response => {
      params.api.setRowData(response);
    });
  }

  onPageSizeChanged() {
    var pageNum = (<HTMLInputElement>document.getElementById('paginateCount')).value;
    this.gridApi.paginationSetPageSize(Number(pageNum));
  }

  onStatusClick(e1: any) {
    console.log(e1.rowData);
    alert('status');
  }

  onEditClick(e1: any) {
    alert('edit')
  }

  onDeleteClick(e1: any) {
    // console.log(e1.rowData.bookingId);
    this.bookingservice.deleteBooking(e1.rowData.bookingId).subscribe(
      (response: any) => {
        this.toastr.success('Booking Deleted', 'Success');
      },
      (error: any) => {
        this.toastr.error('Delete Failed', 'Error');
      }
    );
  }

}













// dtOptions: DataTables.Settings = {};
//   trackings: Tracking[];
//   private baseUrl = environment.usersUrl;

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     const that = this;

//     this.dtOptions = {
//       // pagingType: 'full_numbers',
//       pageLength: 10,
//       serverSide: true,
//       processing: true,
//       ajax: (dataTablesParameters: any, callback) => {
//         that.http
//           .get<DataTablesResponse>(
//             this.baseUrl+'/booking/getAllBookingInfo',
//             dataTablesParameters
//           ).subscribe(resp => {
//             // console.log(resp);
//             callback({
//               data: resp
//             });
//           });
//       },
//       columns: [
//         { data: 'bookingId' },
//         { data: 'senderName' }, 
//         // { data: 'senderAddress' },
//         { data: 'senderMobileNumber' },
//         { data: 'senderPinCode' },
//         { data: 'receiverName' },
//         // { data: 'receiverAddress' },
//         { data: 'receiverMobileNumber' },
//         { data: 'receiverPinCode' }]
//     };

//   }
