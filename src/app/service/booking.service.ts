import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Booking, Status } from '../model/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  private baseUrl = environment.usersUrl;

  constructor(private http: HttpClient) { }

  public createBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>( this.baseUrl + '/booking/create', booking);
  }

  public getAllBookingList(): Observable<Booking[]> {
    return this.http.get<Booking[]>( this.baseUrl + '/booking/getAllBookingInfo');
  }

  public deleteBooking(bookingId: number): any {
    return this.http.delete<any>(this.baseUrl + '/booking/delete/'+ bookingId);
  }


  public changeBookingStatus(bookingId: number, bookingStatus: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/booking/editStatus?bookingId=' + bookingId + '&status=' + bookingStatus, '');
  }

  public editShipment(booking: Booking): Observable<Booking> {
    return this.http.put<Booking>(this.baseUrl + '/booking/editShipment', booking);
  }
}
