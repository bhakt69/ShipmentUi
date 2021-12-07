import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Booking } from '../model/booking';

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
}
