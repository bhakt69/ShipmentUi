import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Tracking } from '../model/tracking';
import { environment } from 'src/environments/environment';



class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  trackings: Tracking[];
  private baseUrl = environment.usersUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .get<DataTablesResponse>(
            this.baseUrl+'/booking/getAllBookingInfo',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.trackings = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'bookingId' }, { data: 'senderName' }, { data: 'receiverName' }]
    };

  }

}
