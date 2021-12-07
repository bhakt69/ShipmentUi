import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Tracking } from '../model/tracking';
import { environment } from 'src/environments/environment';
import { BookingService } from '../service/booking.service';
import { ToastrService } from 'ngx-toastr';



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

export class OrderListComponent implements OnInit {

  ngOnInit(): void {
    
  }

  //ng-grid from here
  public gridApi: any;
  public gridColumnApi:any;
  public columnDefs: any;
  public sortingOrder: any;
  private bookingservice: BookingService;
  private toastr: ToastrService;

  constructor(private http: HttpClient){
    this.columnDefs=[
      {
        headerName: "Name",
        field:"senderName",
        width: 150,
        sortable: true,
        sortingOrder:['asc', 'desc', 'null']
      },
      {
        headerName: "Sender City",
        field: "senderCityName",
        width: 250,
        sortable: true,
        sortingOrder: ['asc', 'desc']
      }
    ]
    this.sortingOrder = ["asc", "desc", "null"];
  }


    onGridReady(params: any){
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.http.get("http://localhost:8080/booking/getAllBookingInfo")
      .subscribe(response => {
        params.api.setRowData(response);
      })
      // this.bookingservice.getAllBookingList().subscribe(
      //   (response: any) => {
      //     params.api.setRowData(response);
      //   },
      //   (error: any) => {
      //     this.toastr.error('','Error');
      //   }
      // );
      // let datavalue = [{"senderName": "Rohit", "senderCityName": "Indore"},{"senderName": "Ankit", "senderCityName": "Asansol"}]
      
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
